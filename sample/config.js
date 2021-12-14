const path = require('path');
const output = path.join(__dirname, "./models");
const options = { directory: output, caseFile: 'c', caseModel: 'p', caseProp: 'l', lang: 'es6', useDefine: false, singularize: true, spaces: true, indentation: 2 };

// Edit the configuration below for your database dialect

// mysql
const mysql = {
  dbname: 'antextil',
  user: 'root',
  pass: 'kodejifr',
  options: { dialect: 'mysql' },
  autoOptions: { dialect: 'mysql', ...options }
};

// Change to export appropriate config for your database
module.exports = mysql;
