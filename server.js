const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;

console.log('port')
console.log(PORT)
app.get('/api/*', (req,res) => {
  res.json({ok: true})
})

app.get('/jazzCharts', (req,res) => {
  res.json({willbe:"chartsSoon!"})
})

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`)
})

module.exports = {app}
