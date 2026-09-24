// Renders public/video/cloud-layer-loop.mp4: one day of real clouds on the Cloud Layer globe
// (https://earthai-scales.vercel.app/globe/), the Earth turning once under a fixed Sun.
//
// The page is paused and stepped by hand (cloud frame + blend + view per output frame), so the
// motion is exact regardless of how fast the machine renders. Needs a real GPU: it opens a
// visible Chrome window. Takes ~20 min on an M-series Mac.
//
//   npm i --no-save puppeteer-core
//   node scripts/capture-cloud-layer-loop.mjs            # writes globe/frames/f0000..f0509.png
//   VIEW_OFF=-70 LAT=14 FRAMES=480                        # (defaults shown: sun angle, tilt, loop length)
//
// Then cross-fade the 30 overlap frames into the start and encode (see the PR that added this file):
//   python: seq[k] = blend(frames[480+k], frames[k], k/30) for k<30, else frames[k]
//   ffmpeg -framerate 30 -i seq/s%04d.png -c:v libx264 -preset slow -crf 28 -pix_fmt yuv420p \
//          -movflags +faststart -an public/video/cloud-layer-loop.mp4
// and save seq frame 0 as public/images/projects/cloud-layer.jpg (the poster).
import puppeteer from 'puppeteer-core';
import fs from 'fs';
const W=1920, H=1080, OUT='globe/frames';
const FRAMES=+(process.env.FRAMES||480), OVER=30;          // loop length + overlap for the seam cross-fade
const CLOUD_FRAMES=144;                                     // one day of ten-minute frames
fs.mkdirSync(OUT,{recursive:true});
const b = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:false,
  args:[`--window-size=${W},${H+140}`,'--autoplay-policy=no-user-gesture-required']});
const p = await b.newPage();
await p.setViewport({width:W,height:H,deviceScaleFactor:1});
await p.goto('https://earthai-scales.vercel.app/globe/#nointro',{waitUntil:'load',timeout:90000});
await p.waitForFunction(()=>window.__dbg && window.__dbg.presented()>0,{timeout:90000});
await p.addStyleTag({content:`
  .stage{position:fixed!important;inset:0!important;width:100vw!important;height:100vh!important;z-index:99999!important}
  .clock,.live,.alert,.hint,.load{display:none!important}`});
await p.evaluate(()=>{ window.dispatchEvent(new Event('resize')); window.__pause();
  // hide the replay prompt that floats over the globe (found by its text; its markup is outside the stage styles)
  const leaf=[...document.querySelectorAll('button,a,span,p,div')].find(el=>el.children.length===0 && /Play the last/.test(el.textContent));
  let box=leaf; while(box && box.parentElement && !box.parentElement.classList.contains('stage') && box.parentElement.getBoundingClientRect().height<160) box=box.parentElement;
  for(const k of ['mw','moon']){ const bt=document.querySelector(`[data-sky="${k}"]`); if(bt && bt.getAttribute('aria-pressed')==='true') bt.click(); }
  if(box) box.style.setProperty('display','none','important');
});
await new Promise(r=>setTimeout(r,1500));
// pick the newest complete day that has at least a few frames of the next day after it
const plan = await p.evaluate((CF)=>{ const m=__dbg.man(); const ds=m.days||[]; 
  const full=ds.map((d,k)=>({k,off:d.off,n:d.n})).filter(d=>d.n>=CF);
  return {ndays:ds.length, total:m.frames.length, fps:m.fps, full:full.slice(-4)}; }, CLOUD_FRAMES);
console.log(JSON.stringify(plan));
const day = plan.full[plan.full.length-2] || plan.full[0];   // second-newest full day: the day after it is complete too
const t0 = day.off;
const step = CLOUD_FRAMES/FRAMES;
for(let k=0;k<FRAMES+OVER;k++){
  const t=t0+k*step;
  await p.evaluate(async (t, VIEW_OFF, LAT, T0)=>{
    // keep the Sun a fixed angle off the view axis: the Earth turns once under the camera per day
    const m=__dbg.man(), i=Math.floor(t), f=t-i;
    const P=s=>{ const g=/(\d{4})-(\d\d)-(\d\d)T(\d\d)(\d\d)Z/.exec(s); return Date.UTC(+g[1],g[2]-1,+g[3],+g[4],+g[5]); };   // frames are named like 2026-09-22T0000Z
    const ms=P(m.frames[T0])+(t-T0)*600000;   // frames are a regular ten minutes apart; some live names are blank
    const d=new Date(ms), hrs=d.getUTCHours()+d.getUTCMinutes()/60+d.getUTCSeconds()/3600;
    const subsolar=-15*(hrs-12);
    window.__setView(subsolar+VIEW_OFF, LAT, null, null);
    const before=__dbg.presented(); const want=Math.floor(t+1);
    const cur=Math.floor(__dbg.days().t[0]*0+0); // unused
    window.__mix = t-Math.floor(t);
    __dbg.seek(t+1);
    // wait until the frame for floor(t+1) has been presented (or it was already showing)
    const t1=performance.now();
    await new Promise(res=>{ const chk=()=>{ const v=__dbg.vid(); const ok=!v.seeking && v.readyState>=2 && (__dbg.presented()>before || window.__lastWant===want);
      if(ok || performance.now()-t1>8000) res(); else requestAnimationFrame(chk); }; chk(); });
    window.__lastWant=want;
    await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
  }, t, +(process.env.VIEW_OFF||-55), +(process.env.LAT||14), t0);
  await p.screenshot({path:`${OUT}/f${String(k).padStart(4,'0')}.png`});
  if(k%60===0) console.log('frame',k);
}
await b.close();
console.log('done');
