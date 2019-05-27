var days = []
var trips_per_day = []

for(let i=1;i<31;i++)
{
  days.push(i);
  trips_per_day.push(Math.floor(Math.random() * 100) + 1);
}


var data = {
    labels: days,
    datasets: [{
      label: "Number of Trips per day",
      backgroundColor:'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      data: trips_per_day
    }]
  };


function setData(data) {
  for(let i=0;i<30;i++)
    data[i] = Math.floor(Math.random() * 100) + 1;
}