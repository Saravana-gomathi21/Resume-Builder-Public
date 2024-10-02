var e = 1
var f = 1;
var cl = "ui-widget-content"

let currentTextAreaId;

function createOutputElementAndModifyElements(textArea) {

   document.querySelector(".input_1").style.display = 'none';


   document.getElementById("input11").style.display = 'block';


   textArea.style.display = 'block';
   textArea.style.border = 'solid';

   document.getElementById('elementCreate').style.display = 'block';


   const outputElement = document.createElement('pre');
   outputElement.textContent = "Enter the text";
   const elementId = `strElement${e}`;
   outputElement.setAttribute('id', elementId);
   outputElement.classList.add(cl);
   document.querySelector('.container').appendChild(outputElement);




   currentTextAreaId = textArea.id;


   document.getElementById('elementCreate').onclick = function () {
      outputElement.textContent = document.getElementById(currentTextAreaId).value;
      $("#" + outputElement.id).resizable();
   };

   e++;

}


document.getElementById("textArea1").addEventListener("click", function () {
   createOutputElementAndModifyElements(document.getElementById("textArea"));
});



education = `
   <div>
      <h1 id="resizable">Education</h1>
      <hr>
      <h3>School</h3>
      <h4>Name : </h4><p>MSPVL School</p>
      <h4>City : </h4><p>Pavoorchatram</p>
      <h4>Year : </h4><p>2022 - 2024</p>
   </div>
`
var yz = 1;

document.getElementById('Edu').addEventListener("click", function () {
   var dii = document.querySelector(".container")
   dii.innerHTML += education
})


let imageCount = 0;
let inputCount = 0;

document.getElementById('inpImage').addEventListener("click", function () {

   document.querySelector('.input_1').style.display = 'block';
   document.getElementById('input11').style.display = 'block';


   const imgElement = document.createElement('img');
   imgElement.classList.add('resizable');


   document.querySelector('.container').appendChild(imgElement);


   const imgId = `img_op${imageCount}`;
   imgElement.setAttribute('id', imgId);


   const inputId = `img_input${inputCount}`;
   const inputField = document.querySelector('.input_1');
   inputField.setAttribute('id', inputId);


   document.getElementById(inputId).addEventListener('change', function (event) {
      const file = event.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onload = function (event) {
            imgElement.src = event.target.result;
         };
         reader.readAsDataURL(file);
      }
   });


   imageCount++;
   inputCount++;
});


function colorChanger(color) {
   document.querySelector('.container').style.backgroundColor = color;
}


document.getElementById("colorChanger").addEventListener("input", () => {
   colorChanger(document.getElementById("colorChanger").value);
})

document.querySelector(".colors").addEventListener("click", (event) => {
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

