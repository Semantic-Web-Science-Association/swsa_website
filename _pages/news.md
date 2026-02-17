---
title: News
layout: single
permalink: /news/
---

{% assign news_sorted = site.news | sort: "date" | reverse %}

{% for post in news_sorted %}
## {{ post.title }}

*{{ post.date | date: "%B %-d, %Y" }}*

{{ post.content }}

<hr>
{% endfor %}
