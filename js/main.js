$( document ).ready(
	function() {
	    console.log( "ready!" );
		$(
			function() {
				$( "#menu" ).menu();
			}
		);
		console.log( "menu done!");
	}
);