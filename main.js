// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");
const audio = document.querySelector("audio");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");



// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);


// Business Logic
let currentLocation = 1;
let numOfPapers = 5;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
    prevBtn.style.display = "block"; // Show prev button when book is opened
}

function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }

    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}
// Display alert message on page load
window.addEventListener("load", () => {
    alert("Selamat datang di Template Ulang Tahun 💌\nRotate Smartphone Untuk Pengalaman Terbaik");
});
prevBtn.style.display = "none"; // Hide prev button on initial load

function goNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                audio.play(); // Start playing music on first next click
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                prevBtn.style.display = "block"; // Show prev button when moving to next page
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                closeBook(false);
                nextBtn.style.display = "none";
                book.style.transform = "translateX(100%)";
                audio.pause(); // Stop music on last page
                audio.currentTime = 0;
                break;
            default:
                throw new Error("Unknown state in goNextPage");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 5;
                audio.pause(); // Stop music when going back to first page
                audio.currentTime = 0;
                prevBtn.style.display = "none"; // Hide prev button when going back to first page
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 4;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 3;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 2;
                nextBtn.style.display = "block";
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 1;
                nextBtn.style.display = "block";
                openBook();
                audio.play(); // Start playing music when going back from last page
                break;
            default:
                throw new Error("Unknown state in goPrevPage");
        }
        currentLocation--;
    }
}