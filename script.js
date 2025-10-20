//http://api.weatherapi.com/v1/current.json?key=3d0547ca221b4069a4622147251910&q=New York City&aqi=no


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
    const temperatureElement = document.getElementsByClassName("temperature")[0];
    temperatureElement.textContent = `${temperature}`;

    let locationName = data.location.name;
    console.log(`Location is: ${locationName}`); // Tests location outputs

    let time = data.location.localtime.split(" ")[1]; //splits the string into two parts - data and time - and select the second part
    console.log(`Time is: ${time}`); //Tests time outputs

    //let day = 

    let date = data.location.localtime.split(" ")[0]; //splits the string into two parts - data and time - and select the first part
    console.log(`Date is: ${date}`); //Tests date outputs
}

function searchLocation(e) {
    e.preventDefault();

    const searchElement = document.querySelector(".search_bar");
    target = searchElement.value;

    fetchResults(target);

}

