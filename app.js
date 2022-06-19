// Combination of Dates
document.write("<h1>" + "<i>" + "Dates Different Formats " + "</i>" + "</h1>")
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yy = today.getFullYear();
if (dd < 10){
    dd = "0" + dd;
}
if (mm < 10){
    mm = "0" + mm;
}
today = dd + "-" + mm + "-" + yy;
document.write(today, "<br>");

today = dd + "/" + mm + "/" + yy;
document.write(today, "<br>");

today = mm + "-" + dd + "-" + yy;
document.write(today, "<br>");

today = mm + "/" + dd + "/" + yy;
document.write(today, "<br>");

today = yy + "-" + mm + "-" + dd;
document.write(today, "<br>");

today = yy + "/" + mm + "/" + dd;
document.write(today, "<br>");

today = mm + "-" + yy + "-" + dd;
document.write(today, "<br>");

today = mm + "/" + yy + "/" + dd;
document.write(today, "<br>");

today = yy + "-" + dd + "-" + mm;
document.write(today, "<br>");

today = yy + "/" + dd + "/" + mm;
document.write(today, "<br>");

today = dd + "-" + yy + "-" + mm;
document.write(today, "<br>");

today = dd + "/" + yy + "/" + mm;
document.write(today, "<br>");