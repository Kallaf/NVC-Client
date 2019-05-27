$(document).ready(function() {
  var barChart = document.getElementById("barChart").getContext("2d");
  var lineChart = document.getElementById("lineChart").getContext("2d");
  var barChart1 = document.getElementById("barChart1").getContext("2d");
  var lineChart1 = document.getElementById("lineChart1").getContext("2d");
  var barChart2 = document.getElementById("barChart2").getContext("2d");
  
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

  var myBarChart = new Chart(barChart , {
      type: "bar",
      data: data,
      options: options 
  });

 var myLineChart = new Chart(lineChart , {
      type: "line",
      data: data,
      options: options 
  });


 var myBarChart1 = new Chart(barChart1 , {
      type: "bar",
      data: data,
      options: options 
  });

 var myLineChart1 = new Chart(lineChart1 , {
      type: "line",
      data: data,
      options: options 
  });

  var myBarChart2 = new Chart(barChart2 , {
      type: "bar",
      data: data,
      options: options 
  });


  setInterval(function() {
    setData(data.datasets[0].data);
    //setLabels(data.labels);

      var myBarChart = new Chart(barChart , {
        type: "bar",
        data: data,
        options: options 
    });

      var myLineChart = new Chart(lineChart , {
      type: "line",
      data: data,
      options: options 
  });

      var myBarChart1 = new Chart(barChart1 , {
        type: "bar",
        data: data,
        options: options 
    });

   var myLineChart1 = new Chart(lineChart1 , {
        type: "line",
        data: data,
        options: options 
    });

    var myBarChart2 = new Chart(barChart2 , {
        type: "bar",
        data: data,
        options: options 
    });



  }, 800);

});