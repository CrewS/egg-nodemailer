'use strict';

/**
 * egg-nodemailer default config
 * @member Config#nodemailer
 * @property {String} host - some description
 * @property {String} port - some description
 * @property {Object} auth - some description
 */
exports.nodemailer = {
  client: {
    host: 'your email host',
    port: 25,
    auth: {
      user: '',
      pass: '',
    },
  },
  app: true,
  agent: false,
};
