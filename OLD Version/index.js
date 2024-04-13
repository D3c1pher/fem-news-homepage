const menuToggle = document.getElementById('menu-toggle');
const dialogMenu = document.getElementById('dialog-menu');
const closeButton = document.getElementById('close-dialog');
const menuIcon = document.getElementById('menu-icon');

const openImage = "./assets/images/icon-menu.svg";
const closeImage = "./assets/images/icon-menu-close.svg";

// Function to close the dialog menu
function closeDialogMenu() {
  dialogMenu.classList.remove('show');
  menuIcon.src = openImage;
}

// Event listener for toggling menu
menuToggle.addEventListener('click', () => {
  dialogMenu.classList.toggle('show');
  menuIcon.src = dialogMenu.classList.contains('show') ? closeImage : openImage;
});

// Event listener for close button
closeButton.addEventListener('click', () => {
  closeDialogMenu();
});

// Event listener to close menu when clicking outside of it
document.addEventListener('click', (event) => {
  if (dialogMenu.classList.contains('show') && !dialogMenu.contains(event.target) && event.target !== menuIcon) {
    closeDialogMenu();
  }
});