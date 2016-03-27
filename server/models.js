// Bootstrap database with some cars.
Meteor.startup(function() {
  let models = {
    "Volvo": ['XC90', 'V90', 'V70'],
    "Tesla": ['Model S', 'Model X', 'Model 3', 'Roadster'],
    "DeLorean": ["DMC-12"],
    "Audi": ["TT"],
    "SAAB": ["9-3", "9-5"]
  };

  Object.keys(models).forEach(brand => {
    models[brand].forEach(model => {
      car = { brand: brand, model: model };
      Models.upsert(car, car);
    });
  });
});

// Publish cars by brand or all of them.
Meteor.publish('models', (brand) => {
  // Simulate network latency to show the loader.
  // Meteor._sleepForMs(2000);
  if (brand) {
    return Models.find({ brand: brand });
  }
  return Models.find();
});
