const burgerbtn = document.getElementById("nav-icon1");
const navlist = document.getElementById("nav");
const featureOpener = document.querySelector(".property_feature-img");
const featureContent = document.querySelector(".property_feature-h");
const historyOpener = document.querySelector(".property_history-img");
const historyContent = document.querySelector(".property_history-h");
const taxOpener = document.querySelector(".property_tax-img");
const taxContent = document.querySelector(".property_tax-h");
const NeighbohoodOpener = document.querySelector(".property_Neighbohood-img");
const NeighbohoodContent = document.querySelector(".property_Neighbohood-h");
const MortgageOpener = document.querySelector(".Monthly_Mortgage-img");
const MortgageContent = document.querySelector(".Monthly_Mortgage-h");
const SchoolsOpener = document.querySelector(".Nearby_schools-img");
const SchoolsContent = document.querySelector(".Nearby_schools-h");
const SurroundingOpener = document.querySelector(".surrounding-img");
const SurroundingContent = document.querySelector(".surrounding-h");
const images = document.querySelectorAll(".container > img");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");

let index = 0;
images[index].classList.add("active");

function prevImg() {
  images[index].classList.remove("active");
  index -= 1;
  images[index].classList.add("active");
}

function nextImg() {
  images[index].classList.remove("active");
  index += 1;
  images[index].classList.add("active");
}
function prevImg() {
  images[index].classList.remove("active");
  index = index === 0 ? images.length - 1 : index - 1;
  images[index].classList.add("active");
}

function nextImg() {
  images[index].classList.remove("active");
  index = index === images.length - 1 ? 0 : index + 1;
  images[index].classList.add("active");
}
prevBtn.addEventListener("click", prevImg);
nextBtn.addEventListener("click", nextImg);

// ****************************************************************
SurroundingOpener.addEventListener("click", openseven);
function openseven() {
  SurroundingOpener.classList.toggle("active");
  SurroundingContent.classList.toggle("active");
}

// *********** For opening Navbar  **************

burgerbtn.addEventListener("click", makecross);
function makecross() {
  burgerbtn.classList.toggle("open");
  navlist.classList.toggle("active");
}

// ************** For opening features Section **************

featureOpener.addEventListener("click", openerOne);
function openerOne() {
  featureOpener.classList.toggle("active");
  featureContent.classList.toggle("active");
}

// ************** For opening History Section **************

historyOpener.addEventListener("click", openerTwo);
function openerTwo() {
  historyOpener.classList.toggle("active");
  historyContent.classList.toggle("active");
}
// ************** For opening tax Section **************
taxOpener.addEventListener("click", openerthree);
function openerthree() {
  taxOpener.classList.toggle("active");
  taxContent.classList.toggle("active");
}
// ************** For opening tax Section **************
NeighbohoodOpener.addEventListener("click", openerfour);
function openerfour() {
  NeighbohoodOpener.classList.toggle("active");
  NeighbohoodContent.classList.toggle("active");
}

// ******************* For openeing Mortgage section ****************

MortgageOpener.addEventListener("click", openerfive);
function openerfive() {
  MortgageOpener.classList.toggle("active");
  MortgageContent.classList.toggle("active");
}

// ******************* For openeing Nearby schools section ****************

SchoolsOpener.addEventListener("click", openersix);
function openersix() {
  SchoolsOpener.classList.toggle("active");
  SchoolsContent.classList.toggle("active");
}
