const express = require('express')
const app = express()
const favicon = require('serve-favicon')
const path = require('path')

app.set('port',process.env.PORT || 3000)


app.use(favicon(path.join(__dirname,'src', 'public', 'rayo.ico')))
app.use(express.static(path.resolve(__dirname,'src','public')))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(require('./src/routes/index'))

app.listen(app.get('port'),()=>{
  console.log(`app running on port ${app.get('port')}...`);
})
