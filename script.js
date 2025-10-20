//http://api.weatherapi.com/v1/current.json?key=3d0547ca221b4069a4622147251910&q=New York City&aqi=no

const temperatureElement = document.getElementsByClassName("temperature")[0];
const locationElement = document.getElementById("where");
//const timeElement = document.getElementsByClassName("time")[0]; //Using this method would shift the element
const timeElement = document.querySelector(".time p") 
const dayElement = document.querySelector(".day p");
const dateElement = document.querySelector(".date p");
const conditionElement = document.querySelector(".condition p");

const form = document.querySelector("form")

form.addEventListener("submit", searchLocation);


const fetchResults = async (targetLocation) => {

    //let url = "http://api.weatherapi.com/v1/current.json?key=3d0547ca221b4069a4622147251910&q=London&aqi=no"; //Static
    let url = `http://api.weatherapi.com/v1/current.json?key=3d0547ca221b4069a4622147251910&q=${targetLocation}&aqi=no`; // Dynamic

    const res = await fetch(url);

    const data = await res.json();

    console.log(data);

    //Call the necessary details: temperature, location, time, day, date, weather condition
    let temperature = data.current.temp_f;
    console.log(`Temperature is: ${temperature}`); //Tests temperature outputs
    temperatureElement.textContent = `${temperature}`;

    let locationName = data.location.name;
    console.log(`Location is: ${locationName}`); // Tests location outputs
    locationElement.textContent = `${locationName}`

    let time = data.location.localtime.split(" ")[1]; //splits the string into two parts - data and time - and select the second part
    console.log(`Time is: ${time}`); //Tests time outputs
    timeElement.textContent = `${time}`;

    //let day = 

    let date = data.location.localtime.split(" ")[0]; //splits the string into two parts - data and time - and select the first part
    console.log(`Date is: ${date}`); //Tests date outputs
}

function searchLocation(search) {
    search.preventDefault();

    const searchElement = document.querySelector(".search_bar");
    target = searchElement.value;

    fetchResults(target);

}

