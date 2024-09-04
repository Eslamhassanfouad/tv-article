"use strict";

const button = document.getElementById("button-8779cb0a");
const spinnerOverlay = document.getElementById("spinner-overlay");
const spinnerImage = document.querySelector(".spinner-image");
const spinBtn = document.querySelector(".spin-btn");
const arrow = document.querySelector(".arrow");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  spinnerOverlay.style.display = "flex";
});

let first = true;
spinBtn.addEventListener("click", function () {
  if (first) {
    spinBtn.style.display = "none";
    spinnerImage.style.transform = `rotate(880deg)`;

    // Reset button display state after rotation
    spinnerImage.addEventListener(
      "transitionend",
      function handleTransitionEnd() {
        // Remove event listener to avoid multiple triggers
        spinnerImage.removeEventListener("transitionend", handleTransitionEnd);

        // Only show button again after 880deg rotation is finished
        if (spinnerImage.style.transform === "rotate(880deg)") {
          spinBtn.style.display = "block";
        }

        // Start the second rotation if needed
        spinBtn.addEventListener("click", function () {
          if (!first) {
            spinnerImage.style.transform = `rotate(1465deg)`;
            spinnerImage.addEventListener(
              "transitionend",
              function handleSecondTransitionEnd() {
                // Remove event listener to avoid multiple triggers
                spinnerImage.removeEventListener(
                  "transitionend",
                  handleSecondTransitionEnd
                );

                setTimeout(() => {
                  message.style.display = "block";
                  spinnerImage.style.display = "none";
                  spinBtn.style.display = "none";
                  arrow.style.display = "none";
                }, 1000);
              }
            );
          }
        });

        first = false;
      }
    );
  }
});
