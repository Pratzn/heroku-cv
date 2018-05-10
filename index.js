const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();
  app.use(express.static(path.join(__dirname, 'public')))

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
  /*---------------------------------------------*/
  const https = require('https');
  
  function reactiveCall(){
  	https.get('https://pratz.herokuapp.com', (response) => {
  		// Continuously update stream with data
          // var body = '';
          // response.on('data', function(d) {
  	    	//
  	     //    body += d;
  	     //
          // });
          // response.on('end', function() {
          //
  	     //    //console.log('result: '+ body);
          // });
  	});
  }

  setInterval(reactiveCall,30000);
