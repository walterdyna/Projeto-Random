document.addEventListener("DOMContentLoaded", function() {
    const cursorText = document.querySelector(".cursor-text");
    const titleText = document.querySelector("title").textContent;
  
    document.addEventListener("mousemove", function(event) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
  
      cursorText.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });
  
    cursorText.textContent = titleText;
  });

function generateNumber(){

   const min = Math.ceil(document.querySelector('.input-min').value)
   const max = Math.floor(document.querySelector('.input-max').value)

   const result = Math.floor(Math.random() * (max - min +1)) + min

    alert(result)

}



