const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Meow!');
})

const port = process.env.PORT || 8888; // process.env.PORT is for heroku
app.listen(port, () => console.log(`Listening on port ${port}...`))

