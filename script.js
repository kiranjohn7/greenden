var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");
var closeNav = document.getElementById("close-nav");

closeNav.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});
menuicon.addEventListener("click", function () {
  sidenav.style.right = 0;
});

// Product Page
var productContainer = document.getElementById("product-container");
var searchBar = document.getElementById("search-bar");
var productList = productContainer.querySelectorAll("div");
// console.log(productContainer);

searchBar.addEventListener("keyup", function () {
  var enteredValue = this.value.toUpperCase();

  for (count = 0; count < productList.length; count++) {
    var productname = productList[count].querySelector("h2").textContent;
    if (productname.toUpperCase().indexOf(enteredValue) < 0) {
      productList[count].style.display = "none";
    } else {
      productList[count].style.display = "block";
    }
    console.log(productList)
  }
});
