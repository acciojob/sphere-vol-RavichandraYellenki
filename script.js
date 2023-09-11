function volume_sphere() {
    //Write your code here
  let inputRadius = document.getElementById("radius");
	let r = parseFloat( inputRadius.value);
	let outputElement = document.getElementById("volume");

	let outputVolume = (4/3)*(Math.PI)* Math.pow(r, 3);
	outputElement.value=outputVolume;
} 

window.onload = function () {
  document.getElementById('MyForm').onsubmit = function (event) {
    event.preventDefault();
    volume_sphere();
  };
};
// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere();
