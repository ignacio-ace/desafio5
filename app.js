// const express = require('express')

import express from 'express'
import { router } from './src/routes/index.js'
import { engine } from 'express-handlebars'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('hbs', engine({ extname: 'hbs' }))
app.set('view engine', 'hbs')
app.set('views', './src/views')
app.use(express.static('public'))

app.use('/', router)

app.listen(3000, () => console.log('Servidor funcionando en el puerto 3000'))
