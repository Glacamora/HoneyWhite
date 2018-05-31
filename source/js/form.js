var form = document.querySelector(".contacts__form");

if(form != undefined || form != null)
{
  var writeUsBtn = form.querySelector(".contacts__form-btn");

  var username = form.querySelector("[name=name]");
  var email = form.querySelector("[name=email]");
  var title = form.querySelector("[name=title]");
  var text = form.querySelector("[name=text]");


  writeUsBtn.addEventListener("click", function(event){
    event.preventDefault();

    if
      (!username.value && !email.value && !title.value && !text.value) {
        form.offsetWidth = form.offsetWidth;
        username.classList.add("contacts-error");
        email.classList.add("contacts-error");
        title.classList.add("contacts-error");
        text.classList.add("contacts-error");
      }

    if
      (!username.value) {
        username.classList.add("contacts-error");
        username.addEventListener("focus", function(event) {
        event.preventDefault();
        username.classList.remove("contacts-error");
      });
      }

    if
      (!email.value) {
      email.classList.add("contacts-error");
      email.addEventListener("focus", function(event) {
      event.preventDefault();
      email.classList.remove("contacts-error");
    });
      }

    if
      (!title.value) {
        title.classList.add("contacts-error");
        title.addEventListener("focus", function(event) {
        event.preventDefault();
        title.classList.remove("contacts-error");
      });
      }

    if
      (!text.value) {
        text.classList.add("contacts-error");
        text.addEventListener("focus", function(event) {
        event.preventDefault();
        text.classList.remove("contacts-error");
      });
      }
    });
}
