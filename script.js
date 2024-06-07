// Konversi Suhu

//Variable
const textbox = document.getElementById("textbox");
const keFahrenheit = document.getElementById("keFahrenheit");
const keCelcius = document.getElementById("keCelcius");
const hasil = document.getElementById("hasil");
let suhu;

function convert(){
    if(keFahrenheit.checked){
        suhu = Number(textbox.value);
        suhu = suhu * 9 / 5 + 32;
        hasil.textContent = suhu.toFixed(1) + "°F"
    }
    else if(keCelcius.checked){
        suhu = Number(textbox.value);
        suhu = (suhu - 32) * (5/9);
        hasil.textContent = suhu.toFixed(1) + "°C"
    }
    else{
        hasil.textContent = "Mohon pilih unit suhu!";
    }
}