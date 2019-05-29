$(document).ready(function() {

  const ws = new WebSocket('ws://localhost:9000/ws');
  ws.addEventListener('open', (event) => {
    console.log('Connected')
  });
  ws.addEventListener('message', (event) => {
    console.log("new message");
  });


  var numberOfTrips = document.getElementById("numberOfTrips").getContext("2d");
  var numberOfVechiles = document.getElementById("numberOfVechiles").getContext("2d");
  var gWithoutDropOff = document.getElementById("gWithoutDropOff").getContext("2d");
  var yWithoutDropOff = document.getElementById("yWithoutDropOff").getContext("2d");
  var fWithoutDropOff = document.getElementById("fWithoutDropOff").getContext("2d");
  var gFrom = document.getElementById("gFrom").getContext("2d");
  var yFrom = document.getElementById("yFrom").getContext("2d");
  var fFrom = document.getElementById("fFrom").getContext("2d");
  var tripMinutes = document.getElementById("tripMinutes").getContext("2d");
  
  var options = {
    animation: false,
    //Boolean - If we want to override with a hard coded scale
    scaleOverride: true,
    //** Required if scaleOverride is true **
    //Number - The number of steps in a hard coded scale
    scaleSteps: 10,
    //Number - The value jump in the hard coded scale
    scaleStepWidth: 10,
    //Number - The scale starting value
    scaleStartValue: 0
  };

  var numberOfTripsChart = new Chart(numberOfTrips , {
      type: "bar",
      data: tripsPerDay,
      options: options 
  });

  var numberOfVechilesChart = new Chart(numberOfVechiles , {
      type: "bar",
      data: vechilesPerDay,
      options: options 
  });

 var gWithoutDropOffChart = new Chart(gWithoutDropOff , {
      type: "line",
      data: gWithoutDropOffPerDay,
      options: options 
  });

 var yWithoutDropOffChart = new Chart(yWithoutDropOff , {
      type: "line",
      data: yWithoutDropOffPerDay,
      options: options 
  });

  var fWithoutDropOffChart = new Chart(fWithoutDropOff , {
      type: "line",
      data: fWithoutDropOffPerDay,
      options: options 
  });

  var gFromChart = new Chart(gFrom , {
      type: "line",
      data: gFromM,
      options: options 
  });

 var yFromChart = new Chart(yFrom , {
      type: "line",
      data: yFromM,
      options: options 
  });

  var fFromChart = new Chart(fFrom , {
      type: "line",
      data: fFromM,
      options: options 
  });

  var tripMinutesChart = new Chart(tripMinutes , {
      type: "bar",
      data: minutesPerTrip,
      options: options 
  });


  setInterval(function() {
    setData(data.datasets[0].data);
    setData(tripsPerDay.datasets[0].data);
    setData(vechilesPerDay.datasets[0].data);
    setData(gWithoutDropOffPerDay.datasets[0].data);
    setData(yWithoutDropOffPerDay.datasets[0].data);
    setData(fWithoutDropOffPerDay.datasets[0].data);
    setData(gFromM.datasets[0].data);
    setData(yFromM.datasets[0].data);
    setData(fFromM.datasets[0].data);
    setData(minutesPerTrip.datasets[0].data);
    //setLabels(data.labels);

      var numberOfTripsChart = new Chart(numberOfTrips , {
          type: "bar",
          data: tripsPerDay,
          options: options 
      });

      var numberOfVechilesChart = new Chart(numberOfVechiles , {
          type: "bar",
          data: vechilesPerDay,
          options: options 
      });

      var gWithoutDropOffChart = new Chart(gWithoutDropOff , {
          type: "line",
          data: gWithoutDropOffPerDay,
          options: options 
      });

     var yWithoutDropOffChart = new Chart(yWithoutDropOff , {
          type: "line",
          data: yWithoutDropOffPerDay,
          options: options 
      });

      var fWithoutDropOffChart = new Chart(fWithoutDropOff , {
          type: "line",
          data: fWithoutDropOffPerDay,
          options: options 
      });

      var gFromChart = new Chart(gFrom , {
          type: "line",
          data: gFromM,
          options: options 
      });

     var yFromChart = new Chart(yFrom , {
          type: "line",
          data: yFromM,
          options: options 
      });

      var fFromChart = new Chart(fFrom , {
          type: "line",
          data: fFromM,
          options: options 
      });

      var tripMinutesChart = new Chart(tripMinutes , {
          type: "bar",
          data: minutesPerTrip,
          options: options 
      });



  }, 800);

});