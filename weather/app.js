const express = require('express')
const https = require('https')

const app = express()
const port = 3000

app.use('/public' , express.static('public'))

app.set('views', './views')
app.set('view engine', 'ejs')

let url = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=436797eb50d2a79ecf36624db1e7269f&units=metric&lang=fr`

// https.get(url, (resp) => {
//   let data = '';

//   // A chunk of data has been received.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log(JSON.parse(data).explanation);
//   });

// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });

app.get('/',  function(req, res){
    // console.log(req)
    https.get(url, (resp => {
        console.log(resp.statusCode)
        resp.on('data', (data) => {
                //data += data
                const weatherData = JSON.parse(data)
                const icon = weatherData.weather[0].icon
                const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

                const name = weatherData.name
                const temp = weatherData.main.temp
                const description = weatherData.weather[0].description
                // console.log(weatherData.name+ '\n' + 
                //     weatherData.main.temp + '\n' + 
                //     weatherData.weather[0].description)
                //     res.sendFile(__dirname + '/index.html')
                
                // res.write('<h1>' + weatherData.name + '</h1>')
                // res.write('<h3>' + weatherData.main.temp + '</h3>')
                // res.write('<p>' + weatherData.weather[0].description + '</p>')
                // res.write('<img src="' + iconUrl + '">')

                res.render('index' , {name: name, temp: temp, description: description, icon: iconUrl})
                

      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
    }))

    // res.send('send')
})


//ordre des routes (important)
app.get('/products', (req,res) => {
  res.render('products')
})

app.get('/products/all', (req,res) => {
  res.send('<h1>ALL</h1>')
})

app.get('/products/:slug', (req,res) => {
  const slug = req.params.slug
  res.render('products' , {slug: slug})
})

// Exemple pour passé une slug en url
// app.get('/products/:id/:title', (req,res) => {
//   const id = req.params.id
//   const title = req.params.title
//   res.send('TITLE : ' + title + ' ID : ' + id)
// })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
