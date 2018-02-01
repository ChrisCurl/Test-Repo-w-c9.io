let express = require('express');

let app = express();
app.set('view engine', 'ejs');

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
})

app.get('/', function(req, res){
    res.render('home');
});

app.get('/about', function(req, res){
    res.render('about');
})