document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page reload

        // Get form values
        const ownerName = document.getElementById("ownerName").value;
        const vehicleNumber = document.getElementById("vehicleNumber").value;
        const residentAddress = document.getElementById("residentAddress").value;
        const category = document.getElementById("category").value;

        // Simple validation
        if (!ownerName || !vehicleNumber || !residentAddress || !category) {
            alert("Please fill in all fields.");
            return;
        }

        // Simulate successful submission
        successMessage.style.display = "block";
        form.reset();

        // Hide message after 3 seconds
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3000);
    });
});
