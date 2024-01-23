const myImage = document.getElementById("myImage");
const firstImage = document.getElementById("firstImage");
const secondImage = document.getElementById("secondImage")
const thirdImage = document.getElementById("thirdImage")

firstImage.addEventListener("click", function() {
  myImage.src = "../exercise-product-landing-page-plain-css/assets/product1.jpeg";
});

secondImage.addEventListener("click", function() {
  myImage.src = "../exercise-product-landing-page-plain-css/assets/product2.jpeg";
});

thirdImage.addEventListener("click", function() {
  myImage.src = "../exercise-product-landing-page-plain-css/assets/product3.jpeg";
});