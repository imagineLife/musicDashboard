const app = express();
const PORT = process.env || 3000;

app.get('/api/*', (req,res) => {
  res.json({ok: true})
})

app.get('/jazzCharts', (req,res) => {
  res.json({willbe:"JazzCharts soon!"})
})

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`)
})

module.exports = {app}
