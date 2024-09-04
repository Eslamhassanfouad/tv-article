document.addEventListener("DOMContentLoaded", () => {
  const wheel = document.querySelector(".wheel-container");
  const spinButton = document.getElementById("spin");
  const resultDiv = document.getElementById("result");
  const sectors = [
    { percent: "0%", degrees: 0, className: "one" },
    { percent: "80%", degrees: 45, className: "two" },
    { percent: "70%", degrees: 90, className: "three" },
    { percent: "60%", degrees: 135, className: "four" },
    { percent: "50%", degrees: 180, className: "five" },
    { percent: "40%", degrees: 225, className: "six" },
    { percent: "30%", degrees: 270, className: "seven" },
    { percent: "20%", degrees: 315, className: "eight" },
  ];

  spinButton.addEventListener("click", () => {
    // Disable the button permanently after the first click
    spinButton.disabled = true;
    resultDiv.textContent = "";

    // Select a random sector
    const randomIndex = Math.floor(Math.random() * sectors.length);
    const selectedSector = sectors[randomIndex];
    const rotation = 360 * 5 + selectedSector.degrees;

    // Rotate the wheel
    wheel.style.transform = `rotate(${rotation}deg)`;
    wheel.style.transition = "transform 5s ease-out";

    // Display the result after the rotation ends
    setTimeout(() => {
      resultDiv.textContent = `Congratulations! You got ${selectedSector.percent} discount!`;
      // Do not re-enable the spin button
    }, 5000);
  });
});

// let container = document.querySelector(".wheel-container");
// let btn = document.getElementById("spin");
// let number = Math.ceil(Math.random() * 1000);

// let clicks = 0;
// btn.onclick = function () {
//   clicks += 1;
//   if (clicks == 1) {
//     container.style.transform = "rotate(" + number + "deg)";
//     number += Math.ceil(Math.random() * 1000);
//   }
// };
