$(function() {

	// Custom JS

});
function initMap() {
	var viewWidth = $(window).width();
	if(viewWidth<768){
		var center = {lat: 56.10668539, lng: 69.46658807};
	}
	else{
		var center = {lat: 56.10668539, lng: 69.46658807};
	}
	var o = new google.maps.Map(document.getElementById("map"), {
		center: center,
		zoomControl: !0,
		zoomControlOptions: {
			position: google.maps.ControlPosition.RIGHT_CENTER
		},
		disableDoubleClickZoom: !0,
		mapTypeControl: !1,
		scaleControl: !0,
		scrollwheel: !1,
		panControl: !0,
		streetViewControl: !1,
		draggable: !0,
		overviewMapControl: !1,
		overviewMapControlOptions: {
			opened: !1
		},
		zoom: 16
	}),
	myIcon = new google.maps.MarkerImage("img/map-marker.png", null, null, null, new google.maps.Size(60, 75)),
	e = new google.maps.Marker({
		icon: myIcon,
		position: new google.maps.LatLng(56.1065, 69.4699),
		map: o,
		title: "Здесь надпись при наведение"
	});
	s = new google.maps.InfoWindow({
		content: '<div id="content"><h1 id="firstHeading" class="firstHeading"></h1><div id="bodyContent"></div><strong>Контент при клике </strong><br>Lorem ipsum dolor sit amet, consectetur <br>adipisicing elit. Alias, dolores.</div>'
	});
	e.addListener("click", function() {
		s.open(o, e)
	});

}