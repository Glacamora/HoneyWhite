/*var eMail = popup.querySelector("[name=email]"),
    name = popup.querySelector("[name=name]"),
    textArea = popup.querySelector("[name=text]")

form.addEventListener("submit", function(e) {
    email.value || text.value || (e.preventDefault(), popup.classList.remove("popup-error"),
      popup.offsetWidth = popup.offsetWidth,
      popup.classList.add("popup-error"),
      eMail.classList.add("popup-input-error"),
      textArea.classList.add("popup-input-error"),
      console.log("Нужно ввести имейл и текст письма")),

      32 === e.keyCode && (e.preventDefault(),
    popup.classList.remove("popup-error"),
    popup.offsetWidth = popup.offsetWidth, popup.classList.add("popup-error"),
    eMail.classList.add("popup-input-error"),
    textArea.classList.add("popup-input-error"),
    console.log("Нужно ввести имейл и текст письма")),
    text.value || (e.preventDefault(),
  popup.classList.remove("popup-error"),
  popup.offsetWidth = popup.offsetWidth,
  popup.classList.add("popup-error"),
  textArea.classList.add("popup-input-error"),
  console.log("Нужно ввести текст письма"),
  textArea.addEventListener("focus", function(e) {
  e.preventDefault(), textArea.classList.remove("popup-input-error")
})), 32 === e.keyCode && (e.preventDefault(), popup.classList.remove("popup-error"),
                        popup.offsetWidth = popup.offsetWidth, popup.classList.add("popup-error"), textArea.classList.add("popup-input-error"), console.log("Нужно ввести текст письма"), textArea.addEventListener("focus", function(e) {
  e.preventDefault(), textArea.classList.remove("popup-input-error")
})), email.value || (e.preventDefault(), popup.classList.remove("popup-error"),
                   popup.offsetWidth = popup.offsetWidth, popup.classList.add("popup-error"), eMail.classList.add("popup-input-error"), console.log("Нужно ввести имейл"), eMail.addEventListener("focus", function(e) {
  e.preventDefault(), eMail.classList.remove("popup-input-error")
})), 32 === e.keyCode ? (e.preventDefault(), popup.classList.remove("popup-error"), popup.offsetWidth = popup.offsetWidth, popup.classList.add("popup-error"), eMail.classList.add("popup-input-error"),
console.log("Нужно ввести имейл"),
eMail.addEventListener("focus", function(e) {
  e.preventDefault(), eMail.classList.remove("popup-input-error")
})) : localStorage.setItem("email", email.value)
}), window.addEventListener("keydown", function(e) {
27 === e.keyCode && popup.classList.contains("popup-visible") && popup.classList.remove("popup-visible")
});*/
