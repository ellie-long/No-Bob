// Wait for the chatbox button to appear and click it to dismiss the chatbox
function dismissChatbox() {
  const chatboxDismissButton = document.querySelector(
    ".MuiIconButton-root.MuiIconButton-sizeLarge"
  );
  
  if (chatboxDismissButton) {
    chatboxDismissButton.click();
  }
}

// Run the dismissal function when the page is loaded
window.addEventListener("load", dismissChatbox);

