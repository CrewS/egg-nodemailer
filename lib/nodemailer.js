'use strict';

const assert = require('assert');
const nodemailer = require('nodemailer');

function createNodemailer(config, app) {
  assert(
    config.host && config.auth && config.auth.user && config.auth.pass,
    "[egg-nodemailer] Must set `host` and `auth.user` and `auth.pass` in nodemailer's config"
  );
  app.beforeStart(function* () {
    app.coreLogger.info('[egg-nodemailer] status OK');
  });
  const transporter = nodemailer.createTransport(config);
  return transporter;
}

module.exports = app => {
  app.addSingleton('nodemailer', createNodemailer);
};
