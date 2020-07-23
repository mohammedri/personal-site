---
title: Precision vs. Recall
---

Precision & recall has been explained a thousand times in various medium articles, but I have found most descriptions to be quite poor. 

Here is my attempt at it.

First of, if you dont know your True Positives et. al. see [ML Sets](understanding-ml-sets) before reading on.

Precision is the ratio of actually true predictions (True positives)  by the model vs. Total number of things the model thinks is true i.e. (true positives + False positives). 

So let’s say we are building a search engine, user inputs a query - the search model returns 40 results _it thinks is relevant_. 

These 40 results will contain some which are actually relevant (true positives) and some that are not  (false positives)

Let’s say 15 of these 40 are actually relevant. 

Then the precision of the model = 15/40. 

---

Recall is the ratio of actually true predictions made by the model vs. All the truth that is available (which may or may not have been predicted) in space (True positives + False negatives) 

Another  way to interpret this is  - in a world which has 40 correct results, how many of these correct results were the model actually able to retrieve? 

Let’s take the example of a search model: 
* A search engine model returns 30 pages. 
* 20 of these are actually correct / relevant results. 
* But the search engine missed 40 other results that are also correct - the search engine classified the e40 as not relevant. 
* The recall is 20/(40+20) 

---

This diagram from Wikimedia also really helped click & remember this concept. I am a visual learner, as such the picture is often stuck in my head.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Precisionrecall.svg/495px-Precisionrecall.svg.png)

---

Adapted from: [Precision and recall - Wikipedia](https://en.wikipedia.org/wiki/Precision_and_recall#:~:text=In%20pattern%20recognition%2C%20information%20retrieval,of%20relevant%20instances%20that%20were)