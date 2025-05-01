let btns = Array.from(document.querySelectorAll('.first')) 
   let closeBtn = Array.from(document.querySelectorAll('.second')).slice(0, 4)
   let table = Array.from(document.querySelectorAll('.tableDiv'))

   btns.forEach(x => x.addEventListener('click', show)) 
  function show(e){
    let i = btns.indexOf(e.target)
    if(i !== -1){
      table[i].style.display = 'block'
    }
  }

   closeBtn.forEach(x => x.addEventListener('click', hide)) 
  function hide(e){
    let i = closeBtn.indexOf(e.target)
    if(i !== -1){
      table[i].style.display = 'none'
    }
  }
  
  const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.opacity = 100;
        } else {
          slide.style.opacity = 0;
        }
      });
    }
    
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
    
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
    
    showSlide(currentSlide);