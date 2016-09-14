const models = require('./models'); // models/index.js
const fixtures = require('./fixtures'); // fixtures/index.js

models.User.sync({ force: true }).then(function() {
  fixtures.User.forEach(function(fixture) {
    models.User.create(fixture);
  });
  models.Profile.sync({ force: true }).then(function() {
    // fixtures[model].forEach(function(fixture) {
    //   models[model].create(fixture);
    // });
  });

  models.Post.sync({ force: true }).then(function() {
    fixtures.Post.forEach(function(fixture) {
      models.Post.create(fixture);
    });
  });
});

// Decoupling is good!

