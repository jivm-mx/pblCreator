// Import libraries
const fs = require('fs');
const csv = require('csv-parser');
const axios = require ('axios');
const nodemailer = require('nodemailer');
require ('dotenv').config()

// Load .env config
const ADYEN_API_URL = process.env.ADYEN_API_URL
const ADYEN_API_KEY = process.env.ADYEN_API_KEY;
const ADYEN_MERCHANT_ACCOUNT = process.env.ADYEN_MERCHANT_ACCOUNT;
// create payment link

async function createPaymentLink(customerData){
    const paymentRequest = {
        reference: `MATCH_DAY_2025-${customerData.shopperReference}-${Date.now()}`,
        amount: {
            value: 20000,
            currency: 'MXN',
        },
        countryCode: 'MX',
        shopperReference: customerData.shopperReference,
        shopperEmail: customerData.shopperEmail,
        merchantAccount: ADYEN_MERCHANT_ACCOUNT,
        //themeId: ?,
        reusable: true
    };

    const config = {
        headers: {
            'x-api-key': ADYEN_API_KEY,
            'Content-Type':'application/json',
        },
    };

    try{
        console.log(`Generando link para ${customerData.shopperEmail}...`)
        const response = await axios.post(ADYEN_API_URL, paymentRequest, config);

        console.log(`Respuesta es ${response.data.url}`)
    } catch (error){
        console.error (`Error: ${error}`)
    }    
}

function processCSV(){
    fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (row) => {
      createPaymentLink(row);
    })
    .on('end', () => {
      console.log('\nProcesamiento del archivo CSV finalizado.');
    });
}

// Iniciar el proceso
processCSV();