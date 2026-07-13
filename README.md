# SWSA Website

This repository contains the website for the Semantic Web Science Association (SWSA).

You do not need to be a programmer to make most content updates. The site is built from plain text files written in Markdown (`.md`). Markdown is a simple format where normal text stays normal, headings start with `#`, links look like `[text](url)`, and lists start with `-`.

The website is built with [Jekyll](https://jekyllrb.com/) and the Minimal Mistakes theme. In everyday editing, that mostly means:

1. Find the right `.md` file.
2. Edit the text.
3. Save the file.
4. Run a build, or ask a technical maintainer to run one.

## The Most Important Rule

Do not edit `_site/`.

`_site/` is the generated website. Jekyll recreates it automatically, so anything edited there can disappear. Edit the source files instead, such as `_pages/contact.md` or `_awards/swsa-ten-year-award.md`.

## Where To Make Changes

Use this table to find the right place:

| What you want to change | File or folder |
| --- | --- |
| Home page | `index.md` |
| About page | `_pages/about.md` |
| Members page | `_pages/members.md` |
| Conferences page text | `_pages/conferences.md` |
| Individual conference data | `_conferences/` |
| Awards overview page | `_pages/awards.md` |
| Individual award pages | `_awards/` |
| Contact page | `_pages/contact.md` |
| Host ISWC page | `_pages/host-iswc.md` |
| Host ESWC page | `_pages/host-eswc.md` |
| Code of Conduct or Sustainability | `_content/` |
| Top navigation menu | `_data/navigation.yml` |
| Downloadable PDFs, DOCX, XLS/XLSX files | `assets/files/` |
| Images and icons | `assets/images/` |
| Old URL redirects | `_redirects` |

## How To Edit An Existing Page

Example: updating the Contact page.

1. Open `_pages/contact.md`.
2. Leave the top block between `---` lines in place.
3. Edit the text below that block.
4. Save the file.
5. Preview or build the site.

Most pages start with a block like this:

```md
---
layout: single
title: "Contact"
permalink: /contact/
---
```

That block is called front matter. It tells the website the page title and URL. For ordinary text updates, do not change it.

## Markdown Basics

You can write most content like an email or document.

Use this:

```md
## Section heading

This is a paragraph.

- First bullet
- Second bullet

1. First numbered item
2. Second numbered item

**Bold text**
*Italic text*
```

To make a link:

```md
[Link text](https://example.org/)
```

To link to an email address:

```md
[name@example.org](mailto:name@example.org)
```

To show the email address in the text, write:

```md
Contact Elena Simperl at [elena.simperl@kcl.ac.uk](mailto:elena.simperl@kcl.ac.uk).
```

## Links Inside This Website

For links to other pages on the SWSA website, use this style:

```md
[Awards]({{ "/awards/" | relative_url }})
[Host ISWC]({{ "/host-iswc/" | relative_url }})
```

It looks a little unusual, but it helps links keep working if the site setup changes later.

For external websites, use normal links:

```md
[ESWC](https://eswc-conferences.org/)
```

## Downloadable Files

Downloadable files go in `assets/files/`.

Examples:

- PDFs
- DOCX forms
- XLS/XLSX budget templates
- dissertation files

After adding a file, link to it like this:

```md
[ISWC Hosting Guide]({{ "/assets/files/SWSA-ISWC-Hosting-Guide_2.pdf" | relative_url }})
```

Before adding a new file, check whether it already exists in `assets/files/`. This avoids duplicate files.

Use clear filenames. Avoid names such as:

- `document.pdf`
- `download.pdf`
- `Untitled.docx`
- files ending in `.crdownload`
- filenames containing private or internal information

## Adding A New Top-Level Page

Top-level pages live in `_pages/`.

Example: adding a page at `https://swsa.semanticweb.org/example/`.

1. Create a file called `_pages/example.md`.
2. Add this at the top:

   ```md
   ---
   title: "Example Page"
   layout: single
   permalink: /example/
   ---
   ```

3. Add the page text below the second `---`.
4. If the page should appear in the top menu, add it to `_data/navigation.yml`.

Navigation example:

```yml
  - title: "Example"
    url: /example/
```

Be careful with spaces in `_data/navigation.yml`. YAML files are indentation-sensitive, so copy the style that is already there.

Not every page needs to be in the top menu. Keep the menu short.

## Updating Award Pages

Award pages live in `_awards/`.

Examples:

- `_awards/distinguished-dissertation-award.md`
- `_awards/distinguished-service-award.md`
- `_awards/swsa-ten-year-award.md`
- `_awards/swsa-early-career-award.md`

When editing awards, double-check:

- names and accents;
- years;
- award titles;
- paper or dissertation titles;
- submission deadlines;
- eligibility dates;
- committee members;
- chair labels;
- email addresses;
- EasyChair links;
- PDF or DOI links.

If you add a new award page:

1. Create a new file in `_awards/`, for example `_awards/example-award.md`.
2. Start it with:

   ```md
   ---
   title: Example Award
   layout: single
   permalink: /awards/example-award/
   redirect_from:
     - /content/example-award
   ---
   ```

3. Add the award text.
4. Add a link to it in `_pages/awards.md`.

## Updating Conference Information

The main Conferences page is `_pages/conferences.md`.

The individual conference records are in `_conferences/`. These files are data used to build the conference list. They are not standalone pages.

Example conference file:

```md
---
title: "25th International Semantic Web Conference (ISWC2026)"
year: 2026
series: ISWC
website: "https://iswc2026.semanticweb.org/"
archived_website: ""
location: "Bari, Italy"
start_date: 2026-10-25
end_date: 2026-10-29
chairs:
  - "General Chair: Valentina Tamma"
  - "Local Chairs: Claudia d'Amato"
---
```

To add a conference:

1. Create a file in `_conferences/`.
2. Use a clear filename, such as `iswc-2028.md` or `eswc-2029.md`.
3. Copy the structure from a similar existing conference.
4. Update the fields.
5. Use dates in `YYYY-MM-DD` format so the conference list sorts correctly.

Useful fields include:

- `title`
- `year`
- `series` (`ISWC`, `ESWC`, or `SWWS`)
- `website`
- `archived_website`
- `location`
- `start_date`
- `end_date`
- `chairs`
- `attendees`
- `papers_accepted`
- `papers_submitted`
- `tutorials`
- `workshops`
- `best_paper`
- `best_paper_authors`
- `ten_year_award`

## Updating Host ISWC Or Host ESWC

Edit:

```txt
_pages/host-iswc.md
_pages/host-eswc.md
```

These pages often contain:

- host year;
- preferred region;
- contact person and email;
- statement of interest form;
- application form;
- budget template;
- hosting guide;
- deadlines.

When updating these pages, make sure the visible text and the linked files agree. For example, if the text says "ISWC 2028", check that the email subject line and downloadable forms are also correct.

## Redirects For Old Links

Redirects keep old website links working.

There are two places redirects can appear.

In a page's front matter:

```md
redirect_from:
  - /content/old-page
```

In `_redirects`:

```txt
/content/old-page /new-page/ 301
/content/old-page/ /new-page/ 301
```

When adding redirects to `_redirects`, include both versions if possible:

- one without a trailing slash;
- one with a trailing slash.

## Previewing The Website

If you are working locally, the site uses Ruby `3.1.2`.

One-time setup:

```sh
gem install bundler
bundle install
```

Start a local preview:

```sh
bundle exec jekyll serve
```

Then open:

```txt
http://localhost:4000
```

Stop the preview server with `Ctrl+C`.

If you are editing through GitHub's web interface and do not have Ruby set up locally, ask a technical maintainer to run the build checks before publishing.

## Checks Before Publishing

Run:

```sh
bundle exec jekyll build
git diff --check
```

`bundle exec jekyll build` checks that the website can be generated.

`git diff --check` catches common whitespace problems.

Useful searches:

```sh
rg -n "TODO|FIXME|placeholder|lorem ipsum|localhost" _pages _awards _content _conferences index.md
rg -n "href=\"\"|href='#'|href=\"#\"" _pages _awards _content index.md
```

Before publishing, also check:

- the page appears at the expected URL;
- all important links work;
- download files open correctly;
- email addresses are visible where needed;
- names, dates, and affiliations are correct;
- tables look readable on mobile;
- the top navigation is not too crowded.

## Common Problems

### The page does not appear

Check that the file has front matter at the top:

```md
---
title: "Page Title"
permalink: /page-url/
---
```

Also check that the file is in the right folder.

### The build fails after editing a `.yml` file

YAML is sensitive to spaces. Check `_data/navigation.yml` or `_config.yml` for indentation changes. Copy the existing style exactly.

### A link to a file does not work

Check that:

1. the file is in `assets/files/`;
2. the filename in the link matches exactly;
3. spaces in the filename are handled by Jekyll through `relative_url`.

Example:

```md
[Download]({{ "/assets/files/ISWC Guidelines.docx" | relative_url }})
```

### The visible page looks different from the Markdown file

Jekyll converts Markdown into HTML. That is normal. Edit the `.md` file, then rebuild or refresh the local preview.

## What Not To Commit

Do not add:

- private documents;
- passwords or credentials;
- temporary downloads;
- browser cache files;
- files ending in `.crdownload`;
- generated build output unless the deployment process specifically requires it.

When in doubt, keep the change small and ask another maintainer to review the content before publishing.
