
document.getElementById('textArea1').addEventListener("click",function() {
   var textArea = document.getElementById("textArea");
   console.log("Hello!")
   document.getElementById("input_1").style.display='none'
   textArea.style.display='block'
   document.getElementById("input11").style.display = 'block'
   var p = document.createElement('p');
   p.classList.add("nn");
   p.textContent=("Enter the text")
   document.querySelector('.container').appendChild(p);
});


function colorChanger(color) {
   document.querySelector('.container').style.backgroundColor = color;
}


document.getElementById("colorChanger").addEventListener("input", ()=>{
   colorChanger(document.getElementById("colorChanger").value);
})

document.querySelector(".colors").addEventListener("click", (event)=>{
   event.preventDefault()
   console.log(event.target)

   var className = event.target.className;

   switch (className) {
      case "red":
         colorChanger("red")
         break;
      
      case "blue":
         colorChanger("blue")
         break;

         
      case "gold":
         colorChanger("goldenrod")
         break;
   
         
      case "purple":
         colorChanger("purple")
         break;
   
         
      case "orange":
         colorChanger("orange")
         break;
   
   
      default:
         break;
   }
})