//worker.js
//self.onmessage = (event) => ('message', function(e){
    self.addEventListener('message', (event) => {
        let json_data = event.data;
        let shouldRun = true;
        console.log(json_data.cmd)
        switch (json_data.cmd) {
        case 'stop':
           postMessage('Worker stopped the calculation ' + json_data.msg );
        shouldRun = false;
        self.close(); // Terminates the Worker.
        break;
        case 'start':
        postMessage("Worker start and going to: " + json_data.upto + " (" + new Date()+ ")<br/>");
        let total = start_adding_to(json_data.upto);
        postMessage("Worker sent back these numbers: " + total + "<br/>" );
        break;
        default:
        postMessage('unknown cmd:' + json_data.msg);
        };
        false });
        
        function start_adding_to(number){
          let  counters = 0
           for(i = 0; i < number; i++){
               counters += i;
           }
           return counters;
        }
        
        