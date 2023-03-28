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

//Mild
const mildMensShirtPID = 203078946;
const mildMensJeansPID = 203170639;
const mildMensHeadPID = 204048432;

const mildMensURL = {
    shirt: "https://asos2.p.rapidapi.com/products/v3/detail?id=" + mildMensShirtPID + "&lang=en-AU&store=AU&sizeSchema=AU&currency=AUD",
    jeans: "https://asos2.p.rapidapi.com/products/v3/detail?id=" + mildMensJeansPID + "&lang=en-AU&store=AU&sizeSchema=AU&currency=AUD",
    head: "https://asos2.p.rapidapi.com/products/v3/detail?id=" + mildMensHeadPID + "&lang=en-AU&store=AU&sizeSchema=AU&currency=AUD",
}




function cityTempSearch(city) {
    
    let recentSearch = inputField.val();
    recentSearch = recentSearch.charAt(0).toUpperCase() + recentSearch.slice(1).toLowerCase();

    
    if (!city) {
        alert('Please enter a value into the search bar.');
        return;
    }
    getRecentSearch(recentSearch);


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

var timeDisplayEl = $('#currentDay');
function displayTime() {
    var rightNow = dayjs().format('dddd, MMMM D, YYYY');
    console.log(rightNow);
    timeDisplayEl.text(rightNow);
  };
  
displayTime();

function displayClothes(clothesData) {

    var clothesContainer = document.createElement('article');
    var innerContainer = document.createElement('div');

    clothesContainer.setAttribute("class", "mx-2.5 rounded-lg flex justify-center items-center w-full sm:w-2/12 bg-sky-900 text-white");
    innerContainer.setAttribute("class", "flex flex-wrap justify-center items-center mx-auto");
    

    clothingOptions.append(clothesContainer);
    clothesContainer.append(innerContainer);

    innerContainer.innerHTML = `
    <h4 class="font-bold text-sm">${clothesData.name}</h4>
    <a href="${clothesData.localisedData[1].pdpUrl}">
        <img src="https://${clothesData.media.images[0].url}" class="rounded-lg shadow-lg w-full scale-75">
    </a>
    `;
}




function getRecentSearch (recentSearch) {

    var recentBtn = $("<button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-1'></button>");
    recentBtn.text(recentSearch);
    previousSearches.prepend(recentBtn);

}



function getClothesData (x) {
    console.log(x);

    clothingOptions.text('');

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f172757ce6msh320b0dfbc212186p166555jsnaab616efc02d',
            'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
        }
    };

    if (x > 26) {
        console.log("Summer time!");

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

        fetch(summerMensURL.shorts, options)
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

        fetch(summerMensURL.shoes, options)
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
    else if(x < 19) {
        console.log("Winter time!");

        fetch(winterMensURL.coat, options)
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

        fetch(winterMensURL.pants, options)
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

        fetch(winterMensURL.head, options)
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
            console.log("Mild weather!");

        fetch(mildMensURL.shirt, options)
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

        fetch(mildMensURL.jeans, options)
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

        fetch(mildMensURL.head, options)
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