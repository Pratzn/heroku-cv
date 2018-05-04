const https = require('https');
 
function reactiveCall(){
	https.get('https://pratz.herokuapp.com', (response) => {
		// Continuously update stream with data
	    var body = '';
	    response.on('data', function(d) {
	    	    
	        body += d;
	       
	    });
	    response.on('end', function() {

	        console.log('result: '+ body);
	    });
	});
}

setInterval(reactiveCall,30000);
