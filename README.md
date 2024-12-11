# COMP3612-Assignment3

COMP 3612 - API Generation Project

Overview
This repository holds the code for Assignment #3 for COMP3612 at Mount Royal University. The aim of this project is to create multiple APIs based on JSON data provided by the instructor. It includes multiple JSON files with data, data providers to acquire the JSON data, as well as handlers to produce APIs dependent on specific URL paths. 

Features

Constructs APIs for a variety of URLs, working with dynamic routes to provide specific information based on endpoints. 

Technologies Used

Node.js, Javascript

Main Project Files

server.js - 
data folder - contains all JSON data provided by instructor in the form of "data.json" where data = [circuits, constructors, drivers, races, results].
scripts folder - contains all handler and provider modules in the form of "data-handler.js" or "data-provider.js" where data = data = [circuits, constructors, drivers, races, results].

API Routes

/api/circuits - Returns all circuits
/api/circuits/id - Returns single circuit specified by the passed id value
/api/constructors - Returns all constructors
/api/constructors/ref - Returns single constructor specified by the passed ref value
/api/constructorResults/ref/year - Returns the race results for a specified constructor ref value and season
/api/drivers - Returns all drivers
/api/drivers/ref - Returns single driver specified by the passed ref value
/api/driverResults/ref/year - Returns the race results for a specified driver ref value and season
/api/races/season/year - Returns all the races for the specified season
/api/races/id/id - Returns just the specified race using id value
/api/results/race/id - Returns all the results for the specified race using id value
/api/results/season/year - Returns all the results for all the races in the season

Testing

/api/circuits - 
/api/circuits/1
/api/constructors
/api/constructors/mclaren
/api/coNSTruCTors/mclaren
/api/constructors/javascript
/api/constructorResults/mclaren/2023
/api/constructorResults/MERCEDES/2020
/api/constructorResults/mclaren/2040
/api/constructorResults/comp3612/2023
/api/drivers
/api/drivers/hamilton
/api/drivers/HAMilton
/api/drivers/randy
/api/driverResults/piastre/2023
/api/driverResults/piastre/2002
/api/races/season/2023
/api/races/seasoning/2023
/api/races/season/2032
/api/results/race/1100
/api/results/race/1756348576
/api/results/season/2023
/api/results/season/2034