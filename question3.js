const express = require('express');
const app = express();

// Define the /test route
app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Alexes Z. Cena' });
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
