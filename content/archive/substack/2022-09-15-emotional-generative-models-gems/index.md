---
title: "Emotional Generative Models (GeMs)"
date: "2022-09-15"
source_url: "https://aixd.substack.com/p/emotional-generative-models-gems"
platform: "substack"
archived: "2026-02-10T18:55:14.954183"
---

### **Emotional Generative Models (GeMs)**

*How emotionally intelligent are Generative Models?*

[![](images/https_3A_2F_2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.png)](https://substackcdn.com/image/fetch/$s_!yg_R!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3624c54a-50ff-49b7-95fa-80e735d3d181_800x320.png)

Some emotional gems by MidJourney

Generative Models (GeMs) have been through rapid developments in the past months. It is undisputed that these models will have tremendous effects on design research, design education, design practice and the sciences in general. Text models like GPT-3 may help designers communicate their ideas better by enhancing their writing and text-to-image models (e.g., DALL-E 2, StableDiffusion, MidJourney) may open a whole new modality of creative thinking. With these models are becoming more accessible, [academics](https://arxiv.org/pdf/2207.10192.pdf) and [industrial researchers](https://openai.com/alignment/) note that **it is important that GeMs align with human intent.**

To align AI, one promising venture may be to **improve the emotional intelligence** of such models. Emotional intelligence in humans is linked to [higher levels of wellbeing](https://www.emerald.com/insight/content/doi/10.1108/02683940910922546/full/html). Thus, enhancing the emotional intelligence of GeMs may lead to models that will be able to support human wellbeing by understanding their experiences better, and help people to develop higher emotional intelligence and support them in expressing their emotions better.

**How then may we improve the emotional intelligence of GeMs?** While emotional intelligence in humans exists of several different facets (e.g., self-awareness, empathy, emotional regulation), there is one characteristic that may directly apply to GeMs: emotional granularity or emotion differentiation.

Before we are looking to enhance emotional granularity of GeMs, what is the current state of the system? Let’s test this by having [DALL-E](https://openai.com/dall-e-2/) and [StableDiffusion](https://huggingface.co/spaces/stabilityai/stable-diffusion) generate emotion-laden images. For this exploration, the 6 basic emotions (anger, surprise, disgust, enjoyment, fear, and sadness)of [Ekman](https://www.researchgate.net/publication/228995821_Cognition_and_emotion_Future_directions) will be used.

### DALL·E (left) compared to StableDiffusion (right)

Note that in conventional emotion theory, an emotion always has 1) a trigger, 2) an experience, 3) an expression. Since the visual medium is good for *expression*, we will start off our exploration by generating images of people expressing emotions.

The prompt was *“a person expressing [emotion]”*

[![](images/https_3A_2F_2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.jpeg)](https://substackcdn.com/image/fetch/$s_!2TwW!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fb6c4d009-edaf-49e1-8ecd-811cfa10a1b3_800x198.jpeg)

Figure 1. Anger, also known as extreme frowning. Interestingly, anger is always directed at something, so the finger pointing to the camera is a noteworthy association.

[![](images/https_3A_2F_2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984_1.jpeg)](https://substackcdn.com/image/fetch/$s_!zFXa!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Faf60685f-d563-4a6f-b62e-fa63b7cc406e_800x200.jpeg)

Figure 2. Surprise — why does DALL·E associate surprise with pink? And why is everyone that is surprised scared, sad, and angry at the same time according to SD?

[![](images/https_3A_2F_2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984_2.jpeg)](https://substackcdn.com/image/fetch/$s_!tnx1!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fd6b9694d-4b96-4b98-93d8-03b8e693df69_800x200.jpeg)

Figure 3. Enjoyment — despite the odd looking faces, both models seems to grasp this emotion pretty wel.

[![](images/https_3A_2F_2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984_3.jpeg)](https://substackcdn.com/image/fetch/$s_!an75!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fc3099709-46e6-4b26-91c0-7123e31b1f47_800x197.jpeg)

Figure 4. Fear — SD is rather fear-inducing than fear-expressive.

[![](images/https_3A_2F_2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984_4.jpeg)](https://substackcdn.com/image/fetch/$s_!Uk1k!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fe62ce306-f6a6-46c1-a60c-0e145027e9bf_800x198.jpeg)

Figure 5. Sadness — both models are pretty successful at being sad.

But wait, weren’t there 6 basic emotions? Apparently, using the word “disgust” is against OpenAI’s policy. Nonetheless, SD came up with the terrifying images below…

[![](images/https_3A_2F_2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984_1.png)](https://substackcdn.com/image/fetch/$s_!8Rvf!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F6c59b5cf-7d85-4960-be34-cf7abbd2de52_800x400.png)

Figure 6. Disgust — apparently seeing something disgusting makes you weep.

### There is emotional granularity, but…

…what strikes the eye, is that the content of the images varies greatly between DALL·E and SD. Regardless, both models make use of the same neural network, [CLIP](https://openai.com/blog/clip/) (correct me if I’m wrong), so the differences are not caused by semantics.

Thus, one can only speculate why these models produce images with such different content — DALL·E seems to “understand” the emotion better, while SD provides more variation between the images, including the image’s context. **Feel free to reach out if you have insights on the matter.**

Despite their differences, it is clear that both models can differentiate between the 6 basic emotions of Ekman — to no one’s surprise. However, emotional granularity extends beyond just these 6 emotions. Rather, researchers have shown that there are at least 63 distinct emotions (38 negative, 25 positive). These emotions have been brought together in the [Emotion Typology](http://emotiontypology.com/) which differentiates among different emotions based on their 1) trigger, 2) experience, and 3) facial expression — in which an emotion is distinct when at least 2 out of 3 characteristics are different from other emotions.

Thus, how well does DALL·E fare when we ask it to express emotions that are close to each other, yet distinct? Let’s begin with the first six negative emotions:

[![](images/https_3A_2F_2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984_2.png)](https://substackcdn.com/image/fetch/$s_!yWS1!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F38857d8d-34a0-447a-915c-8ae0f3982b22_800x109.png)

Figure 7. Categories of Negative Emotions from emotiontypology.com

[![](images/https_3A_2F_2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984_3.png)](https://substackcdn.com/image/fetch/$s_!iskO!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F96df3432-a677-4e72-b404-1a9500676561_800x1207.png)

Figure 8. From top to bottom: Anger, Indignation, Resentment, Annoyance, Dissatisfaction, Frustration.

We can see that the DALL·E “understands” that the emotions are not the same, or rather, there’s emotional granularity in CLIP. However, the manner in which they are depicted can hardly be described as accurate — looking at you “weird-guy-dissatisfaction.” Future work may benefit from labeling emotion-laden images through human feedback in order to develop a dataset to fine-tune CLIP and compare it to other models.

### Conclusions

In the vein of aligning artificially intelligent systems with human intent, we may look to improve the emotional granularity (the ability to differentiate between emotions) of Generative Models (GeMs) such as DALL·E and StableDiffusion to improve their perceived emotional intelligence. Currently, the models show a degree of emotional granularity in the sense that they can differentiate well between the six basic emotions. However, this becomes more difficult for distinct but similar emotions like anger, indignation, and annoyance. Future work should look into fine-tuning CLIP based on a dataset of human-labeled, emotion-laden imagery.