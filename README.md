# Pokédex Project

## Description

This project is a simple Pokédex application that fetches and displays information about the first 151 Pokémon from the PokéAPI.  Users can search for Pokémon by name.

## Technologies Used

*   **HTML:**  For structuring the page layout.
*   **CSS:**  For styling the Pokédex, including the dark theme, card design, and responsive elements.
*   **JavaScript:** For fetching data from the PokéAPI, handling search functionality, and dynamically creating the Pokémon cards.

## Features

*   **Displays 151 Pokémon:** Fetches and displays the first generation of Pokémon.
*   **Search Functionality:** Allows users to search for Pokémon by name.
*   **Dynamic Pokémon Cards:**  Each Pokémon is displayed in a card with its image, name, type, and basic stats.
*   **Stats Display:** Shows the base stats (HP, Attack, Defense) for each Pokémon.
*   **Responsive Design:** The layout adapts to different screen sizes.

## Code Overview

*   **`index.html`:**  The main HTML file that sets up the basic structure of the page, including the search input and the container for the Pokémon cards.  (Unfortunately, I couldn't read the content of this file).
*   **`index.css`:**  Contains the CSS styles for the Pokédex, including the dark background, card styling, and responsive layout.  Key styles include:
    *   Dark theme with a black background.
    *   Card design with rounded corners, shadows, and borders.
    *   Styling for the Pokémon image, name, type, and stats.
    *   Responsive layout using `flex` and `flex-wrap`.
*   **`index.js`:**  Contains the JavaScript logic for:
    *   Fetching data from the PokéAPI (`https://pokeapi.co/api/v2/pokemon`).
    *   Creating and displaying Pokémon cards dynamically.
    *   Implementing the search functionality.
    *   Capitalizing the first letter of the Pokémon names.
    *   Extracting and displaying Pokémon types and stats.

## How to Use

1.  Clone this repository.
2.  Open `index.html` in your web browser.
3.  Use the search bar to find specific Pokémon by name.



## Screenshot

![Pokédex](https://pplx-res.cloudinary.com/image/upload/v1741001045/user_uploads/UPTXUxumshjqkVx/poke.jpg)
