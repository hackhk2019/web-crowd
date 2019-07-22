const express = require('express')
const app = express()

app.use((req, res, next)=> {
    res.set('X-Frame-Options', 'ALLOWALL')
    return next()
})
app.use(express.static('./'))

const port = process.env.PORT || 3000

app.listen(port, function () {
  console.log(`Example app listening on port ${port}! \n http://localhost:${port}`)
})