# COMP3612-Assignment3

## COMP 3612 - API Generation Project

### Overview
This repository holds the code for Assignment #3 for COMP3612 at Mount Royal University. The aim of this project is to create multiple APIs based on JSON data provided by the instructor. It includes multiple JSON files with data, data providers to acquire the JSON data, as well as handlers to produce APIs dependent on specific URL paths. 

### Features
- Constructs APIs for a variety of URLs, working with dynamic routes to provide specific information based on endpoints.

### Technologies Used
- Node.js
- Javascript

### Main Project Files

- **server.js**  
  The main server file for running the API service.
  
- **data folder**  
  Contains all JSON data provided by the instructor in the form of `data.json` where data = [circuits, constructors, drivers, races, results].
  
- **scripts folder**  
  Contains all handler and provider modules in the form of `data-handler.js` or `data-provider.js` where data = [circuits, constructors, drivers, races, results].

### API Routes

- **/api/circuits**  
  Returns all circuits.
  
- **/api/circuits/id**  
  Returns a single circuit specified by the passed `id` value.
  
- **/api/constructors**  
  Returns all constructors.
  
- **/api/constructors/ref**  
  Returns a single constructor specified by the passed `ref` value.
  
- **/api/constructorResults/ref/year**  
  Returns the race results for a specified constructor `ref` value and season.
  
- **/api/drivers**  
  Returns all drivers.
  
- **/api/drivers/ref**  
  Returns a single driver specified by the passed `ref` value.
  
- **/api/driverResults/ref/year**  
  Returns the race results for a specified driver `ref` value and season.
  
- **/api/races/season/year**  
  Returns all the races for the specified season.
  
- **/api/races/id/id**  
  Returns just the specified race using `id` value.
  
- **/api/results/race/id**  
  Returns all the results for the specified race using `id` value.
  
- **/api/results/season/year**  
  Returns all the results for all the races in the season.

### Testing
- [**/api/circuits**](https://alive-important-bream.glitch.me/api/circuits) - Returns all circuits
- [**/api/circuits/1**](https://alive-important-bream.glitch.me/api/circuits/1) - Returns all circuits with id of "1"
- [**/api/constructors**](https://alive-important-bream.glitch.me/api/constructors) - Returns all constructors
- [**/api/constructors/mclaren**](https://alive-important-bream.glitch.me/api/constructors/mclaren) - Returns all constructors of ref "mclaren"
- [**/api/coNSTruCTors/mclaren**](https://alive-important-bream.glitch.me/api/coNSTruCTors/mclaren) - Returns all constructors of ref "mclaren"
- [**/api/constructors/javascript**](https://alive-important-bream.glitch.me/api/constructors/javascript) - Returns an error message "Constructor with ref javascript not found"
- [**/api/constructorResults/mclaren/2023**](https://alive-important-bream.glitch.me/api/constructorResults/mclaren/2023) - Returns race results using constructor ref "mclaren" and year "2023"
- [**/api/constructorResults/MERCEDES/2020**](https://alive-important-bream.glitch.me/api/constructorResults/MERCEDES/2020) - Returns race results using constructor ref "mercedes" and year "2020"
- [**/api/constructorResults/mclaren/2040**](https://alive-important-bream.glitch.me/api/constructorResults/mclaren/2040) - Returns an error message "Result with constructor ref mclaren & year 2040 not found"
- [**/api/constructorResults/comp3612/2023**](https://alive-important-bream.glitch.me/api/constructorResults/comp3612/2023) - Returns an error message "Result with constructor ref comp3612 & year 2023 not found"
- [**/api/drivers**](https://alive-important-bream.glitch.me/api/drivers) - Returns all drivers
- [**/api/drivers/hamilton**](https://alive-important-bream.glitch.me/api/drivers/hamilton) - Returns all drivers with ref "hamilton"
- [**/api/drivers/HAMilton**](https://alive-important-bream.glitch.me/api/drivers/HAMilton) - Returns all drivers with ref "hamilton"
- [**/api/drivers/randy**](https://alive-important-bream.glitch.me/api/drivers/randy) - Returns an error message "Driver with ref randy not found"
- [**/api/driverResults/piastri/2023**](https://alive-important-bream.glitch.me/api/driverResults/piastri/2023) - Returns race results using driver ref "piastri" and year "2023"
- [**/api/driverResults/piastri/2002**](https://alive-important-bream.glitch.me/api/driverResults/piastri/2002) - Returns an error message "Driver with ref piastri & year 2002 not found"
- [**/api/races/season/2023**](https://alive-important-bream.glitch.me/api/races/season/2023) - Returns all races in year "2023"
- [**/api/races/seasoning/2023**](https://alive-important-bream.glitch.me/api/races/seasoning/2023) - Returns an error screen 404 stating "Unable to find the requested resource!"
- [**/api/races/season/2032**](https://alive-important-bream.glitch.me/api/races/season/2032) - Returns an error message "Races with year 2032 not found"
- [**/api/results/race/1100**](https://alive-important-bream.glitch.me/api/results/race/1100) - Returns race result using id "1100"
- [**/api/results/race/1756348576**](https://alive-important-bream.glitch.me/api/results/race/1756348576) - Returns an error message "Race with id 1756328576 not found"
- [**/api/results/season/2023**](https://alive-important-bream.glitch.me/api/results/season/2023) - Returns all race results using year "2023"
- [**/api/results/season/2034**](https://alive-important-bream.glitch.me/api/results/season/2034) - Returns an error message "Race with year 2034 not found"
