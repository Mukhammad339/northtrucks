function showPopup(message) {
  const popup = document.getElementById("popup");
  popup.querySelector("p").textContent = message;
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 3000); // скрыть через 3 секунды
}
