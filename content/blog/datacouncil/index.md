---
title: Datacouncil NYC 19' Talk
date: "2019-09-01"
description: Building Systems to Monitor Data and Model Health in Production Systems.
thumbnail:
---

Oct 21 2020 Update: 

[@Chip Huyen](https://twitter.com/chipro) has a great thread that talks a lot about this as well, check it out here: https://twitter.com/chipro/status/1313921889061015557?s=20

---

Building Systems to Monitor Data and Model Health in Production Systems. Unlike traditional deterministic software, models in production start to degrade as soon as they have been deployed.

Typically these degradations are caused by three broad types of problems:

1. Bugs in the data data pipeline: This can manifest in many different ways e.g. someone changes code upstream and now a particular column could be filled with NaNs.

2. Input distribution shifts: This is caused by changes in real world phenomenon e.g. a bank has a churn prediction model - their competitor has just released a new competitive campaign. This in itself can manifest in distribution shifts as customer behavior changes.

3. Concept drift: This happens when the actual relationship between the input and output changes.

Traditional testing infrastructure is currently not suitable to handle the dynamic nature of machine learning models.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/WZNEsc7ynxI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> In this talk, Mohammed Ridwanul, Product Manager at Dessa, will speak about writing tests to monitor machine learning models, creating data contracts and metadata stores for reference checks and building automated systems around model testing to prevent degradation in production.

