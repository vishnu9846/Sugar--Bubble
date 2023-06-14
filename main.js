const icon = document.getElementById("mobile-icon");
const menudiv = document.getElementById('bar1');


icon.addEventListener('click',()=>{
    
    menudiv.classList.toggle('open');
    
})



   // Get references to HTML elements
   var priceSlider = document.getElementById("priceSlider");
   var priceValue = document.getElementById("priceValue");
   var laptopImage = document.getElementById("laptopImage");

       // Add an event listener to the price slider
       priceSlider.addEventListener("input", function() {
        // Update the displayed price value
        priceValue.textContent = "price:" + priceSlider.value;
        

        // Update the displayed image based on the selected price range
      if (priceSlider.value >= 500 && priceSlider.value < 1000) {
        laptopImage.src = "./Sugar Bubble (2)/Rectangle 6.png";
      } else if (priceSlider.value >= 1000 && priceSlider.value < 1500) {
        laptopImage.src = "./Sugar Bubble (2)/Rectangle 6-5.png";
      } else if (priceSlider.value >= 1500 && priceSlider.value <= 2000) {
        laptopImage.src = "./Sugar Bubble (2)/Rectangle 6-6.png";
      }
    });
  



    function toggleList() {
      var menuList = document.getElementById('menu-list');
      menuList.style.display = (menuList.style.display === 'none') ? 'block' : 'none';
    }