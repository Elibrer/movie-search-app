# Outfit forecast
*An interactive weather app to suggest clothing options based on city temperature.*

![Languages Badge](https://img.shields.io/badge/Languages-3-blue)
![JS Badge](https://img.shields.io/badge/JavaScript-64.7%25-yellow)
![HTML Badge](https://img.shields.io/badge/HTML-25.4%25-red)
![CSS Badge](https://img.shields.io/badge/CSS-9.9%25-blueviolet)

## Links
- [GitHub Repository](https://github.com/Elibrer/weather-fashion-app)
-  [Deployed Application](https://elibrer.github.io/weather-fashion-app)

## Authors

- Teresa: [teresagithub17](https://github.com/teresagithub17)
- Ryan: [RyanGolder](https://github.com/RyanGolder)
- Elijah: [Elibrer](https://github.com/elibrer)


## Usage

This webpage is designed to provide clothing options based on the current weather. You can enter any city into the input field to get the current temperature a list of clothes that are suitable for the current temperature.

This webpage is useful for getting ideas on what to pack for your upcoming trip to a city that you're unfamiliar with.


## Table of Contents

- [Description](#description)
- [Features](#features)
- [Documentation](#documentation)
- [Languages Used](#languages-used)
- [Outfit Forecast Preview](#full-preview)
- [Credits](#credits)
- [License](#license)



## Description

This webpage is used for for people who don't know what to wear for the day (we've all been there). Based on the current temperature it will give you 3 items of clothing to wear, a hat (e.g. cap or beanie), a top, and a pair of pants/shorts.

Enter the city you currently live in for some inspiration for the day or enter a city you are travelling to get an idea of what to pack for your upcoming trip.

## Features
- When the page is loaded the recent search history will fill with buttons related to the users previous searches stored in local storage, and the application will load the most recent into the application to launch.. If no history is recorded then 'Sydney' will be the default.
- The application will load the weather of the most recent city, searched city, or default 'Sydney' and display the temperature. 
- Typing a city name into the search bar and hitting enter or pressing the search button will also run the application. 
- Pressing one of the rendered 'recent city' buttons will run the application based on the text value of the button pressed.
- Depending on the current temperature of the selected city, three clothing options will be shown and become available in the bottom of the screen.
- When pressed, these options will redirect the user to the website and allow them to purchase the items from there.

## Documentation
Google Docs page to store ideas and information:
- [Planning Document](https://docs.google.com/document/d/1tlqwegM2-y9XgI4FwGl6Yx2GwtaKLGg5eVWhkjZvldM/edit?usp=sharing/)

Google Slides powerpoint for our group presentation:
- [Presentation](https://docs.google.com/presentation/d/1F9yPo9jogn1VkJ_jXOAwknGyZlUTi9mNqzg_zsCUe8c/edit?usp=sharing)

## Languages Used
- ### **HTML**
- ### **CSS**
- ### **JavaScript**

## Outfit Forecast Preview

![Landing page of the Outfit Forecast application, displaying search inputs, recent search history, current weather of the selected city, and three items of clothing displayed relative to the current weather of that city](./assets/images/outfit-forecast-preview.png "outfit-forecast-preview")


## Credits

[Creating links in a README.md file](https://docs.readme.com/main/docs/linking-to-pages)

[Badge generator](https://shields.io/)

[Button click on enter press](https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp)

[JavaScript library for accessing time and date](https://day.js.org/)

[ASOS API page and documentation](https://rapidapi.com/apidojo/api/asos2)

[Using fetch requests](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

[Opening a different tab when a link is pressed](https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/)


## License

MIT License

Copyright (c) 2023 Elibrer, RyanGolder, and teresagithub17

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.