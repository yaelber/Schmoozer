const models = require('./models'); // models/index.js
const fixtures = require('./fixtures'); // fixtures/index.js

// rule: const everywhere you can!
// const ROOT_URL = 'foo/';

// force: true will drop the table if it already exists
for (const model in models) {
  models[model].sync({ force: true }).then(function() {
    fixtures[model].forEach(function(fixture) {
      models[model].create(fixture);
    });
  });
}

// Decoupling is good!

