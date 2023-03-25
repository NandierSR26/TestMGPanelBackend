const express = require('express')
require('dotenv').config({path: '.env'})

const app = express()
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server id running on port ${port}`);
})