const container = document.getElementById("like-button-renderer");
const nextButton = document.getElementsByClassName("next-button")[0];

if (!container || !nextButton) {
  throw new Error("failed to find dislike and next buttons");
}

setInterval(() => {
  if (container.getAttribute("like-status") === "DISLIKE") {
    nextButton.click();
  }
}, 500);
