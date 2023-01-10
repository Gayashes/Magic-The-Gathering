require('dotenv').config();
require('@babel/register');
const express = require('express');

const app = express();
const morgan = require('morgan');
const path = require('path');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const { PORT, SESSION_SECRET } = process.env;

// Конфиг для сессий
const sessionConfig = {
  name: 'MagicCookie',
  store: new FileStore(),
  secret: SESSION_SECRET ?? 'Секретное слово',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 99999999,
    httpOnly: true,
  },
};
app.use(session(sessionConfig));
app.use((req, res, next) => {
  next();
});
// импорт вспомогательных ф-й
const dbCheck = require('../db/dbCheck');

// импорт роутов
const mainRoutes = require('./routes/mainRoutes');
const registrationRoutes = require('./routes/registrationRoute');
const loginRoutes = require('./routes/loginRoutes');
const logoutRoutes = require('./routes/logoutRoutes');
// вызов функции проверки соединения с базоый данных
dbCheck();

app.use(express.static(path.resolve('src/public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// роутеры
app.use('/', mainRoutes);
app.use('/registration', registrationRoutes);
app.use('/login', loginRoutes);
app.use('/logout', logoutRoutes)

app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message);
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
