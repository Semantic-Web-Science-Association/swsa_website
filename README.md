# SWSA Website

[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/mmistakes/minimal-mistakes/master/LICENSE)
[![Jekyll](https://img.shields.io/badge/jekyll-%3E%3D%203.7-blue.svg)](https://jekyllrb.com/)

## Running the site locally

This is a Jekyll site. The repository includes a `.ruby-version` file set to Ruby `3.1.2`.

1. Install Ruby `3.1.2` with your preferred Ruby version manager.
2. Install Bundler:

   ```sh
   gem install bundler
   ```

3. Install the project dependencies:

   ```sh
   bundle install
   ```

4. Start the local development server:

   ```sh
   bundle exec jekyll serve
   ```

5. Open `http://localhost:4000` in your browser.

To include draft content while developing, run:

```sh
bundle exec jekyll serve --drafts
```
