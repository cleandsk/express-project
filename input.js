const express = require("express")

const app = express()

const port = 3001;

app.set('view engine', 'ejs')
app.get('/', (req, res) =>{
    res.render('input', {input: "Home Page", message: 'welcome to EJS!'})
})
console.log("Views directory:", app.get('views'));
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})