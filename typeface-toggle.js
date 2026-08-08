/* The Dodechedron of Fortune — shared typeface toggle
   (Period Fell-italic display vs. a plain modern accessibility
   mode.) Shared between dodec1.html and credits.html. */

function setTypeface(mode) {
  var isModern = (mode === "modern");
  document.documentElement.classList.toggle("modern-mode", isModern);
  var btnPeriod = document.getElementById("btn-blackletter");
  var btnModern = document.getElementById("btn-modern");
  if (btnPeriod) btnPeriod.setAttribute("aria-pressed", String(!isModern));
  if (btnModern) btnModern.setAttribute("aria-pressed", String(isModern));
  try { window.localStorage.setItem("dodecTypeface", mode); } catch (e) { /* localStorage unavailable; ignore */ }
}

function initTypeface() {
  var saved = null;
  try { saved = window.localStorage.getItem("dodecTypeface"); } catch (e) { /* ignore */ }
  setTypeface(saved === "modern" ? "modern" : "blackletter");
}
