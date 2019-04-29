'use strict';

module.exports = app => {
  if (app.config.nodemailer.app) require('./lib/nodemailer')(app);
};
