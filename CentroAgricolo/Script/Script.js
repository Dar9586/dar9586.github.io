function iframeLoaded() {
      var iFrameID = document.getElementById('fram');
	  iFrameID.height="10px";
      iFrameID.height = (iFrameID.contentWindow.document.body.scrollHeight+50) + "px";
  }
function modNav() {
	var x=document.getElementById("myNav");
	if(x.style.width=="0px"){x.style.width = "150px";}else{x.style.width = "0px";}
	setTimeout(function(){ if(x.style.visibility=="hidden"){x.style.visibility = "visible";}else{x.style.visibility = "hidden";} }, 200);
	x.style.top=(document.getElementById("logoImg").getBoundingClientRect().bottom+10)+"px";
}
function modDimBtn(){
	var x;
	var y=document.getElementById("logoImg");
	if(document.body.scrollTop>150){y.style.position="fixed";x="100px";}else{y.style.position="absolute";x="150px";}
	document.getElementById("logoImg").style.height=x;
	document.getElementById("logoImg").style.width=x;
	document.getElementById("myNav").style.top=(document.getElementById("logoImg").getBoundingClientRect().bottom+10)+"px";
}
function changeSrc(x,y) {
    document.getElementById("imgcont").src=x;
	console.log(document.getElementById(y).getBoundingClientRect().top+"px");
	document.getElementById("imgcont").style.top=document.getElementById(y).getBoundingClientRect().top+"px";
}
function initMap() {
  var myCenter = new google.maps.LatLng(40.828379,14.427067);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {mapTypeControl: false,center: myCenter, zoom: 18,mapTypeId: 'hybrid'};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  
  var marker = new google.maps.Marker(
	{position:myCenter,
	animation: google.maps.Animation.BOUNCE});
  marker.setMap(map);
}
function createProduct(title,textx,imgPath){
	var fina="<div class='test'>";
	fina+="<img name='imgDiv' class='imageDiv' src='"+imgPath+"' />";
	fina+="<h1 class='h1Div'>"+title+"</h1>";
	fina+="<textarea name='txtDiv' class='textareaDiv' readonly>"+textx+"</textarea>";
	//fina+="<input type='button' name='btnDiv' value='"+price+"' class='inputDiv noselectable'></button>";
	fina+="</div>";
	document.getElementById("prod").innerHTML+=fina;
}
function loadAll(){
	var prof=true;
	createProduct('Mozzarella',            prof?'Dalla produzione delle nostre mucche produciamo la mozzarella':'è molto buona'                 ,'../Risorse/Immagini/CentroAgricolo/mozzarella.jpg' );
	createProduct('Pastiera',              prof?'fsdhfuiohsdiofhsdiofsdiofosdhfiohs':'questi sono proprio buoni'     ,'../Risorse/Immagini/CentroAgricolo/pastiera.jpg'   );
	createProduct('Pizza di Scarole',      prof?'Dai nostri campi produciamo grano e verdure di vario genere e nl loro periodo è possibile trovare pizze di scarole':'questi sono leggenda'          ,'../Risorse/Immagini/CentroAgricolo/scarole.jpg'    );
	createProduct('Pollo',                 prof?'Tra i nostri allevamenti si trova il pollo':'questo è proprio arrosto'      ,'../Risorse/Immagini/CentroAgricolo/pollo.jpg'      );
	window.setTimeout(resizeAll,1000);
}
function resizeAll(){
	var x = document.getElementsByName("txtDiv");
	var y = document.getElementsByName("btnDiv")[0].getBoundingClientRect().left-document.getElementsByName("imgDiv")[0].getBoundingClientRect().right-15;
    var i;
    for (i = 0; i < x.length; i++) {x[i].style.width = y+"px";}
}
function changedSelect(){
	if(document.getElementById("mySelect2").value=="Registrazione"){
		console.log("Registrazione");
		var opt = ["Settimanale", "Mensile", "Bimestrale","Annuale"];
		document.getElementById("ccc1").style.display = "none";
		document.getElementById("ccc2").style.display = "none";
		document.getElementById("st2").style.display = "none";
		document.getElementById("st3").style.display = "none";
		document.getElementById("bt1").href = "../Risorse/Documenti/Registrazione.docx";
		for(var a=0;a<4;a++){document.getElementById("mySelect").options[a]=new Option(opt[a], opt[a], false, false);}
		
	}
	else{
		console.log("Prenotazione");
		var opt = ["Camera Singola", "Camera Doppia", "Suite","Suite di lusso"];
		document.getElementById("ccc1").style.display = "inline";
		document.getElementById("ccc2").style.display = "inline";
		document.getElementById("st2").style.display = "inline";
		document.getElementById("st3").style.display = "inline";
		document.getElementById("bt1").href = "../Risorse/Documenti/Prenotazione.docx";
		for(var a=0;a<4;a++){document.getElementById("mySelect").options[a]=new Option(opt[a], opt[a], false, false);}
	}
	
}
function openNav(x,y) {
	if(document.getElementById("spe03").style.filter =="blur(10px)"){closeNav();return;}
	changeSrc(x,y);
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
	console.log(document.getElementById(y).getBoundingClientRect().top+"px");
	document.getElementById("imgcont").style.top=(document.getElementById(y).getBoundingClientRect().top+document.body.scrollTop)+"px";
}