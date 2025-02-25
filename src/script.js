document.addEventListener("DOMContentLoaded", function() {
  const buyButton = document.getElementById("buyNow");

  buyButton.addEventListener("mouseover", function() {
      buyButton.style.transform = "scale(1.1)";
  });

  buyButton.addEventListener("mouseleave", function() {
      buyButton.style.transform = "scale(1)";
  });

  buyButton.addEventListener("click", function() {
      alert("Thank you for your interest! Redirecting to checkout...");
      // Here you can add actual redirection logic
  });
});
