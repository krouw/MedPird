var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'syn-apex-websocket',
  description: 'The websocket server for the APEX project.',
  script: 'C:\Users\Medfasee UTEM\Documents\MedPird-master\server.js'
});

// Listen for the 'install' event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

// install the service
svc.install();
