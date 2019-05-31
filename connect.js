function getDate(dateTime)
{
  var arr = dateTime.split(" ");
  var day = arr[0];
  arr = day.split("-");
  if(arr[1] == '10')
    return 0;
  return parseInt(arr[2], 10);
}

function diff(pickupDateTime,dropOffDatetime)
{
  var arr = pickupDateTime.split(" ");

  var date = arr[0];
  var tt = date.split("-");
  var sDay = parseInt(tt[2],10);
  if(tt[1] == '10')
    sDay = 0;

  var startTime = arr[1];
  arr = dropOffDatetime.split(" ");

  var date = arr[0];
  var tt = date.split("-");
  var eDay = parseInt(tt[2],10);
  if(tt[1] == '10')
    eDay = 0;


  var endTime = arr[1];
  arr = startTime.split(":");
  var sh = parseInt(arr[0], 10),sm = parseInt(arr[1], 10);

  arr = endTime.split(":");
  var eh = parseInt(arr[0], 10),em = parseInt(arr[1], 10);

  var startMin = sDay * 24 * 60 + sh * 60 + sm;
  var endMin = eDay * 24 * 60 + eh * 60 + em;

  return endMin - startMin;

}

function update_trips(pickupDateTime,type,vendorId,taxiType,pickupLocationId,dropOffLocationId)
{
  if(type === "new_trip")
  {
    var pick = getDate(pickupDateTime);
    tripsPerDay.datasets[0].data[pick]++;
    if(!vechiles[pick].includes(vendorId))
      vechiles[pick].push(vendorId);
    vechilesPerDay.datasets[0].data[pick] = vechiles[pick].length;
    if(dropOffLocationId == "")
    {
      if(taxiType == 'green')
        gWithoutDropOffPerDay.datasets[0].data[pick]++;
      else if(taxiType == 'yellow')
        yWithoutDropOffPerDay.datasets[0].data[pick]++;
      else
        fWithoutDropOffPerDay.datasets[0].data[pick]++; 
    }
    
    if(pickupLocationId == '149')
    {
      if(taxiType == 'green')
        gFromM.datasets[0].data[pick]++;
      else if(taxiType == 'yellow')
          yFromM.datasets[0].data[pick]++;
      else
        fFromM.datasets[0].data[pick]++;
        
    }

  }
}

function update(record)
{
    for(let i in record)
      console.log(i+": "+record[i]);
    update_trips(record.pickupDateTime,record.type,record.vendorId,record.taxiType,record.pickupLocationId,record.dropOffLocationId);

    if(record.type === "new_trip")
  {
    
      var time = diff(record.pickupDateTime,record.dropOffDatetime);
      if(record.taxiType == 'green')
      {
        sum_minutes[0] += time;
        g_no_of_trips++;
        minutesPerTrip.datasets[0].data[0] = sum_minutes[0]/g_no_of_trips;
      }
      else if(record.taxiType == 'yellow')
      {
        sum_minutes[1] += time;
        y_no_of_trips++;
        minutesPerTrip.datasets[0].data[1] = sum_minutes[1]/y_no_of_trips;
      } 
      else
      {
        sum_minutes[2] += time;
        f_no_of_trips++;
        minutesPerTrip.datasets[0].data[2] = sum_minutes[2]/f_no_of_trips;
      }  
    

  }
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