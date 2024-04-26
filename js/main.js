let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.addEventListener('scroll', () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
});

// Function to animate counting effect
function animateCount(targetId, start, end, duration) {
    let current = start;
    const increment = Math.ceil((end - start) / duration);
    const timer = setInterval(() => {
      current += increment;
      document.getElementById(targetId).textContent = current;
      if (current >= end) {
        clearInterval(timer);
        document.getElementById(targetId).textContent = end;
      }
    }, 1000);
  }

  // Call the animateCount function for each statistic
  animateCount("volunteersCount", 0, 1000, 8); // Change 1000 to actual count
  animateCount("treesCount", 0, 1300, 8); // Change 1300 to actual count
  animateCount("animalsCount", 0, 450, 6); // Change 450 to actual count
  animateCount("donatorsCount", 0, 850, 6); // Change 850 to actual count
