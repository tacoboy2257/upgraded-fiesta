
const express = require('express')

const app = express();

app.use(express.static('docs'));

app.get('/enemy', (req, res) => {
    res.send('An alligator runs away!');
})
 app.get('/ally', (req, res) => {
     res.send('An alligator approaches!');
 });

app.listen(3000, () => console.log('NodeJS Server Listening on port 3000!'));
