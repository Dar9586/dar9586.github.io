function mouseEnter(){
	document.getElementById("menu").style.transform="translate(30%)";
	document.getElementById("menu").style.zIndex="1000";
	document.getElementById("menDiv").visibility="hidden";
}
function mouseLeave(){
	document.getElementById("menu").style.transform="translate(10%)";
	document.getElementById("menu").style.zIndex="-1000";
	document.getElementById("menDiv").visibility="visible";
}
function mouseEnterFinal(){
	document.getElementById("menu").style.transform="translate(100%)";
	document.getElementById("menu").style.zIndex="1000";
	document.getElementById("menDiv").visibility="hidden";
}
function singleEvent(title,date,imgName,comment){
	var fina="";
	fina+="<div name='mdvev' style='vertical-align:middle' class='eventDiv'>";
	fina+="<div class='eventDate'><span class='eventLeft'><h2>"+title+"</h2></span>";
	fina+="<span  class='eventRight'><h2>"+date+"</h2></span></div>";
	fina+="<img    name='imgev'  class='eventImg' src='../Risorse/Immagini/"+imgName+"'/>";
	fina+="<div    name='divev'  class='eventSpan' readonly>"+comment+"</div>";
	fina+="</div>"
	document.getElementById("mainDiv").innerHTML+=fina;
}
function loadEvent(){
	singleEvent("Torneo di Scacchi Senior","10/01/2017","Eventi/Scacchi.jpg","Un torneo di scacchi che verrà disputato il 10/01/2017 alle ore 17:00. Il vincitore avrà il titolo di socio onorario. Sono ammessi solo persone con più di 55 anni.");
	singleEvent("Torneo di Dama Junior"   ,"13/01/2017","Eventi/Dama.jpg"   ,"Un torneo di scacchi che verrà disputato il 13/01/2017 alle ore 16:30. Il vincitore avrà il titolo di socio onorario. Sono ammessi solo persone con meno di 18 anni.");
	singleEvent("Incontro con Scrittore"  ,"05/02/2017","Eventi/Lettura.jpg","Il giorno 05/02/2017 lo scrittore Tommaso Avagliano verrà al nostro caffè per discutere circa il suo ultimo libro.");
	singleEvent("Mostra Fotografica"      ,"18/02/2017","Eventi/Mostra.jpg" ,"Il giorno 18/02/2017 si terrà una visita guidata dalle ore 15:00 presso la mostra fotografica di Napoli.");
}
function loadStaff(){
	singleEvent("Direttore Generale","Pietro Tummoli"  ,"Staff/Pietro.jpg","Pietro Tummoli è il direttore generale del caffè Letterario Majorana dalla sua apertura. Ha contribuito ad amplificare la cultura nella zona di Napoli.");
	singleEvent("Organizzatore"     ,"Nicola Silvestri","Staff/Nicola.jpg","Nicola Silvestri è il nostro organizzarore di eventi, visite guidate e mostre. Grazie al suo contributo gli iscritti a questo caffè hanno potuto sperimentare esperienze nuove.");
	singleEvent("Capo Barman"       ,"Giovanni Audiro" ,"Staff/Barman.jpg","Giovanni Audiro è il capo barman del bar che si trova all'interno del caffè letterario e dirige oltre 10 persone.");
	singleEvent("Capo Chef"         ,"Matteo Mandrea"  ,"Staff/Chef.jpg"  ,"Giovanni Audiro è il capo chef del ristorante che si trova all'interno del caffè letterario e coi suoi 20 anni di esperienza dirige oltre 35 persone.");
}
function initMap() {
  var myCenter = new google.maps.LatLng(40.850070,14.252280);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {mapTypeControl: false,center: myCenter, zoom: 18,mapTypeId: 'hybrid'};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  map.setTilt(0);
  var marker = new google.maps.Marker(
	{position:myCenter,
	animation: google.maps.Animation.BOUNCE});
  marker.setMap(map);
}
function updateDay(){
	var mon=document.getElementById("mese").value;
	var bis=document.getElementById("anno").value%4;
	document.getElementById("sel0").style.display="initial";
	document.getElementById("sel1").style.display="initial";
	document.getElementById("sel2").style.display="initial";
	if(mon=="Febbraio"){
		document.getElementById("sel1").style.display="none";
		document.getElementById("sel2").style.display="none";
		document.getElementById("sel0").style.display=bis==0?"initial":"none";
		}
	if(mon=="Aprile"||mon=="Giugno"||mon=="Settembre"||mon=="Novembre"){document.getElementById("sel0").style.display="none";}
	if(document.getElementById("giorno").value=="31"&&document.getElementById("sel2").style.display=="none"){document.getElementById("giorno").value="30";}
	if(document.getElementById("giorno").value=="30"&&document.getElementById("sel1").style.display=="none"){document.getElementById("giorno").value="29";}
	if(document.getElementById("giorno").value=="29"&&document.getElementById("sel0").style.display=="none"){document.getElementById("giorno").value="28";}
}
function sendData(){
    alert("Richista di iscrizione inoltrata!");
}
function loadBar(x){
	document.getElementById("ristoImg").src=x?"../Risorse/Immagini/Bar/bar.jpg":"../Risorse/Immagini/Bar/ristorante.jpg";
	document.getElementById("ristoSpan").innerHTML=x?"Nel nostro caff&eacute; letterario al suo interno ha un bar dove potrete gustarvi un caffè con gli altri membri o amici":"Nel nostro caff&eacute; letterario al suo interno ha un ristorante dove potrete gustarvi un buon piatto caldo con gli altri membri o amici";
	document.getElementById(x?"btn1":"btn2").style.backgroundColor="var(--col1)"
	document.getElementById(x?"btn2":"btn1").style.backgroundColor="var(--col5)"
}