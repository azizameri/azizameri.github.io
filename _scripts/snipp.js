var gMapApiKey =  'AIzaSyArh7nrCWUFd1X23k4bZRmFT6ZJeMcfUYo'; 
var map;
      
function initMap() {
	var Mylocation = {lat: 38.5815719, lng:-121.4943996};


	map = new google.maps.Map(document.getElementById('locmap'), {
		'center' : Mylocation,
		'zoom' : 11,
		'mapTypeId' : google.maps.MapTypeId.ROADMAP,
		'draggable' : true,
		'scrollwheel' : true
	});
	
	var mapContent = 'Sacramento';
	
	var infowindow = new google.maps.InfoWindow({
		'content': mapContent
	});
	
	var marker = new google.maps.Marker({
		'position': Mylocation,
		'map': map,
		'title': 'Sacramento'
	});
	
	marker.addListener ('click',function(){
		infowindow.open(map,marker);
	});
}


var inc=1;
	$(function () {
			$('#next').click(
				function () {
					var currentFig = "#fig" + inc;
					if (inc == 10) {
						nextFig = "#fig1";
					} else {
						nextFig = "#fig" + (inc + 1);
					}
					$(nextFig).addClass('showFig');
					$(currentFig).removeClass('showFig');	
					inc++;
					if (inc == 11) { inc = 1; } 
				}
			);	
			$('#previous').click(
				function () {
					var currentFig = "#fig" + inc;
					if (inc == 1) {
						prevFig = "#fig10";
					} else {
						prevFig = "#fig" + (inc - 1);
					}
					$(prevFig).addClass('showFig');
					$(currentFig).removeClass('showFig');	
					inc--;
					if (inc == 0) { inc = 10; } 
			}
			);	
	});

