function get_data(){
    var d = new Date();
    var n = d.getTime();
    var m = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    var w = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    document.getElementById("date").innerHTML = d.toLocaleTimeString()
    document.getElementById("month").innerHTML = m[d.getMonth()];
    document.getElementById("month2").innerHTML = d.getMonth()+1;
    document.getElementById("day").innerHTML = d.getDay() +1;
    document.getElementById("day2").innerHTML = w[d.getDay()];
    document.getElementById("day3").innerHTML = d.getDate();
    document.getElementById("m").innerHTML = d.getMinutes();
    document.getElementById("s").innerHTML = d.getSeconds();
    document.getElementById("mil").innerHTML = d.getMilliseconds();
  }