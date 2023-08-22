const scriptURL = "https://script.google.com/macros/s/AKfycbzVv1zGfXcaxiW7xYHhpa7npQCYS7-aIjdCejURGTEBZy89Xc8ZevVbwnS3ZIgXSwjqjQ/exec";
const form = document.forms["submit-to-google-sheet"];
const btnSend = document.querySelector(".btn-send");
const btnLoading = document.querySelector(".btn-loading");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  btnLoading.classList.toggle("none");
  btnSend.classList.toggle("none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("none");
      btnSend.classList.toggle("none");

      // Alert
      Swal.fire("Succes!", "Your Message was delivered", "success");

      // Reset Form
      form.reset();

      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
