// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.




// Show the button when scrolling down
// Show the button when scrolling down


// Smooth scroll to top

document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        reveals.forEach((reveal) => {
            const revealTop = reveal.getBoundingClientRect().top;

            if (revealTop < windowHeight * 0.8) {
                // Adjust threshold as needed
                reveal.classList.add("show");
            } else {
                reveal.classList.remove("show");
            }
        });
    };

    // Initial check
    revealOnScroll();

    // Check on scroll
    window.addEventListener("scroll", revealOnScroll);
});

//

 //Function to make the image visible
const makeVisible = (image) => {
    image.classList.add("visible");
};

// Select the images
const img1 = document.getElementById("image1");


 //Make images visible when they are fully loaded
img1.addEventListener("load", () => makeVisible(img1));


// For cases where the images might already be cached
if (img1.complete) makeVisible(img1);

window.addEventListener('scroll', function () {
    var backToTop = document.getElementById('backToTop');
    // console.log("Scroll position: ", window.scrollY); 

    if (window.scrollY > 300) {

        const innerH = window.scrollY;
        console.log(innerH);

        backToTop.classList.add('back-to-top-show');
    } else {


        backToTop.classList.remove('back-to-top-show');
    }
});
    document.getElementById("backToTop").addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
