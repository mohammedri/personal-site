---
title: Understanding True Positives, False Positives, True Negatives & False Negatives
---

This sounds silly now and I am almost ashamed to say how much of a terrible time I have always had remembering what constitutes true positives, true negatives, false positives & false negatives. 

To this day - I will slip occassionally but much lesser so now then before!

Here is the silly way it finally worked and clicked for me:

True positives == these are actually true AND have been selected by the model. **Yay, found a good one!**

True negative == these are actually wrong and have been classified as wrong by the model.  **Nothing here, really!**

False Negatives == these are actually correct but have been classified as wrong by the model. **Missed a good one, so sorry!**

False Positive == these are actually wrong but have been classified as correct by the model.  **Oops, false alarm, sorry!**.

---

This diagram from Wikimedia also really helped click & remember this concept. I am a visual learner, as such the picture is often stuck in my head.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Precisionrecall.svg/495px-Precisionrecall.svg.png)