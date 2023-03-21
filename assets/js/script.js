
// Function variables
const weatherForecast = $("#weather-forecast");
const weatherInfo = $("#weather-info");
const clothingOptions = $("#clothing-options");
const clothingInfo = $("#clothing-info");
const searchButton = $("button");
const inputField = $("input");
const previousSearches = $("#search-list");

// API keys
var asosAPIKey = "f172757ce6msh320b0dfbc212186p166555jsnaab616efc02d";

const openWeatherAPIKey = "7ae6f66d2cf4fdbd254603d563937e4c";
const asosAPIKey = "f172757ce6msh320b0dfbc212186p166555jsnaab616efc02d";




//Category ID's
//Mens
const mensWinterCID = 21121;
const mensSummerCID = 50085;
//Womens
const womensWinterCID = 20061;
const womensSummerCID = 14626;

//Product ID's
//Summer
const summerMensShirtPID = 204454519;
const summerMensShortsPID = 203742756;
const summerMensShoesPID = 204317591;
//Winter
const winterMensCoatPID = 202344973;
const winterMensPantsPID = 204229945;
const winterMensHeadPID = 203682741;




function cityInputSearch() {
    //let inputValue = inputField.val();
    // if (!inputValue) {
    //     alert('Please enter a value into the search bar.');
    //     return;
    // }

    let openWeatherAPIURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "sydney" + "&appid=" + openWeatherAPIKey + "&units=metric";

    fetch(openWeatherAPIURL , {
        method: 'GET', 
        credentials: 'same-origin', 
        redirect: 'follow', 
    })
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log(data.main.temp + "°C")
    })

    let summmerMensShirtURL ="https://asos2.p.rapidapi.com/products/v3/detail?" + summerMensShirtPID + " &lang=en-US&store=US&sizeSchema=US&currency=USD";
    let summmerMensShortsURL = "https://asos2.p.rapidapi.com/products/v3/detail?" + summerMensShortsPID + " &lang=en-US&store=US&sizeSchema=US&currency=USD";
    let summmerMensShoesURL = "https://asos2.p.rapidapi.com/products/v3/detail?" + summerMensShoesPID + " &lang=en-US&store=US&sizeSchema=US&currency=USD";

    

}


cityInputSearch();


function getAPI() {

    //Options for each fetch request to ensure the header is seen by the ASOS server, allowing access
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'f172757ce6msh320b0dfbc212186p166555jsnaab616efc02d',
    //         'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
    //     }
    // };

    // //Get Product
    // fetch('https://asos2.p.rapidapi.com/products/v3/detail?id=9851612&lang=en-US&store=US&sizeSchema=US&currency=USD', options)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (data) {
    //     console.log(data);
    // })
    // .catch((error) => {
    //     console.error("There has been a problem with your fetch operation:");
    // });


    //Get category - to be used for phase 2 of product design
    // fetch('https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId='+ catagoryObj + '&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US', options)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (data) {
    //     console.log(data);
    // })
    // .catch((error) => {
    //     console.error("There has been a problem with your fetch operation:");
    // });



    //Get everything
    // fetch('https://asos2.p.rapidapi.com/categories/list?country=US&lang=en-US', options)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (data) {
    //     console.log(data);
    // })
    // .catch((error) => {
    //     console.error("There has been a problem with your fetch operation:");
    // });

    

}

getAPI();








