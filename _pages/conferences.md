---
title: Conferences
layout: single
permalink: /conferences/
classes: wide
---

{% assign conf_sorted = site.conferences | sort: "start_date" | reverse %}

{% for c in conf_sorted %}
### [{{ c.title }}]({{ c.url | relative_url }})

**{{ c.location }}** — {{ c.start_date | date: "%B %-d, %Y" }} – {{ c.end_date | date: "%B %-d, %Y" }}

{% if c.website %}
Website: [{{ c.website }}]({{ c.website }})
{% endif %}

{% endfor %}
