// Basic form submit handler
document.getElementById("resellerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your interest! We'll get back to you shortly.");
  this.reset();
});
