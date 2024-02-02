require('@babel/register');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const ssr = require('./middleware/render');
const indexRouter = require('./routes/index.route');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());



app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(ssr);


app.use('/', indexRouter);
app.listen(3000, () => {
  console.log('сервак запущен');
});
