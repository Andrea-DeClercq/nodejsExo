const https = require('https');
const colors = require('colors')
const argv = require('yargs').argv

const fsyms = argv.cryptos  || 'BTC,ETH,XRP,LTC'
const tsyms = argv.currencies ||'USD,EUR,GBP,NGN'

const options = {
    hostname: 'min-api.cryptocompare.com',
    path: `/data/pricemulti?fsyms=${fsyms}&tsyms=${tsyms}`
}

https.get(options, (response) => {
    let body = '';
    response.setEncoding('utf8');
    response.on('data', (data) => {
        body += data
    })
    response.on('end', () => {
        try {
            const output = JSON.parse(body)

            if (output.message) {
                return console.log('error');
            }

            const symbols = fsyms.split(',')
            symbols.map((elt) => {
                console.log(elt.magenta)
                console.log(output[elt])
                console.log('-------------------------------------------------------')
            })
            // console.log(output['BTC'])
        } catch (error) {
            console.log(error.message);
        }
    }).on('error', (err) =>{
        console.log(err.message)
    })
})


