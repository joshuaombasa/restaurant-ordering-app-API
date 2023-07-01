const express = require("express")
const cors = require("cors")
const app = express()

//require cors for all routes
app.use(cors())

//menu array
 const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: 0,
        price: 14,
        emoji: "🍕"
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        emoji: "🍔",
        id: 1
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        emoji: "🍺",
        id: 2
    },
    {
        name: "Java Latte",
        ingredients: ["Coffee,Milk,Vanilla,Espresso"],
        price: 17,
        emoji: "☕️",
        id: 3
    }
]

// Define a route to get the list of menu
app.get('/menu', (req, res) => {
    res.json(menuArray);
  });

// Start the server
const port = 3000; // You can change the port if needed
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});