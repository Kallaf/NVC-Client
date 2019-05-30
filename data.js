var days = []
var trips_per_day = []
var vechiles_per_day = []
var green_without_drop_off = []
var yellow_without_drop_off = []
var fhv_without_drop_off = []
var green_from = []
var yellow_from = []
var fhv_from = []
var colors = ['green','yellow','fhv']
var minutes_per_trip = [30,50,20]
var data = []

for(let i=0;i<=31;i++)
{
  days.push(i);
  trips_per_day.push(0);
  vechiles_per_day.push(Math.floor(Math.random() * 100) + 1);
  green_without_drop_off.push(Math.floor(Math.random() * 100) + 1);
  yellow_without_drop_off.push(Math.floor(Math.random() * 100) + 1);
  fhv_without_drop_off.push(Math.floor(Math.random() * 100) + 1);

  green_from.push(Math.floor(Math.random() * 100) + 1);
  yellow_from.push(Math.floor(Math.random() * 100) + 1);
  fhv_from.push(Math.floor(Math.random() * 100) + 1);
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

function setData(data) {
  for(let i=0;i<=31;i++)
    data[i] = Math.floor(Math.random() * 100) + 1;
}