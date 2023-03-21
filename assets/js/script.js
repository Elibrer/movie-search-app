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



//Category ID's
//Mens
var mensWinterCID = 21121;
var mensSummerCID = 50085;
//Womens
var womensWinterCID = 20061;
var womensSummerCID = 14626;

//Product ID's
//Summer
var summerMensShirtPID = 204454519;
var summerMensShortsPID = 203742756;
var summerMensShoesPID = 204317591;
//Winter
var winterMensCoatPID = 202344973;
var winterMensPantsPID = 204229945;
var winterMensHeadPID = 203682741;



function init() {

    //Get everything

    // const settings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": "https://asos2.p.rapidapi.com/categories/list?country=US&lang=en-US",
    //     "method": "GET",
    //     "headers": {
    //         "X-RapidAPI-Key": asosAPIKey,
    //         "X-RapidAPI-Host": "asos2.p.rapidapi.com"
    //     }
    // };
    
    // $.ajax(settings).done(function (response) {
    //     console.log(response);
    // });



    //Get Product

    // const settings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": "https://asos2.p.rapidapi.com/products/v3/detail?id=204454519&lang=en-US&store=US&sizeSchema=US&currency=USD",
    //     "method": "GET",
    //     "headers": {
    //         "X-RapidAPI-Key": asosAPIKey,
    //         "X-RapidAPI-Host": "asos2.p.rapidapi.com"
    //     }
    // };
    
    // $.ajax(settings).done(function (response) {
    //     console.log(response);

    // });



    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f172757ce6msh320b0dfbc212186p166555jsnaab616efc02d',
            'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
        }
    };
    
    fetch('https://asos2.p.rapidapi.com/products/v3/detail?id=9851612&lang=en-US&store=US&sizeSchema=US&currency=USD', options)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch((error) => {
        console.error("There has been a problem with your fetch operation:");
    });



    //Get category

    // const settings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId="+ catagoryObj + "&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US",
    //     "method": "GET",
    //     "headers": {
    //         "X-RapidAPI-Key": asosAPIKey,
    //         "X-RapidAPI-Host": "asos2.p.rapidapi.com"
    //     }
    // };
    
    // $.ajax(settings).done(function (response) {
    //     console.log(response);
    // });
}

init();







// fetchAsosAPI();

