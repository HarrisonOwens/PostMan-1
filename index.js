var express = require('express');
var app = express();

app.listen(3000)
app.use(express.json())


app.get('/add', (req, res) => {
    array = JSON.parse(req.query.array)
    total = array.reduce((acc, newnum) => acc + newnum)
    //console.log(total)
    res.send(JSON.stringify(total))
})

app.get('/product', (req, res) => {
    array = JSON.parse(req.query.array)
    total = array.reduce((acc, newnum) => acc * newnum)
    //console.log(total)
    res.send(JSON.stringify(total))
})

app.get('/evens', (req, res) => {
    array = JSON.parse(req.query.array)
    newArray = array.filter(current => current % 2 == 0)
    //console.log(total)
    res.send(JSON.stringify(newArray))
})

app.get('/min', (req, res) => {
    array = JSON.parse(req.query.array)
    array.sort((a, b) => a - b)
    res.send(JSON.stringify(array[0]))
})

app.get('/max', (req, res) => {
    array = JSON.parse(req.query.array)
    array.sort((a, b) => b - a)
    res.send(JSON.stringify(array[0]))
})

app.get('/sort', (req, res) => {
    array = JSON.parse(req.query.array)
    ascending = JSON.parse(req.query.ascending)
    if(ascending == false){
        res.send(array.sort((a, b) => b - a))
    }
    else if (ascending == true){
        res.send(array.sort((a, b) => a - b))
    }
})

app.get('/target', (req, res) => {
    array = JSON.parse(req.query.array)
    target = JSON.parse(req.query.target)
    for (var i = 0; i < array.length; i++){
        for (var j = 0; j < array.length; j++){
            if (j != i && array[i] + array[j] == target){
                res.send(true)
            }
        }
    }
    res.send(false)
})