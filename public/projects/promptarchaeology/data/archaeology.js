// Prompt Archaeology Data
// Real data extracted from ~/.claude conversation history

const ARCHAEOLOGY_DATA = {
    summary: {
        totalPrompts: 10497,
        totalDays: 68,
        totalProjects: 53,
        totalSessions: 370,
        dateRange: {
            start: "2025-11-25",
            end: "2026-02-04"
        }
    },

    byDate: {
        "2025-11-25": { prompts: 34, projects: ["mcqmcp"] },
        "2025-11-26": { prompts: 6, projects: ["mcqmcp"] },
        "2025-11-30": { prompts: 26, projects: ["Claudetabs"] },
        "2025-12-01": { prompts: 28, projects: ["mcqmcp", "Claudetabs"] },
        "2025-12-02": { prompts: 13, projects: ["mcqmcp"] },
        "2025-12-03": { prompts: 4, projects: ["mcqmcp"] },
        "2025-12-04": { prompts: 10, projects: ["plasmacell", "latinclaude", "mcqmcp"] },
        "2025-12-05": { prompts: 131, projects: ["mcqmcp", "blendercell", "plasmacell", "latinclaude"] },
        "2025-12-06": { prompts: 83, projects: ["latinclaude", "mcqmcp", "Claudetabs"] },
        "2025-12-07": { prompts: 108, projects: ["soma", "mcqmcp", "blendercell", "latinclaude"] },
        "2025-12-08": { prompts: 102, projects: ["soma", "mcqmcp", "blendercell", "latinclaude"] },
        "2025-12-09": { prompts: 256, projects: ["soma", "mcqmcp", "blendercell", "latinclaude"] },
        "2025-12-10": { prompts: 75, projects: ["mcqmcp", "sourcelibrary", "latinclaude"] },
        "2025-12-11": { prompts: 54, projects: ["sourcelibrary", "mcqmcp", "latinclaude"] },
        "2025-12-12": { prompts: 58, projects: ["sourcelibrary", "secondrenaissance", "latinclaude"] },
        "2025-12-13": { prompts: 1, projects: ["sleep"] },
        "2025-12-14": { prompts: 21, projects: ["sourcelibrary", "secondrenaissance"] },
        "2025-12-15": { prompts: 121, projects: ["sourcelibrary", "secondrenaissance"] },
        "2025-12-16": { prompts: 56, projects: ["sourcelibrary", "mcqmcp", "secondrenaissance"] },
        "2025-12-17": { prompts: 267, projects: ["sourcelibrary-v2", "sourcelibrary", "secondrenaissance"] },
        "2025-12-18": { prompts: 170, projects: ["sourcelibrary-v2", "secondrenaissance"] },
        "2025-12-19": { prompts: 18, projects: ["sourcelibrary-v2", "secondrenaissance"] },
        "2025-12-20": { prompts: 56, projects: ["sourcelibrary-v2", "secondrenaissance"] },
        "2025-12-21": { prompts: 182, projects: ["sourcelibrary-v2", "secondrenaissance"] },
        "2025-12-22": { prompts: 102, projects: ["sourcelibrary-v2", "secondrenaissance"] },
        "2025-12-23": { prompts: 70, projects: ["sourcelibrary-v2", "3d"] },
        "2025-12-24": { prompts: 79, projects: ["sourcelibrary-v2", "3d"] },
        "2025-12-25": { prompts: 299, projects: ["sourcelibrary-v2", "translate", "3d"] },
        "2025-12-26": { prompts: 261, projects: ["sourcelibrary-v2", "milo"] },
        "2025-12-27": { prompts: 282, projects: ["sourcelibrary-v2", "translate", "milo"] },
        "2025-12-28": { prompts: 166, projects: ["sourcelibrary-v2", "translate"] },
        "2025-12-29": { prompts: 224, projects: ["sourcelibrary-v2", "philosopherslibrary"] },
        "2025-12-30": { prompts: 229, projects: ["minibooks", "sourcelibrary-v2"] },
        "2025-12-31": { prompts: 156, projects: ["minibooks", "sourcelibrary-v2"] },
        "2026-01-01": { prompts: 301, projects: ["minibooks", "sourcelibrary-v2", "3d", "etherhill"] },
        "2026-01-02": { prompts: 108, projects: ["minibooks", "sourcelibrary-v2", "lilbookies"] },
        "2026-01-03": { prompts: 83, projects: ["minibooks", "sourcelibrary-v2", "lilbookies"] },
        "2026-01-04": { prompts: 267, projects: ["minibooks", "sourcelibrary-v2", "lilbookies", "milo"] },
        "2026-01-05": { prompts: 81, projects: ["sourcelibrary-v2", "CardDecks", "lilbookies", "designtherapy"] },
        "2026-01-06": { prompts: 286, projects: ["sourcelibrary-v2", "lilbookies", "playpowerlearn"] },
        "2026-01-07": { prompts: 4, projects: ["sourcelibrary-v2"] },
        "2026-01-08": { prompts: 293, projects: ["lilbookies", "playpowerlearn"] },
        "2026-01-09": { prompts: 297, projects: ["lilbookies", "playpowerlearn"] },
        "2026-01-10": { prompts: 262, projects: ["sourcelibrary-v2", "lilbookies", "playpowerlearn"] },
        "2026-01-11": { prompts: 175, projects: ["sourcelibrary-v2", "lilbookies", "playpowerlearn"] },
        "2026-01-12": { prompts: 477, projects: ["sourcelibrary-v2", "lilbookies", "playpowerlearn"] },
        "2026-01-13": { prompts: 267, projects: ["sourcelibrary-v2", "lilbookies", "xwhysi", "fractalviewer"] },
        "2026-01-14": { prompts: 244, projects: ["quests", "lilbookies", "Seliger"] },
        "2026-01-15": { prompts: 149, projects: ["sourcelibrary-v2", "CardDecks", "quests", "lilbookies"] },
        "2026-01-16": { prompts: 68, projects: ["sourcelibrary-v2", "lilbookies", "quests"] },
        "2026-01-17": { prompts: 70, projects: ["lilbookies", "playpowerlearn", "babysees"] },
        "2026-01-18": { prompts: 321, projects: ["lilbookies", "playpowerlearn", "babysees"] },
        "2026-01-19": { prompts: 42, projects: ["lilbookies", "playpowerlearn"] },
        "2026-01-20": { prompts: 297, projects: ["optimize", "lilbookies", "playpowerlearn"] },
        "2026-01-21": { prompts: 144, projects: ["lilbookies"] },
        "2026-01-22": { prompts: 234, projects: ["playgames", "bett", "lilbookies", "playpowerlearn"] },
        "2026-01-23": { prompts: 37, projects: ["lilbookies", "playpowerlearn"] },
        "2026-01-25": { prompts: 85, projects: ["dereklomas", "play", "clawdbot"] },
        "2026-01-26": { prompts: 370, projects: ["dereklomas", "lilbookies", "clawdbot", "AIED"] },
        "2026-01-27": { prompts: 47, projects: ["AIED", "clawdbot"] },
        "2026-01-28": { prompts: 1, projects: ["dereklomas"] },
        "2026-01-29": { prompts: 5, projects: ["secondrenaissance", "playpowergames"] },
        "2026-01-30": { prompts: 116, projects: ["playpowergames", "AIED", "vibecodingevents"] },
        "2026-01-31": { prompts: 2, projects: ["dereklomas", "vibecodingevents"] },
        "2026-02-01": { prompts: 170, projects: ["vibecodingevents", "AIED", "playpowergames", "clawdbot"] },
        "2026-02-02": { prompts: 793, projects: ["clawdbot", "AIED", "lilbookies", "playpowerlearn"] },
        "2026-02-03": { prompts: 477, projects: ["philosopherslibrary", "AIED", "clawdbot", "playpowerlearn"] },
        "2026-02-04": { prompts: 176, projects: ["dereklomas", "clawdbot", "oura", "promptknowledge"] }
    },

    hourly: {
        0: 5716, 1: 4186, 2: 2578, 3: 709, 4: 1361, 5: 439,
        6: 486, 7: 1179, 8: 3082, 9: 4614, 10: 5423, 11: 5219,
        12: 4783, 13: 5659, 14: 7254, 15: 5783, 16: 7210, 17: 3846,
        18: 3244, 19: 3041, 20: 3864, 21: 5113, 22: 5775, 23: 7187
    },

    topProjects: [
        { name: "sourcelibrary-v2", prompts: 2216, days: 28, start: "2025-12-17", end: "2026-01-16" },
        { name: "playpowerlearn", prompts: 1605, days: 18, start: "2026-01-06", end: "2026-02-04" },
        { name: "lilbookies", prompts: 1550, days: 25, start: "2026-01-02", end: "2026-02-02" },
        { name: "AIED", prompts: 1425, days: 6, start: "2026-01-26", end: "2026-02-03" },
        { name: "secondrenaissance", prompts: 546, days: 23, start: "2025-12-12", end: "2026-02-03" },
        { name: "clawdbot", prompts: 297, days: 8, start: "2026-01-25", end: "2026-02-04" },
        { name: "latinclaude", prompts: 296, days: 9, start: "2025-12-04", end: "2025-12-12" },
        { name: "mcqmcp", prompts: 287, days: 13, start: "2025-11-25", end: "2025-12-16" }
    ],

    projectColors: {
        "sourcelibrary-v2": "#58a6ff",
        "playpowerlearn": "#39d353",
        "lilbookies": "#f778ba",
        "AIED": "#ff7b72",
        "secondrenaissance": "#d2a8ff",
        "clawdbot": "#ffa657",
        "mcqmcp": "#79c0ff",
        "latinclaude": "#7ee787",
        "babysees": "#a5d6ff",
        "CardDecks": "#ffd700",
        "quests": "#98fb98",
        "philosopherslibrary": "#dda0dd",
        "default": "#8b949e"
    }
};

