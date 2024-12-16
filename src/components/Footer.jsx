import React from 'react'

const mybutton = document.querySelector(".top-btn");
const heroSection = document.getElementById("hero");

window.addEventListener("scroll", function () {
  const heroHeight = heroSection.offsetHeight;
  if (window.scrollY > 500) {
    mybutton.classList.remove("hidden");
    mybutton.classList.add("active");
  } else {
    mybutton.classList.add("hidden");
    mybutton.classList.remove("active");
  }
});
mybutton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


const Footer = () => {
  return (
    <div className='bg-dark_blue py-6 -mt-1'>
      <div className="container flex justify-between">
        <p className='text-voilet text-xs font-normal'>©2024 KeySemantics GmbH | Ramsenburgweg 24, 9100 Herisau, Switzerland</p>
        <p className='text-voilet text-xs font-normal cursor-pointer'>info@keysemantics.ch</p>
      </div>
      <div
        class="top-btn md:size-14 sm:size-10 size-9 rounded-full fixed bottom-7 right-7 bg-darkblue z-20 p-2 bg-orange cursor-pointer flex justify-center items-center transition scroll-smooth">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="white" class="bi bi-chevron-double-up"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z" />
          <path fill-rule="evenodd"
            d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
        </svg>
      </div>
    </div>
  )
}

export default Footer
