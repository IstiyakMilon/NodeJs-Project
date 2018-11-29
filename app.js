const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes); // admin is used for filtering paths
app.use(shopRoutes);

// Adding 404 error page
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found!</h1>');
});

app.listen(3000);
