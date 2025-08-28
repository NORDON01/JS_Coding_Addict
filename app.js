const log = console.log;

const car = {
  make: "Peugeot",
  model: 604,
  year: 2018,
  colors: ["blue", "silver"],
  hybrid: true,
  drive: function () {
    log("This car is runing fast");
  },
  stop: function () {
    log("The car is parked");
  },
};

log(car.make);
log(car.colors[0]);
car.drive();
car.stop();
