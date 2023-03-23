$(function(){


// Function variables
const weatherForecast = $("#weather-forecast");
const weatherInfo = $("#weather-info");
const clothingOptions = $("#clothing-options");
const clothingInfo = $("#clothing-info");

const searchButton = $("button");
const inputField = $("#city");

const previousSearches = $("#search-list");
const submitCityBtn = $("#submit-city");

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

const summerMensURL = {
    shirt: "https://asos2.p.rapidapi.com/products/v3/detail?id=" + summerMensShirtPID + "&lang=en-AU&store=AU&sizeSchema=AU&currency=AUD",
    shorts: "https://asos2.p.rapidapi.com/products/v3/detail?id=" + summerMensShortsPID + "&lang=en-AU&store=AU&sizeSchema=AU&currency=AUD",
    shoes: "https://asos2.p.rapidapi.com/products/v3/detail?id=" + summerMensShoesPID + "&lang=en-AU&store=AU&sizeSchema=AU&currency=AUD",
};
    
//Winter
const winterMensCoatPID = 202344973;
const winterMensPantsPID = 204229945;
const winterMensHeadPID = 203682741;

const winterMensURL = {
    coat: "https://asos2.p.rapidapi.com/products/v3/detail?id=" + winterMensCoatPID + "&lang=en-AU&store=AU&sizeSchema=AU&currency=AUD",
    pants: "https://asos2.p.rapidapi.com/products/v3/detail?id=" + winterMensPantsPID + "&lang=en-AU&store=AU&sizeSchema=AU&currency=AUD",
    head: "https://asos2.p.rapidapi.com/products/v3/detail?id=" + winterMensHeadPID + "&lang=en-AU&store=AU&sizeSchema=AU&currency=AUD",
}






function cityTempSearch(city) {    
    if (!city) {
        alert('Please enter a value into the search bar.');
        return;
    }

    var openWeatherAPIURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + openWeatherAPIKey + "&units=metric";

    fetch(openWeatherAPIURL , {
        method: 'GET', 
        credentials: 'same-origin', 
        redirect: 'follow', 
    })
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
    })
    .then(function (data) {
    inputField.val("");

    const cityTemp = data.main.temp;
    weatherInfo.text(cityTemp + "°C")
    
    getClothesData(cityTemp);
    
    })
    .catch((error) => {
        alert("Please enter a valid city name");
    });

}


submitCityBtn.on("click", function(event){
    event.preventDefault();
    var city = inputField.val()
    cityTempSearch(city);
})


function displayClothes(clothesData) {

    var clothesContainer = document.createElement('article');
    var innerContainer = document.createElement('div');

    clothesContainer.setAttribute("class", "columns-3 content-center bg-slate-700 text-white");
    clothingOptions.append(clothesContainer);
    clothesContainer.append(innerContainer);

    innerContainer.innerHTML = `<h4>${clothesData.name}</h4><<a href="${clothesData.localisedData[1].pdpUrl}"><img src="https://${clothesData.media.images[0].url}"></a>`;

}


function getClothesData (x) {
    console.log(x);
    if (x > 25) {
        console.log("Summer time!");
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f172757ce6msh320b0dfbc212186p166555jsnaab616efc02d',
                'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
            }
        };
          
        fetch(summerMensURL.shirt, options)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }    })
        .then(function (data) {
            console.log(data);
            displayClothes(data);
        })
        .catch((error) => {
            console.error("There has been a problem with your fetch operation:");
        });
    }
    else {
        console.log("Winter time!");
    }


    

}

//function getAPI() {

    //Options for each fetch request to ensure the header is seen by the ASOS server, allowing access
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'f172757ce6msh320b0dfbc212186p166555jsnaab616efc02d',
    //         'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
    //     }
    // };

    // //Get Product
    // fetch('https://asos2.p.rapidapi.com/products/v3/detail?id=9851612&lang=en-AU&store=AU&sizeSchema=AU&currency=AUD', options)
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
    // fetch('https://asos2.p.rapidapi.com/products/v2/list?store=AU&offset=0&categoryId='+ catagoryObj + '&limit=48&country=AU&sort=freshness&currency=AUD&sizeSchema=AU&lang=en-AU', options)
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
    // fetch('https://asos2.p.rapidapi.com/categories/list?country=AU&lang=en-AU', options)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (data) {
    //     console.log(data);
    // })
    // .catch((error) => {
    //     console.error("There has been a problem with your fetch operation:");
    // });

    

    //}

})