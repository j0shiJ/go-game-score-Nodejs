# Go Game Score Calculation API

This project implements a Web API for calculating the maximum number of draws that could have occurred in a series of Go games played by three friends, given their points. It validates if the points are consistent with a valid set of games and returns the result in JSON format.

## Overview

Go is an abstract strategy board game for two players in which the aim is to capture more territory than the opponent by fencing off empty space. In this project, we calculate the maximum number of draws that could have occurred in a series of Go games based on the points of three players.

## Requirements

- Node.js
- Express
- Swagger for API documentation
- Jest for unit testing

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/j0shiJ/go-game-score-Nodejs.git



## API Endpoints

1. Calculate Maximum Draws
URL: /:p1/:p2/:p3
Method: GET
URL Parameters:
p1 (integer): Points of player 1
p2 (integer): Points of player 2
p3 (integer): Points of player 3

2. Swgger doc
URL: /api-doc


