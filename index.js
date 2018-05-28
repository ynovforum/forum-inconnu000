const express = require('express');
const app = express();

app.use((request, response, next) => {
    response.removeHeader("X-Powered-By");
next();
});
​
app.use((request, response) => {
    response.send('Hello World');
});

app.listen(3000);