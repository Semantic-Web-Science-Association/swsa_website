---
layout: single
title: "Contact"
permalink: /contact/
---

<div class="contact-grid">

  <!-- LEFT: CONTACT FORM -->
  <div class="contact-form">
    <h2>Send us a message</h2>

    <form id="contact-form" action="mailto:swsa-feedback@lists.kit.edu" method="post" enctype="text/plain">
      <label>
        Your name
        <input type="text" name="name" required>
      </label>

      <label>
        Your email
        <input type="email" name="email" required>
      </label>

      <label>
        Subject
        <input type="text" name="subject" required>
      </label>

      <label>
        Message
        <textarea name="message" rows="4" required></textarea>
      </label>

      <button type="submit">Send message</button>
    </form>

    <script>
      document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        if (!this.checkValidity()) {
          this.reportValidity();
          return;
        }

        const formData = new FormData(this);
        const subject = formData.get("subject");
        const body = [
          `Name: ${formData.get("name")}`,
          `Email: ${formData.get("email")}`,
          "",
          formData.get("message")
        ].join("\n");

        window.location.href = `mailto:swsa-feedback@lists.kit.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      });
    </script>
  </div>

  <!-- RIGHT: CONTACT DETAILS -->
  <div class="contact-box">
    <h2>Contact details</h2>

    <strong>SWSA</strong><br>
    Semantic Web Science Association<br>
    c/o Institute AIFB, Building 5.20<br>
    KIT – Campus Süd<br>
    Kaiserstraße 89<br>
    D-76133 Karlsruhe<br>
    Germany

    <br><br>

    <strong>Email</strong><br>
    <a href="mailto:swsa-feedback@lists.kit.edu">
      swsa-feedback@lists.kit.edu
    </a>

    <br><br>

    <strong>Follow us</strong><br>
    <a href="https://www.linkedin.com/company/eswc-conf/" target="_blank">
      LinkedIn - ESWC
    </a>
    <br/>
    <a href="https://www.linkedin.com/company/iswc/" target="_blank">
      LinkedIn - ISWC
    </a>
    <br/>
    <a href="https://www.linkedin.com/company/semantic-web-science-association-swsa/" target="_blank">
      LinkedIn - Semantic Web Science Association (SWSA)
    </a>
  </div>
</div>
