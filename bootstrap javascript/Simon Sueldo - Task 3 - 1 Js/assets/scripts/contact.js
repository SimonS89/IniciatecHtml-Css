let form = document.querySelector("form");
form.addEventListener("click", function (e) {
  e.preventDefault();
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
      html:
        // "You can use <b>bold text</b>, " +
        // '<a href="//sweetalert2.github.io">links</a> ' +
        // "and other HTML tags",
        "<p>We've received your messagge and we'll reply in the next days!</p>",
      showCloseButton: true,
      //     showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: "Thumbs up, great!",
      //     cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: "Thumbs down",
    });
    setTimeout(() => {
      form.submit();
    }, 2000);
  }
});
