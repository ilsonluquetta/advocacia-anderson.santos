document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".faq__q").forEach((btn) => {
  btn.addEventListener("click", () => {
    const ans = btn.nextElementSibling;
    if (!ans) return;
    ans.classList.toggle("is-open");
  });
});
// Fechar o widget do WhatsApp
(() => {
  const w = document.getElementById("waWidget");
  const btn = document.querySelector(".waWidget__close");
  if (!w || !btn) return;

  btn.addEventListener("click", () => {
    w.style.display = "none";
  });
})();
