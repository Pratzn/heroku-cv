var cron = require('node-cron');
cron.schedule('* */30 * * *', function(){
    console.log(new Date().toString());
});