// Real interleave data - actual switching sequences from peak days
const INTERLEAVE_DATA = {
    "2026-01-12": {
        prompts: 6693,
        switches: 1645,
        sequence: ["playpowerlearn/v2", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "sourcelibrary/v2", "lilbookies", "playpowerlearn", "lilbookies", "sourcelibrary/v2", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn"],
        projects: ["CardDecks", "playpowerlearn/v2", "lilbookies", "playpowerlearn", "sourcelibrary/v2"]
    },
    "2026-01-08": {
        prompts: 6631,
        switches: 831,
        sequence: ["playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies"],
        projects: ["lilbookies", "playpowerlearn"]
    },
    "2026-02-02": {
        prompts: 5869,
        switches: 1440,
        sequence: ["clawdbot", "AIED", "clawdbot", "AIED", "clawdbot", "AIED", "clawdbot", "AIED", "clawdbot", "AIED", "clawdbot", "AIED", "dereklomas", "AIED", "dereklomas", "AIED", "dereklomas", "AIED", "clawdbot", "AIED", "dereklomas", "AIED", "dereklomas", "AIED", "dereklomas", "AIED", "dereklomas", "AIED", "dereklomas", "AIED", "dereklomas", "playpowerlearn", "dereklomas", "AIED", "dereklomas", "AIED", "dereklomas", "AIED", "dereklomas", "AIED", "playpowerlearn", "dereklomas", "AIED", "dereklomas", "AIED", "playpowergames", "AIED", "playpowergames", "AIED", "playpowergames"],
        projects: ["dereklomas", "playpowerlearn", "AIED", "philosopherslibrary", "clawdbot", "playpowergames"]
    },
    "2026-01-20": {
        prompts: 3747,
        switches: 873,
        sequence: ["playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "optimize", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies"],
        projects: ["optimize", "lilbookies", "playpowerlearn"]
    },
    "2026-01-18": {
        prompts: 3141,
        switches: 969,
        sequence: ["lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "playpowerlearn", "lilbookies", "babysees", "lilbookies", "babysees", "lilbookies", "babysees", "lilbookies", "babysees", "lilbookies", "babysees", "lilbookies", "babysees", "lilbookies", "babysees", "lilbookies", "babysees", "lilbookies", "babysees", "playpowerlearn", "lilbookies", "babysees", "lilbookies", "babysees", "lilbookies", "babysees", "lilbookies", "babysees", "lilbookies", "babysees", "lilbookies", "babysees", "lilbookies", "babysees", "playpowerlearn", "lilbookies", "playpowerlearn"],
        projects: ["babysees", "lilbookies", "playpowerlearn"]
    }
};

const CO_OCCURRENCE = [
    { p1: "lilbookies", p2: "playpowerlearn", days: 17 },
    { p1: "sourcelibrary-v2", p2: "secondrenaissance", days: 14 },
    { p1: "sourcelibrary-v2", p2: "lilbookies", days: 11 },
    { p1: "lilbookies", p2: "babysees", days: 8 },
    { p1: "clawdbot", p2: "dereklomas", days: 7 }
];

// Detailed day data with timestamps and prompt lengths
const DAY_DETAIL_DATA = {
  "2026-01-12": {
    total_prompts: 6693,
    blocks: [
      { project: "playpowerlearn/v2", time: "08:50", prompts: 14, chars: 75 },
      { project: "playpowerlearn", time: "09:15", prompts: 19, chars: 10586 },
      { project: "lilbookies", time: "09:18", prompts: 2, chars: 0 },
      { project: "playpowerlearn", time: "09:18", prompts: 11, chars: 0 },
      { project: "lilbookies", time: "09:19", prompts: 12, chars: 16 },
      { project: "playpowerlearn", time: "09:20", prompts: 5, chars: 4 },
      { project: "sourcelibrary/v2", time: "09:20", prompts: 2, chars: 7 },
      { project: "lilbookies", time: "09:20", prompts: 14, chars: 0 },
      { project: "playpowerlearn", time: "09:21", prompts: 8, chars: 69 },
      { project: "lilbookies", time: "09:22", prompts: 8, chars: 0 },
      { project: "playpowerlearn", time: "09:23", prompts: 11, chars: 959 },
      { project: "lilbookies", time: "09:24", prompts: 4, chars: 1420 },
      { project: "playpowerlearn", time: "09:26", prompts: 4, chars: 0 },
      { project: "playpowerlearn/v2", time: "09:27", prompts: 60, chars: 1251 },
      { project: "lilbookies", time: "09:32", prompts: 14, chars: 125 },
      { project: "playpowerlearn/v2", time: "09:33", prompts: 20, chars: 445 },
      { project: "playpowerlearn", time: "09:34", prompts: 15, chars: 579 }
    ],
    hourly: {
      8: { prompts: 14, chars: 75, projects: ["playpowerlearn/v2"] },
      9: { prompts: 627, chars: 50631, projects: ["sourcelibrary/v2", "playpowerlearn", "playpowerlearn/v2", "lilbookies"] },
      10: { prompts: 449, chars: 35287, projects: ["sourcelibrary/v2", "CardDecks", "playpowerlearn", "playpowerlearn/v2"] },
      11: { prompts: 467, chars: 14495, projects: ["playpowerlearn/v2", "lilbookies"] },
      12: { prompts: 638, chars: 52109, projects: ["playpowerlearn", "playpowerlearn/v2", "lilbookies"] },
      13: { prompts: 805, chars: 33676, projects: ["playpowerlearn", "playpowerlearn/v2", "lilbookies"] },
      14: { prompts: 1046, chars: 80278, projects: ["playpowerlearn", "playpowerlearn/v2", "lilbookies"] },
      15: { prompts: 69, chars: 9367, projects: ["playpowerlearn"] },
      16: { prompts: 933, chars: 35557, projects: ["playpowerlearn", "playpowerlearn/v2", "lilbookies"] },
      17: { prompts: 274, chars: 1664, projects: ["playpowerlearn", "lilbookies"] },
      18: { prompts: 449, chars: 82182, projects: ["playpowerlearn", "lilbookies"] },
      19: { prompts: 60, chars: 12602, projects: ["playpowerlearn"] },
      20: { prompts: 176, chars: 6414, projects: ["playpowerlearn", "lilbookies"] },
      21: { prompts: 686, chars: 83897, projects: ["playpowerlearn", "lilbookies"] }
    },
    projects: {
      "playpowerlearn": { prompts: 4445, chars: 394362 },
      "playpowerlearn/v2": { prompts: 1122, chars: 45261 },
      "lilbookies": { prompts: 725, chars: 46258 },
      "sourcelibrary/v2": { prompts: 154, chars: 8892 }
    }
  },
  "2026-01-08": {
    total_prompts: 6631,
    blocks: [
      { project: "playpowerlearn", time: "10:17", prompts: 5, chars: 38 },
      { project: "lilbookies", time: "10:20", prompts: 3, chars: 154 },
      { project: "playpowerlearn", time: "10:21", prompts: 12, chars: 2149 },
      { project: "lilbookies", time: "10:24", prompts: 7, chars: 39 },
      { project: "playpowerlearn", time: "10:27", prompts: 22, chars: 2290 },
      { project: "lilbookies", time: "10:30", prompts: 6, chars: 47 },
      { project: "playpowerlearn", time: "10:31", prompts: 62, chars: 1599 },
      { project: "lilbookies", time: "10:33", prompts: 8, chars: 541 },
      { project: "playpowerlearn", time: "10:39", prompts: 58, chars: 3590 },
      { project: "lilbookies", time: "10:44", prompts: 12, chars: 0 },
      { project: "playpowerlearn", time: "10:48", prompts: 47, chars: 696 },
      { project: "lilbookies", time: "10:56", prompts: 4, chars: 0 },
      { project: "playpowerlearn", time: "10:57", prompts: 8, chars: 136 },
      { project: "lilbookies", time: "10:59", prompts: 8, chars: 11907 },
      { project: "playpowerlearn", time: "11:00", prompts: 72, chars: 1334 }
    ],
    hourly: {
      10: { prompts: 313, chars: 23100, projects: ["playpowerlearn", "lilbookies"] },
      11: { prompts: 747, chars: 28405, projects: ["playpowerlearn", "lilbookies"] },
      12: { prompts: 687, chars: 56129, projects: ["playpowerlearn", "lilbookies"] },
      13: { prompts: 371, chars: 10863, projects: ["playpowerlearn", "lilbookies"] },
      14: { prompts: 841, chars: 36814, projects: ["playpowerlearn", "lilbookies"] },
      15: { prompts: 286, chars: 5061, projects: ["playpowerlearn", "lilbookies"] },
      16: { prompts: 181, chars: 2674, projects: ["playpowerlearn", "lilbookies"] },
      17: { prompts: 179, chars: 7660, projects: ["playpowerlearn", "lilbookies"] },
      22: { prompts: 1254, chars: 60313, projects: ["playpowerlearn", "lilbookies"] },
      23: { prompts: 1517, chars: 91167, projects: ["playpowerlearn", "lilbookies"] }
    },
    projects: {
      "playpowerlearn": { prompts: 5868, chars: 265478 },
      "lilbookies": { prompts: 733, chars: 59853 }
    }
  },
  "2026-02-02": {
    total_prompts: 5869,
    blocks: [
      { project: "clawdbot", time: "00:00", prompts: 4, chars: 31 },
      { project: "AIED", time: "00:01", prompts: 299, chars: 43887 },
      { project: "clawdbot", time: "09:26", prompts: 2, chars: 495 },
      { project: "AIED", time: "09:30", prompts: 25, chars: 566 },
      { project: "dereklomas", time: "09:32", prompts: 3, chars: 56 },
      { project: "AIED", time: "09:33", prompts: 22, chars: 543 },
      { project: "dereklomas", time: "09:36", prompts: 22, chars: 3749 },
      { project: "playpowerlearn", time: "09:36", prompts: 2, chars: 27 },
      { project: "AIED", time: "09:42", prompts: 14, chars: 11719 },
      { project: "playpowergames", time: "09:43", prompts: 23, chars: 87 },
      { project: "AIED", time: "09:44", prompts: 12, chars: 805 },
      { project: "clawdbot", time: "09:44", prompts: 8, chars: 0 }
    ],
    hourly: {
      0: { prompts: 146, chars: 21420, projects: ["clawdbot", "AIED"] },
      9: { prompts: 355, chars: 52856, projects: ["dereklomas", "playpowerlearn", "clawdbot", "AIED", "playpowergames"] },
      10: { prompts: 494, chars: 58353, projects: ["playpowerlearn", "philosopherslibrary", "clawdbot", "AIED"] },
      11: { prompts: 531, chars: 78660, projects: ["playpowerlearn", "AIED", "lilbookies"] },
      12: { prompts: 523, chars: 121297, projects: ["philosopherslibrary", "AIED"] },
      14: { prompts: 254, chars: 18345, projects: ["clawdbot", "AIED"] },
      16: { prompts: 477, chars: 154626, projects: ["clawdbot", "AIED"] },
      18: { prompts: 379, chars: 52543, projects: ["dereklomas", "playpowerlearn", "philosopherslibrary", "clawdbot", "AIED"] },
      20: { prompts: 566, chars: 55770, projects: ["dereklomas", "playpowerlearn", "philosopherslibrary", "clawdbot", "AIED"] },
      21: { prompts: 456, chars: 113637, projects: ["dereklomas", "playpowerlearn", "philosopherslibrary", "clawdbot", "AIED"] }
    },
    projects: {
      "AIED": { prompts: 4391, chars: 873290 },
      "clawdbot": { prompts: 615, chars: 74828 },
      "philosopherslibrary": { prompts: 355, chars: 42097 },
      "playpowerlearn": { prompts: 260, chars: 32625 },
      "playpowergames": { prompts: 87, chars: 13709 },
      "dereklomas": { prompts: 86, chars: 5571 }
    }
  },
  "2026-02-03": {
    total_prompts: 4039,
    blocks: [
      { project: "philosopherslibrary", time: "00:12", prompts: 1, chars: 0 },
      { project: "AIED", time: "00:15", prompts: 61, chars: 11596 },
      { project: "clawdbot", time: "00:19", prompts: 6, chars: 21783 },
      { project: "AIED", time: "00:22", prompts: 29, chars: 2692 },
      { project: "playpowerlearn", time: "00:27", prompts: 2, chars: 16 },
      { project: "clawdbot", time: "00:28", prompts: 5, chars: 54 },
      { project: "AIED", time: "00:29", prompts: 20, chars: 515 },
      { project: "philosopherslibrary", time: "00:33", prompts: 17, chars: 0 },
      { project: "clawdbot", time: "00:34", prompts: 9, chars: 127 },
      { project: "AIED", time: "00:35", prompts: 9, chars: 2653 },
      { project: "AIED", time: "00:36", prompts: 107, chars: 3536 },
      { project: "philosopherslibrary", time: "00:50", prompts: 6, chars: 0 },
      { project: "AIED", time: "00:51", prompts: 36, chars: 9422 },
      { project: "philosopherslibrary", time: "01:00", prompts: 15, chars: 14725 },
      { project: "AIED", time: "01:13", prompts: 49, chars: 24134 },
      { project: "AIED", time: "01:29", prompts: 430, chars: 73517 }
    ],
    hourly: {
      0: { prompts: 355, chars: 55427, projects: ["philosopherslibrary", "clawdbot", "playpowerlearn", "AIED"] },
      1: { prompts: 401, chars: 74188, projects: ["philosopherslibrary", "clawdbot", "AIED"] },
      2: { prompts: 545, chars: 139457, projects: ["philosopherslibrary", "clawdbot", "AIED"] },
      3: { prompts: 438, chars: 58161, projects: ["playpowerlearn", "AIED"] },
      4: { prompts: 717, chars: 84228, projects: ["AIED"] },
      5: { prompts: 223, chars: 25516, projects: ["AIED"] },
      19: { prompts: 168, chars: 7937, projects: ["clawdbot", "vibecodingevents", "CodeVibing"] },
      21: { prompts: 204, chars: 7337, projects: ["dereklomas", "playpowerlearn", "vibecodingevents", "oura", "CodeVibing", "clawdbot"] },
      22: { prompts: 503, chars: 50752, projects: ["dereklomas", "playpowerlearn", "vibecodingevents", "oura", "CodeVibing", "clawdbot"] },
      23: { prompts: 463, chars: 32995, projects: ["dereklomas", "playpowerlearn", "vibecodingevents", "oura", "CodeVibing", "clawdbot"] }
    },
    projects: {
      "AIED": { prompts: 2535, chars: 398909 },
      "clawdbot": { prompts: 409, chars: 49070 },
      "CodeVibing": { prompts: 268, chars: 24016 },
      "vibecodingevents": { prompts: 219, chars: 24096 },
      "dereklomas": { prompts: 186, chars: 5291 },
      "playpowerlearn": { prompts: 108, chars: 9253 },
      "philosopherslibrary": { prompts: 83, chars: 15219 }
    }
  }
};
