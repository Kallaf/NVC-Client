var days = []
var trips_per_day = []
var vechiles = new Array(33);
var vechiles_per_day = []
var green_without_drop_off = []
var yellow_without_drop_off = []
var fhv_without_drop_off = []
var green_from = []
var yellow_from = []
var fhv_from = []
var colors = ['green','yellow','fhv']
var minutes_per_trip = [0,0,0]
var sum_minutes = [0,0,0]

var no_of_records = 0;
var g_no_of_trips = 0;
var y_no_of_trips = 0;
var f_no_of_trips = 0;

for(let i=0;i<=31;i++)
{
  days.push(i);
  trips_per_day.push(0);
  vechiles[i] = [];
  vechiles_per_day.push(0);
  green_without_drop_off.push(0);
  yellow_without_drop_off.push(0);
  fhv_without_drop_off.push(0);

  green_from.push(0);
  yellow_from.push(0);
  fhv_from.push(0);
}


var tripsPerDay = {
    labels: days,
    datasets: [{
      label: "Number of Trips per day",
      backgroundColor:'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      data: trips_per_day
    }]
};

var vechilesPerDay = {
    labels: days,
    datasets: [{
      label: "Average number of vechiles per day",
      backgroundColor:'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      data: vechiles_per_day
    }]
};

var gWithoutDropOffPerDay = {
    labels: days,
    datasets: [{
      label: "Green",
      backgroundColor:'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      data: green_without_drop_off
    }
    ]
};

var yWithoutDropOffPerDay = {
    labels: days,
    datasets: [{
      label: "Yellow",
      backgroundColor:'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      data: yellow_without_drop_off
    }
    ]
};


var fWithoutDropOffPerDay = {
    labels: days,
    datasets: [{
      label: "fhv",
      backgroundColor:'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgba(255, 159, 64, 1)',
      data: fhv_without_drop_off
    }
    ]
};

var gFromM = {
    labels: days,
    datasets: [{
      label: "Green",
      backgroundColor:'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      data: green_from
    }
    ]
};

var yFromM = {
    labels: days,
    datasets: [{
      label: "Yellow",
      backgroundColor:'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      data: yellow_from
    }
    ]
};


var fFromM = {
    labels: days,
    datasets: [{
      label: "fhv",
      backgroundColor:'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgba(255, 159, 64, 1)',
      data: fhv_from
    }
    ]
};



var minutesPerTrip = {
    labels: colors,
    datasets: [{
      label: "Minutes per trip",
      backgroundColor:['rgba(75, 192, 192, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(255, 159, 64, 0.2)'],
      borderColor: ['rgba(75, 192, 192, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(255, 159, 64, 1)'],
      data: minutes_per_trip
    }]
  };