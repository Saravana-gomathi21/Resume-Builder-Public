var e = 1
var f = 1;

function createOutputElementAndModifyElements(inputID) {

   var textArea = inputID;

   // Hide Previous Input Box
   document.querySelector(".input_1").style.display = 'none'

   // Show Input Container
   document.getElementById("input11").style.display = 'block'

   // Show Current Textarea 
   textArea.style.display = 'block'
   textArea.style.border = 'solid'

   document.getElementById('elementCreate').style.display = 'block'

   var p = document.createElement('p');
   p.classList.add("nn");
   p.textContent = ("Enter the text")

   document.querySelector('.container').appendChild(p);

   idd = "strElement" + e;
   p.setAttribute('id', idd)

   console.log(p)

   document.getElementById('elementCreate').addEventListener("click", function () {
      document.getElementById(idd).textContent = document.getElementById('textArea').value;
   })

   e++
}

document.getElementById("textArea1").addEventListener("click", function () {
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
var yz = 1;

document.getElementById('Edu').addEventListener("click", function () {
   var dii = document.querySelector(".container")
   dii.innerHTML += education
})

document.getElementById('inpImage').addEventListener("click", function () {
   document.querySelector('.input_1').style.display = 'block'
   document.getElementById('input11').style.display = 'block'

   var im = document.createElement('img')
   im.classList.add('ele-image')

   document.querySelector('.container').appendChild(im);

   var xy = "img_op" + f.toString();
   im.setAttribute('id', xy)

   console.log(im)

   var zz = 'a' + yz;
   var inp_img = document.querySelector('.input_1');
   inp_img.setAttribute('id', zz);
   document.getElementById(zz).addEventListener('change', function (zz) {
      const file = zz.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onload = function (zz) {
            // console.log(document.getElementById(xy))
            document.getElementById(xy).src = zz.target.result;
         };
         reader.readAsDataURL(file);
         // console.log(reader)
      }

   });
   f++
   console.log(zz)
   yz++
})

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