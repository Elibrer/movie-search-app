$(function(){

// Function variables
const weatherForecast = $("#weather-forecast");
const weatherInfo = $("#weather-info");
const clothingOptions = $("#clothing-options");
const clothingInfo = $("#clothing-info");
const modalBtn = $("#modal-close");
const modal = document.getElementById("myModal");



const searchButton = $("button");
const inputField = $("#city");
const cityName = $('#city-name');

const previousSearches = $("#search-list");
const submitCityBtn = $("#submit-city");

let recentSearch = "Sydney";
let pageInit = true;

const openWeatherAPIKey = "7ae6f66d2cf4fdbd254603d563937e4c";
const asosAPIKey = "f335dd15f6mshcc1a954a0c02decp10d6c0jsn429f16539d46";

//Category ID's for Phase 2 application *Random items selected from a category*
//Mens
const mensWinterCID = 21121;
const mensSummerCID = 50085;
//Womens
const womensWinterCID = 20061;
const womensSummerCID = 14626;

//Product ID's for VIP application *Single item ID search*
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

//Mild
const mildMensShirtPID = 203078946;
const mildMensJeansPID = 203170639;
const mildMensHeadPID = 204048432;

const mildMensURL = {
    shirt: "https://asos2.p.rapidapi.com/products/v3/detail?id=" + mildMensShirtPID + "&lang=en-AU&store=AU&sizeSchema=AU&currency=AUD",
    jeans: "https://asos2.p.rapidapi.com/products/v3/detail?id=" + mildMensJeansPID + "&lang=en-AU&store=AU&sizeSchema=AU&currency=AUD",
    head: "https://asos2.p.rapidapi.com/products/v3/detail?id=" + mildMensHeadPID + "&lang=en-AU&store=AU&sizeSchema=AU&currency=AUD",
}

/*-------------------------------------------------------------------------------------------------------------------*/

//Gathers information from localstorage, or sets array to blank if local is empty.
let recentSearchArr = JSON.parse(localStorage.getItem("recentSearches")) || ["Sydney"];
console.log(recentSearchArr);

//On page load.
function init() {     
    localStorage.setItem("recentSearches", JSON.stringify(recentSearchArr));

    recentSearch = recentSearchArr[0];
 

    for (i = recentSearchArr.length - 1; i >=0; i--) {
        var recentBtn = $("<button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-1 mx-2'></button>");
        recentBtn.text(recentSearchArr[i]);
        previousSearches.prepend(recentBtn);
    }
    cityTempSearch(recentSearch);
}

//Main function to search for a selected cities weather, while executing other functions as it progresses.
function cityTempSearch(city) {
    console.log(recentSearch)
    if (pageInit === false) {
        recentSearch = inputField.val();
    }
    recentSearch = recentSearch.charAt(0).toUpperCase() + recentSearch.slice(1).toLowerCase();
    if (!city) {
        modal.style.display = "block";
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
        throw new Error('Invalid city name');
    })
    .then(function (data) {
        cityName.text(recentSearch);

        getRecentSearch(recentSearch);

        inputField.val("");

        const cityTemp = data.main.temp;
        

        weatherInfo.attr("class", "text-2xl text-white font-bold pb-2");
        weatherInfo.text(cityTemp + "°C");

        getRandomClothesData(cityTemp);
    })
    .catch((error) => {
        inputField.val("");
        modal.style.display = "block";
    });
}

//Function to display curent day and date at top of page.
var timeDisplayEl = $('#currentDay');
function displayTime() {
    var rightNow = dayjs().format('dddd, MMMM D, YYYY');
    console.log(rightNow);
    timeDisplayEl.text(rightNow);
  };
  
displayTime();

//Function to randomise three cards with data from category fetch, while ensuring duplicates don't occur for Phase 2.
function categoryItemRandomiser (clothesData) {   
    
    let clothesDataLength = clothesData.products.length
    let nonDuplicateArr = [];
    for (i = 0; i < 3; i++) {
        let randomIndex = 0;
        do {
            randomIndex = Math.floor(Math.random() * clothesDataLength);
        } while (nonDuplicateArr.includes(randomIndex));
        nonDuplicateArr.push(randomIndex);
        var clothesContainer = document.createElement('article');
        var innerContainer = document.createElement('div');
    
        clothesContainer.setAttribute("class", "mx-2.5 rounded-lg flex justify-center items-center w-full sm:w-3/12 bg-sky-900 text-white m-2");
        innerContainer.setAttribute("class", "flex flex-wrap justify-center items-center mx-auto p-3");
        

        clothingInfo.append(clothesContainer);
        clothesContainer.append(innerContainer);
    
        innerContainer.innerHTML = `
            <h4 class="font-bold text-sm">${clothesData.products[randomIndex].name}</h4>
            <a href="${"https://www.asos.com/au/" + clothesData.products[randomIndex].url}" target="_blank">
            <img src="https://${clothesData.products[randomIndex].imageUrl}" class="rounded-lg shadow-lg w-full scale-75">
            </a>
        `;
    }
}

//Function to create and append buttons with the recentSearch current value, limiting to 5 elements.
function getRecentSearch (recentSearch) {

   if (pageInit === false) {
        let firstRecentSearch = previousSearches.children().last();

        if (recentSearchArr.length >= 5) {
            recentSearchArr.pop();
            firstRecentSearch.remove();
        }

        var recentBtn = $("<button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-1 mx-2'></button>");
        recentBtn.text(recentSearch);
        previousSearches.prepend(recentBtn);
        recentSearchArr.unshift(recentSearch);

        localStorage.setItem("recentSearches", JSON.stringify(recentSearchArr));
    }
    pageInit = false;
}

//Function to fetch clothing category data for Phase 2.
function getRandomClothesData (x) {
    console.log(x);
    clothingInfo.text('');
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': asosAPIKey,
            'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
        }
    };

    if (x >= 26) {
        console.log("Summer time!");
        fetch('https://asos2.p.rapidapi.com/products/v2/list?store=AU&offset=0&categoryId='+ mensSummerCID + '&limit=48&country=AU&sort=freshness&currency=AUD&sizeSchema=AU&lang=en-AU', options)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }       
         })
        .then(function (data) {
            console.log(data);
            categoryItemRandomiser(data);

        })
        .catch((error) => {
            console.error("There has been a problem with your fetch operation:");
        });
    }
    else {
        console.log("Winter time!");
        fetch('https://asos2.p.rapidapi.com/products/v2/list?store=AU&offset=0&categoryId='+ mensWinterCID + '&limit=48&country=AU&sort=freshness&currency=AUD&sizeSchema=AU&lang=en-AU', options)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }       
         })
        .then(function (data) {
            console.log(data);
            categoryItemRandomiser(data);

        })
        .catch((error) => {
            console.error("There has been a problem with your fetch operation:");
        });
    } 
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

//Button for modal element
modalBtn.on("click", function(event) {
    modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Selects buttons within the '#search-list' element, copying their value data to be used within the main function.
$(document).on('click', "#search-list button", function(event){
    let buttonContent = $(this).text();
    inputField.val(buttonContent);
    let city = inputField.val()
    cityTempSearch(inputField.val());
})

submitCityBtn.on("click", function(event){
    event.preventDefault();
    let city = inputField.val()
    cityTempSearch(city);
    
})

init();
})