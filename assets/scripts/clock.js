function whatTimeIs(){
  const date = new Date();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  document.getElementById('clock').innerHTML = `${fixTime(hour)}:${fixTime(minute)}:${fixTime(second)}`;
}

function fixTime(time){
    if(time < 10){
        time = '0'+time;
    }
    return time;
}

whatTimeIs();
setInterval(whatTimeIs, 1000);
