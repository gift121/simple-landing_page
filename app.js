// const items = document.querySelectorAll("ul li a");
//     items.forEach((item) => {
//     item.addEventListener("click", () => {
//     document.querySelector("a.active").classList.remove("active");
//     item.classList.add("active");
//   });
// });
// const navToggle = document.querySelector(".checkbtn");
// const links = document.querySelector(".nav-links");

// navToggle.addEventListener('click', function(){
//     links.classList.toggle("show_nav");
// });
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll('.nav-links li');

  // Set nav active status with boolean
  let isActive = false;
  console.log("nav-active : " + isActive)
  

  burger.addEventListener("click", ()=>{

      //Toggle nav
      nav.classList.toggle("nav-active");

      // Toggle nav active status to true/false
      isActive = !isActive;
      console.log("nav-active : " + isActive)
      
      //Animate link
      navLinks.forEach((link, index)=>{
          if(isActive) {
              link.style.animation = `navLinkFadeIn 0.4s ease forwards ${index / 7 + 0.2}s`;
              console.log("nav li: "+ index + " in");
          } else {
              // link.style.animation = "";
              link.style.animation = `navLinkFadeOut 0.2s ease forwards 0s`;
              // link.style.animation = "";
              console.log("nav li: "+ index + " out");
          }
          console.log(link.style.animation);
      });
      
      //Burger animation
      burger.classList.toggle('toggle');
  });

}
navSlide();