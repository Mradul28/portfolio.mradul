const toggleButton = document.getElementById("toggleSidebar");
const closeSidebarButton = document.getElementById("closeSidebar");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");
const imageToGrayscale = document.querySelector(".grayscale-image");

toggleButton.addEventListener("click", function () {
    sidebar.classList.toggle("show");
    container.classList.toggle("overlay");
    imageToGrayscale.classList.add("grayscale");
});

closeSidebarButton.addEventListener("click", function () {
    sidebar.classList.remove("show");
    container.classList.remove("overlay");
    imageToGrayscale.classList.remove("grayscale");
});