(function () {
  var root = document.documentElement;
  try { var s = localStorage.getItem("theme"); if (s) root.dataset.theme = s; } catch (e) {}
  document.getElementById("theme").addEventListener("click", function () {
    var cur = root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = cur === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  var lines = Array.prototype.map.call(document.querySelectorAll("#status-lines li"), function (li) { return li.textContent; });
  var el = document.getElementById("status"), i = 0;
  if (lines.length < 2) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  setInterval(function () {
    el.classList.add("out");
    setTimeout(function () { i = (i + 1) % lines.length; el.textContent = lines[i]; el.classList.remove("out"); }, 400);
  }, 3200);
})();
