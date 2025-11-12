const buton = document.getElementById("buton");
const nume = document.getElementById("nume");
const descriere= document.getElementById("descriere");
const educatie = document.getElementById("educatie");
const pasiuni = document.getElementById("pasiuni");
const poza = document.getElementById("poza");
const pagina = document.getElementById("pagina");

buton.addEventListener("click", function () {
	nume.textContent = "Ing. Vascovici Sebastian";
	descriere.textContent = "Fc 26  ";
	
	educatie.innerHTML = "<h2>Realizari </h2> <p>Absolvent ETTI </p>";
	pasiuni.innerHTML = "<h2> Experiente </h2> <p> Am facut sport</p>";
	
	poza.src = "imagini/imagine 1.jpg";
	poza.alt = "poza daca da fail";
	poza.style.opacity = "1";
	poza.style.border = "5px solid black";
	
	pagina.style.backgroundColor = "#ccc00";
	pagina.style.fontFamily = "Arial, Hevetica, sans-serif";
});

const anNastere = document.getElementById("anNastere");
const anCurent = new Date().getFullYear();
const varsta = anCurent - parseInt(anNastere.textContent);

anNastere.onmouseover = function (){
	anNastere.textContent = varsta + "ani";
	
};

anNastere.onmouseout = function (){
	anNastere.textContent = anCurent - varsta;
	
}