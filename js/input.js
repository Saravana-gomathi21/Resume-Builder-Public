var e=1

function createOutputElementAndModifyElements(inputID) {
   
      var textArea = inputID;

      // Hide Previous Input Box
      document.getElementById("input_1").style.display='none'
      
      // Show Input Container
      document.getElementById("input11").style.display = 'block'
      
      // Show Current Textarea 
      textArea.style.display='block'

      document.getElementById('elementCreate').style.display ='block'
      
      var p = document.createElement('p');
      p.classList.add("nn");
      p.textContent=("Enter the text")
      
      document.querySelector('.container').appendChild(p);
      
      idd="strElement"+e;
      p.setAttribute('id',idd)
      
      document.getElementById('elementCreate').addEventListener("click",function(){
         document.getElementById(idd).textContent = document.getElementById('textArea').value;
      })
      
      e++ 
}

document.getElementById("textArea1").addEventListener("click",function() {
   createOutputElementAndModifyElements(document.getElementById("textArea"));
})

education = `
   <div>
      <h1>Education</h1>
      <hr>
      <h3>School</h3>
      <h4>Name : </h4><p>MSPVL School</p>
      <h4>City : </h4><p>Pavoorchatram</p>
      <h4>Year : </h4><p>2022 - 2024</p>
   </div>
`


document.getElementById('Edu').addEventListener("click",function(){
   var dii = document.querySelector(".container")
   dii.innerHTML +=education
})

document.getElementById('inpImage').addEventListener("click",function(){
   document.getElementById('input_1').style.display = 'block'
   document.getElementById('input11').style.display = 'block'
   var im = document.createElement('img')
   document.getElementById('elementCreate').style.display ='block'
   document.querySelector('.container').appendChild(im);
   var f=1
   var xy = "img_op"+f
   im.setAttribute('id',xy)
   document.getElementById('input_1').addEventListener('change', function(event) {
      const file = event.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
              document.getElementById(xy).src = e.target.result;
          };
          reader.readAsDataURL(file);
      }
  });
  f++
})

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