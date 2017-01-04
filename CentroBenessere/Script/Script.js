function iframeLoaded() {
      var iFrameID = document.getElementById('fram');
	  iFrameID.height="10px";
      iFrameID.height = (iFrameID.contentWindow.document.body.scrollHeight+50) + "px";
  }
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("divCont").style.width = "100%";
	document.getElementById("spe03").style.filter ="blur(10px)";
	document.getElementById("spe02").style.filter ="blur(10px)";
	for(a = 1; a < 36; a++){document.getElementById("img"+(a<10?"0"+a:a)).style.filter ="blur(10px)";}
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("divCont").style.width = "0%";
	document.getElementById("spe03").style.filter ="none";
	document.getElementById("spe02").style.filter ="none";
	for(a = 1; a < 36; a++){document.getElementById("img"+(a<10?"0"+a:a)).style.filter ="none";}
}
function changeSrc(x,y) {
    document.getElementById("imgcont").src=x;
	document.getElementById("divCont").style.top=document.getElementById(y).getBoundingClientRect().top+"px";
}
function myMap() {
  var myCenter = new google.maps.LatLng(40.888968,14.443942);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 15};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter,animation: google.maps.Animation.BOUNCE});
  marker.setMap(map);
}
function prenotationMail(){
	var mail="mailto:spamajorana@gmail.com?subject=Prenotazione&body=Vorrei prenotare una camera dal "+document.getElementById("st2").value+" al "+document.getElementById("st3").value+" a nome "+document.getElementById("st1").value;
	while(mail.indexOf(" ")!=-1){
	mail=mail.replace(" ","%20");}
	document.getElementById("bt1").href=mail;
	console.log(document.getElementById("bt1").href);
}