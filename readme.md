# Weather Forecast App

## Functionality

This JavaScript code fetches weather forecast data from the OpenWeatherMap API based on the user's input city. The retrieved data includes current weather information and a 5-day forecast displayed on an HTML page. Here's a breakdown of the code's functionality:

1. **Selecting HTML Element**
   - The code selects the HTML element with the class 'forecast-container' using `document.querySelector('.forecast-container')` and logs it to the console.

2. **OpenWeatherMap API Key**
   - An API key (`apiKey`) for the OpenWeatherMap service is defined.

3. **Event Listener for Search Button**
   - The code sets up an event listener for the button with the id 'search'.
   - When the button is clicked, it retrieves the city name entered by the user.

4. **Constructing API URL**
   - The API URL for OpenWeatherMap is constructed using the user-provided city and the API key.

5. **Fetching Weather Data**
   - The `fetch` function is used to get weather data from the OpenWeatherMap API.
   - The retrieved data is then logged to the console.

6. **Current Weather Display**
   - The code gets the current date and formats it to display only the date.
   - Current weather information, including city name, date, humidity, temperature, and wind speed, is displayed on the HTML page.

7. **Styling Current Weather Display**
   - The font size for the current weather information is set to 24px.

8. **Filtering Forecast Data**
   - The code filters the weather data to get information specifically for 12:00:00 (noon) for the next 5 days.

9. **Creating Forecast Cards**
   - It iterates through the filtered data to create HTML cards for each day, including date, weather icon, humidity, temperature, and wind speed.

10. **Updating Forecast Container**
    - The forecast container on the HTML page is updated with the generated HTML, displaying the 5-day forecast.

## How to Use
1. Enter the desired city in the input field.
2. Click the 'Search' button.
3. View the current weather information and the 5-day forecast.

Note: Ensure an internet connection is available, as the weather data is fetched from the OpenWeatherMap API.


## License
MIT 

