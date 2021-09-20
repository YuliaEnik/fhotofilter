const inputs = document.querySelectorAll('.controls input');
const filters = document.querySelector(".controls");
const presets = document.querySelector(".presets");
const preset = document.querySelectorAll('.preset');
const bigImage = document.querySelector(".img");
const btnReset = document.querySelector(".reset");
const css = document.querySelector('.code-input');
const invert = document.querySelector('.invert');
const blurr = document.querySelector('.blur');
const contrast = document.querySelector('.contrast');
const brightness = document.querySelector('.brightness');
const baseColor = document.querySelector('.input-color');
const root = document.documentElement;


const defoltFilter = {
    blur: "0px",
    contrast: "123%",
    brightness: "95%",
    invert:"10%",
    base:"#ffc600",
}

const firstFilter = {
  
  blur: "0px",
  contrast: "65%",
  brightness: "80%",
  invert:"5%",
  base:"#e66465"
}

const secondFilter = {
  blur: "0px",
  contrast: "125%",
  brightness: "110%",
  invert:"0%",
  base:"#09b3dd"
}

const thirdFilter = {
  blur: "0px",
  contrast: "180%",
  brightness: "65%",
  invert:"0%",
  base:"#0c6d48"
}

const forthFilter = {
  blur: "0px",
  contrast: "110%",
  brightness: "40%",
  invert:"0%",
  base:"#c9cad1"
}

function handleUpdate() {
const suffix = this.dataset.sizing || '';
bigImage.style.setProperty(`--${this.name}`, this.value + suffix);
}

function setFilters(filters) {
filters = { ...defoltFilter, ...filters,  };
    for (const key in filters) {
      bigImage.style.setProperty(`--${key}`, filters[key]);  
        
    }
    
}
 function changePresets(e) {
  if (e.target.matches(".first-filter")) {
    setFilters(firstFilter);
    invert.value = '5';
    blurr.value = '0';
    contrast.value = '65';
    brightness.value = '80';
    baseColor.value = "#e66465";
    console.log(123)
   
 }
 if (e.target.matches(".second-filter")) {
  setFilters(secondFilter);
  invert.value = '5';
  blurr.value = '0';
  contrast.value = '125';
  brightness.value = '110';
  baseColor.value = "#09b3dd";
}
if (e.target.matches(".third-filter")) {
  setFilters(thirdFilter);
  invert.value = '5';
  blurr.value = '0';
  contrast.value = '180';
  brightness.value = '60';
  baseColor.value = "#0c6d48";
}

if (e.target.matches(".forth-filter")) {
  setFilters(forthFilter);
  invert.value = '5';
  blurr.value = '0';
  contrast.value = '110';
  brightness.value = '40';
  baseColor.value = "#c9cad1";
}

}

function resetFilters() {
    setFilters(defoltFilter);
    invert.value = '10';
    blurr.value = '0';
    contrast.value = '123';
    brightness.value = '95';
    baseColor.value = '#ffc600'
  }



inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
btnReset.addEventListener("click", resetFilters);
presets.addEventListener("click", (e) => changePresets(e));
//preset.forEach(el => el.addEventListener("click", (e) => changePresets(e) ))
//presets.addEventListener("click", applyPreset);


