const images = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeButton = document.getElementById('close-button');

images.forEach(image => {
  image.addEventListener('click', () => {
    modalImage.src = image.src;
    modal.style.display = 'block';
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

function checkCredentials() {
  var password = document.getElementById("password").value;

  // Check if the username and password match a predefined set of credentials
  if (password === "Business23") {
    // Redirect to the protected page
    window.location.href = "gallery.html";
  } else {
    // Display an error message
    alert("Invalid username or password");
  }
}