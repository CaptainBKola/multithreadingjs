//script.js

let myWorker;
 function start() {
   console.log("WebWorker: Starting");
   myWorker = new Worker("worker.js");

  let countNum = document.querySelector('#upto').value;
   myWorker.postMessage({'cmd': 'start', 'upto': countNum});
   myWorker.addEventListener("message", addHandler, false);

   }
  
   function stop() {
   if (myWorker) {
   let msg = "WebWorker: Terminating " + new Date();
    console.log(msg);
   document.querySelector('#status').innerHTML=  msg;
   myWorker.terminate();
   myWorker = null;
   }
   }
    
   function addHandler(event) {
      if (typeof(event.data)=='number'){
   document.querySelector('#result').innerHTML = event.data
    }
 else {
       document.querySelector('#status').innerHTML= event.data
}
}
