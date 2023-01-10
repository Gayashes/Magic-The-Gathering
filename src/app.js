require('dotenv').config();
require('@babel/register');
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

//импорт вспомогательных ф-й
const dbCheck = require('../db/dbCheck');

// импорт роутов
const mainRoutes = require('./routes/mainRoutes');

 // вызов функции проверки соединения с базоый данных
dbCheck();

app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//роутеры
app.use('/', mainRoutes);

const PORT = process.env.PORT || 3100;
app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message)
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
