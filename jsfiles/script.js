document.addEventListener("DOMContentLoaded", function () {
    let currentImageIndex = 0;
    const images = document.querySelectorAll("#image-container img");
    let intervalId; // Variable to store the interval ID

    function showImage(index) {
        images.forEach((img) => img.classList.remove("active"));
        images[index].classList.add("active");
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    function startInterval() {
        // Clear existing interval before starting a new one
        clearInterval(intervalId);
        // Set an interval to transition images automatically
        intervalId = setInterval(nextImage, 3000);
    }

    // Set an interval to transition images automatically
    startInterval();
});
