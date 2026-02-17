---
title: Conferences
layout: single
permalink: /conferences/
---


## International Semantic Web Conference (ISWC)

The International Semantic Web Conference (ISWC) is the leading conference for research on Semantic Web topics. It is held annually and is the successor of the Semantic Web Working Symposium (SWWS).

The [SWSA Ten-Year Award]({{ "/awards/swsa-ten-year-award/" | relative_url }}) recognizes most influential papers from the ISWC proceedings ten years prior.

The [Code of conduct for ISWC]({{ "/content/code-of-conduct/" | relative_url }}) delineates the behavioural norms expected of ISWC attendees.

The [Semantic Web Conference Corpus](http://scholarlydata.org/) provides access to information about all ISWC conferences in RDF. You can browse and search information on papers that were presented, people who attended, and other things that have to do with the main conferences and workshops.

## European Semantic Web Conference (ESWC)

SWSA has become the steward of ESWC in June 2025. More information about the conference series can be found [here](https://eswc-conferences.org/index.html).

---

# Past conferences

{% assign conf_sorted = site.conferences | sort: "start_date" | reverse %}

{% for c in conf_sorted %}
### {{ c.title }}

**{{ c.location }}** — {{ c.start_date | date: "%B %-d, %Y" }} – {{ c.end_date | date: "%B %-d, %Y" }}

{% if c.website %}
Website: [{{ c.website }}]({{ c.website }})
{% endif %}

{% if c.attendees or c.papers_accepted or c.papers_submitted or c.tutorials or c.workshops %}
<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin:.4rem 0">

  {% if c.attendees %}
    <span style="padding:.25rem .6rem;border:1px solid rgba(0,0,0,.15);border-radius:999px;font-size:.9em;background:rgba(0,0,0,.03)">
      👥 {{ c.attendees }} attendees
    </span>
  {% endif %}

  {% if c.papers_accepted and c.papers_submitted %}
    {% assign acc = c.papers_accepted | times: 100.0 | divided_by: c.papers_submitted %}
    <span style="padding:.25rem .6rem;border:1px solid rgba(0,0,0,.15);border-radius:999px;font-size:.9em;background:rgba(0,0,0,.03)">
      📄 {{ c.papers_accepted }}/{{ c.papers_submitted }} papers ({{ acc | round: 1 }}%)
    </span>
  {% elsif c.papers_accepted %}
    <span style="padding:.25rem .6rem;border:1px solid rgba(0,0,0,.15);border-radius:999px;font-size:.9em;background:rgba(0,0,0,.03)">
      📄 {{ c.papers_accepted }} papers accepted
    </span>
  {% endif %}

  {% if c.tutorials %}
    <span style="padding:.25rem .6rem;border:1px solid rgba(0,0,0,.15);border-radius:999px;font-size:.9em;background:rgba(0,0,0,.03)">
      🎓 {{ c.tutorials }} tutorials
    </span>
  {% endif %}

  {% if c.workshops %}
    <span style="padding:.25rem .6rem;border:1px solid rgba(0,0,0,.15);border-radius:999px;font-size:.9em;background:rgba(0,0,0,.03)">
      🛠 {{ c.workshops }} workshops
    </span>
  {% endif %}

</div>
{% endif %}

<hr style="margin:1.5rem 0">
{% endfor %}
