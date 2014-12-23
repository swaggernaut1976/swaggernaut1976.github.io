document.write('<span style="display: none;"><img id="albas" src="http://s.castalba.tv/r.php?ash='+ash+'&id='+id+'&cq='+cq+'" /></span>');

	function albas() {
		pingsts = document.getElementById('albas');
		pingsts.src = "http://s.castalba.tv/r.php?ash="+ash+"&id="+id+"&cq="+cq+"&t=" + new Date().valueOf();
	}
 
	setInterval("albas()", 270000);
