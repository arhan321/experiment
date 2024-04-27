document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector("form input[type=submit]");
    const priceContainer = document.getElementById("priceContainer");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();

        const fullName = document.querySelector("input[name=fullname]").value;
        const phoneNumber = document.querySelector("input[name=phone]").value;
        const numberOfPersons = document.querySelector("input[name=persons]").value;

        // Check if all fields are filled
        if (fullName && phoneNumber && numberOfPersons) {
            const totalPrice = calculateTotalPrice(numberOfPersons); // You can define your own function to calculate the total price
            document.getElementById("totalPrice").textContent = "$" + totalPrice;
            priceContainer.style.display = "block";
        } else {
            alert("Please fill in all fields.");
        }
    });

    function calculateTotalPrice(numberOfPersons) {
        // Add your logic to calculate the total price based on the number of persons
        // For example:
        const pricePerPerson = 10;
        return numberOfPersons * pricePerPerson;
    }
});
