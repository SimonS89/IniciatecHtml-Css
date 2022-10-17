let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("errors").innerHTML = "";
  let name = document.querySelector("input[type=text]");
  let email = document.querySelector("input[type=email]");
  let textarea = document.querySelector("textarea");
  let mailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (
    name.value.length > 4 &&
    mailValidator.test(email.value) &&
    textarea.value.length > 4
  ) {
    Swal.fire({
      title: "<strong>DONE! <u>We'll get to you soon!</u></strong>",
      icon: "success",
      html: "<p>We've received your messagge and we'll reply in the next days!</p>",
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonAriaLabel: "Thumbs down",
    }).then(function () {
      location.href = "./../../index.html";
    });
    //     setTimeout(() => {
    //     }, 2000);
  } else {
    document.getElementById("errors").innerHTML = `
      <li>El nombre debe poseer mas de 4 caracteres</li>
      <li>ingrese un mail valido</li>
      <li>Su consulta debe ser mayor a 4 caracteres</li>`;
  }
});
