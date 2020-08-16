// Initializes the `mailer` service on path `/mailer`
const hooks = require('./mailer.hooks');

const Mailer = require('feathers-mailer');
const smtpTransport = require('nodemailer-smtp-transport');

module.exports = function (app) {

  // Initialize our service with any options it requires
  app.use('/mailer', Mailer(smtpTransport({
    host: 'smtp.sendgrid.net',
    secure: true,
    auth: {
      user: "apikey",
      pass: "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"
    }
  })));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('mailer');

  service.hooks(hooks);
};
