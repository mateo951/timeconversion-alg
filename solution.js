function timeConversion(s) {
  let res = "";
  let hTime = s.substring(0,2);
  let range = s.substring(8, 10);
  if(range === "PM") {
    if(hTime === "12") return parseInt(hTime)+""+s.substr(2).slice(0, -2);
    res = (parseInt(hTime)+12)+""+s.substr(2).slice(0, -2);
  } else {
    if(hTime === "12") return "0"+(parseInt(hTime)-12)+""+s.substr(2).slice(0, -2);
    res = "0"+(parseInt(hTime))+""+s.substr(2).slice(0, -2);
  }
  return res;
}