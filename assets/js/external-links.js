document.addEventListener("DOMContentLoaded", () => {
  // Only affect links inside the page content (not nav/footer)
  const scope = document.querySelector(".page__content") || document;

  scope.querySelectorAll("a[href]").forEach((a) => {
    const href = a.getAttribute("href");

    // Skip anchors, mailto, tel, and empty
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

    // Make absolute URLs open in a new tab
    // (covers https:// and http://)
    if (/^https?:\/\//i.test(href)) {
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
    }
  });
});
