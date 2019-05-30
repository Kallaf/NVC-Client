function getDate(dateTime)
{
  var arr = dateTime.split(" ");
  var day = arr[0];
  arr = day.split("-");
  if(arr[1] == '10')
    return 0;
  return parseInt(arr[2], 10);
}

function update_trips(pickupDateTime,dropOffDatetime,type)
{
  if(type === "new_trip")
  {
    var pick = getDate(pickupDateTime);
    var drop = getDate(dropOffDatetime);
    tripsPerDay.datasets[0].data[pick]++;
    if(pick != drop)
      tripsPerDay.datasets[0].data[drop]++;
  }
}

function update(record)
{
    for(let i in record)
      console.log(i+": "+record[i]);
    update_trips(record.pickupDateTime,record.dropOffDatetime,record.type);
    //setData(tripsPerDay.datasets[0].data);
    setData(vechilesPerDay.datasets[0].data);
    setData(gWithoutDropOffPerDay.datasets[0].data);
    setData(yWithoutDropOffPerDay.datasets[0].data);
    setData(fWithoutDropOffPerDay.datasets[0].data);
    setData(gFromM.datasets[0].data);
    setData(yFromM.datasets[0].data);
    setData(fFromM.datasets[0].data);
    setData(minutesPerTrip.datasets[0].data);
}

$(document).ready(function() {

  const websocket = new WebSocket('ws://localhost:9000/ws');
  websocket.addEventListener('open', (event) => {
    console.log('Connected')
  });
  websocket.addEventListener('message', (event) => {
    var record = JSON.parse(event.data);
    console.log(record);
    for(let i in record)
      record[i] = record[i].split('"').join('');
    update(record);
  });

});