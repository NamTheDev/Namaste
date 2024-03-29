require('dotenv').config()
const express = require('express');
const { readdirSync, readFileSync } = require('fs');
const { join } = require('path');
const app = express();
const port = process.env.PORT || 4000;
const pages = readdirSync(join(process.cwd(), 'pages'))
app.use(express.static(join(process.cwd(), 'public')))
for (const page of pages) {
    app.get(`/${page.split('.')[0]}`, (req, res) => {
        res.sendFile(join(process.cwd(), 'pages', page))
    })
}
app.get('/*', (req, res) => {
    if (!req.headers.authorization || !pages.includes(`${req.url.replace('/', '')}.html`)) return res.redirect('/main')
})
app.listen(port, console.log(`Running website on port: ${port}.\nLink for preview: http://localhost:${port}`))
module.exports = app