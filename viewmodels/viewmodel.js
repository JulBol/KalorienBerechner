
function AppViewModel() {
    var self = this;

    self.sports = ko.observableArray([
      new Sport("Badminton (Competitive)",      8.54),
      new Sport("Badminton (Casual / Social)",  13.33 ),
      new Sport("Basketball (Competitive)",     7.50 ),
      new Sport("Basketball (Casual / Social)", 10.00 ),
      new Sport("Bicycling (20 km/h)",          7.50 ),
      new Sport("Cooking",                      22.79 ),
      new Sport("Field Hockey",                 7.50 ),
      new Sport("Gaming (Computer)",            57.14 ),
      new Sport("Gaming (Wii Fit) Light Effort",24.89 ),
      new Sport("Jogging/Running (10 km/h)",    6.00 ),
      new Sport("Rowing (Moderate Effort)",     8.57 ),
      new Sport("Sleeping",                     60.12 ),
      new Sport("Soccer (Competitive)",         6.00 ),
      new Sport("Soccer (Casual / Social)",     8.57 ),
      new Sport("Swimming (Moderate)",          14.00 ),
      new Sport("Volleyball (Competitive)",     7.50 ),
      new Sport("Walking (4 km/h)",             20.00 ),
      new Sport("Watching TV",                  73.95 )
    ]);
}

var Sport = function(name, value) {
  this.sportname = name;
  this.value = value;
}

var vm = new AppViewModel();

$(document).ready(function() {
  ko.applyBindings(vm);
});
