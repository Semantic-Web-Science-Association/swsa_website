---
title: News
layout: single
permalink: /news/
---

{% assign news_sorted = site.news | sort: "date" | reverse %}

{% for item in news_sorted %}
### [{{ item.title }}]({{ item.url | relative_url }})

<small>{{ item.date | date: "%B %-d, %Y" }}</small>

{{ item.excerpt | strip_html | truncate: 220 }}

{% endfor %}
