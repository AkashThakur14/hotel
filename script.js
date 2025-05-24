document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.getElementById("bookingForm");
  const orderForm = document.getElementById("orderForm");

  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert('✅ Table booked successfully!');
      bookingForm.reset();
    });
  }

  if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("✅ Your order has been placed!");
      alert("Your Order Comes With in 10 Mint On your Table");
      orderForm.reset();
    });
  }
});