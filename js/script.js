var link = document.querySelector(".link-back-btn");
var popup = document.querySelector(".link-back");
var shade = document.querySelector(".shade");
var close = popup.querySelector(".link-back-close");
var user = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var comment = popup.querySelector("[name=comment]");
var storageu = localStorage.getItem("user");
var storagem = localStorage.getItem("email");


link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("link-back-show");
    shade.classList.add("shade-show");
    if (storageu && storagem) {
          user.value = storageu;
          email.value = storagem;
          comment.focus();
        } else {
    user.focus();
        }
    });

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("link-back-show");
    shade.classList.remove("shade-show");
});

// Не работает, глюк в том что если кликнуть по инпуту или по форме, то форма закрывается
// shade.addEventListener("click", function(event) {
// 	event.preventDefault();
// 	popup.classList.remove("link-back-show");
//     shade.classList.remove("shade-show");
// });

// Так вообще не работает --- Это как вариант... Хотя по идее должно было...
// shade.addEventListener("click", function(event) {
// 	if (!popup) {
// 	event.preventDefault();
// 	popup.classList.remove("link-back-show");
//     shade.classList.remove("shade-show");}
// });

popup.addEventListener("submit", function(event) {
         if (!user.value || !email.value) {
          event.preventDefault();
          console.log("Нужно ввести имя и email");
      } else {
          localStorage.setItem("user", user.value);
          localStorage.setItem("email", email.value);
      }
 });

window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("link-back-show")) {
            popup.classList.remove("link-back-show");
            shade.classList.remove("shade-show");
          }
        };
    });