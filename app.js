import express from 'express';
import hbs from 'hbs';
import dotenv from 'dotenv';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const app = express()
dotenv.config();

const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Julián Kailich',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Julián Kailich',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Julián Kailich',
        titulo: 'Curso de Node'
    });
})

app.listen(port)