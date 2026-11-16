/* Tarmeem Sharqiya — custom JS (no libraries) */
(function () {
  "use strict";
  // Mobile menu
  var burger = document.querySelector(".burger");
  var menu = document.querySelector(".menu");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = menu.classList.toggle("show");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.querySelectorAll("button.drop").forEach(function (b) {
      b.addEventListener("click", function () {
        b.parentElement.classList.toggle("open");
      });
    });
  }
  // Reveal on scroll (smooth, respects reduced motion via CSS)
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && els.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("vis"); io.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("vis"); });
  }
  // Gallery filters
  document.querySelectorAll(".filters").forEach(function (bar) {
    bar.addEventListener("click", function (ev) {
      var btn = ev.target.closest("button[data-f]");
      if (!btn) return;
      bar.querySelectorAll("button").forEach(function (b) { b.classList.remove("on"); });
      btn.classList.add("on");
      var f = btn.getAttribute("data-f");
      var grid = document.querySelector(bar.getAttribute("data-target") || ".gal");
      if (!grid) return;
      grid.querySelectorAll("figure[data-cat]").forEach(function (fig) {
        fig.classList.toggle("hide", f !== "all" && fig.getAttribute("data-cat") !== f);
      });
    });
  });
  // Quote calculator -> WhatsApp with prefilled message
  var form = document.getElementById("quoteForm");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var g = function (id) { var n = document.getElementById(id); return n ? n.value.trim() : ""; };
      var isEn = document.documentElement.lang === "en";
      var lines = isEn
        ? ["New quote request from the website:", "Service: " + g("qService"), "City: " + g("qCity"), "Scope: " + g("qScope"), "Details: " + g("qDetails")]
        : ["طلب عرض سعر جديد من الموقع:", "الخدمة: " + g("qService"), "المدينة: " + g("qCity"), "نطاق العمل: " + g("qScope"), "التفاصيل: " + g("qDetails")];
      var url = "https://wa.me/966530320587?text=" + encodeURIComponent(lines.join("\n"));
      window.open(url, "_blank", "noopener");
    });
  }
  // Footer year
  var y = document.getElementById("yr");
  if (y) y.textContent = new Date().getFullYear();
})();
