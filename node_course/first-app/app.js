//if exports object

// const logger = require('./logged');
// logger.log('Anna');

//if exports single function

// const log = require('./logged');
// log('Anna');

//path method

// const path = require('path');
// let pathObj = path.parse(__filename);
// console.log(pathObj);

//os method

// const os = require('os');
// let totalmemory = os.totalmem(); 
// let freememory = os.freemem();
// let cpu = os.cpus();

// console.log(`Total memory : ${totalmemory}`);
// console.log(`Free memory : ${freememory}`);
// console.log(cpu);
// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.hostname());

//fs sync method

// const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);



//fs async method without error

// const fs = require('fs');
// fs.readdir('./', function(err, result){
//     if(err) console.log('error', err);
//     else console.log('Result', result);
// })


//fs async method with error

// const fs = require('fs');
// fs.readdir('$', function(err, result){
//     if(err) console.log('error', err);
//     else console.log('Result', result);
// })

//event method with traditional function

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

//Register listener
// emitter.on('messagelogged', function(arg){
//     console.log('Listener called')
// });

//Raise event
// emitter.emit('messagelogged', {id: 1, name:'Anna'});


//event method with arrow function
// const EventEmitter = require('events');

// const Logger = require('./logged');
// const logger = new Logger();

//Register listener
// logger.on('messagelogged', arg => console.log('Listener called', arg)
// );
// logger.log('Anna');


//http module creating server

// const http = require('http');
// const server = http.createServer();

// server.on('connection', (socket) => {
//  console.log('new conection...');
// });

// server.listen(3000);
//  console.log('listerning on port 3000...');


//http module creating server normal way

// const http = require('http');
// const server = http.createServer((req, res) =>{
//     if(req.url === '/'){
//         res.write('Hello my neighbours');
//         res.end();
//     }
//     if(req.url === '/api/Nairi'){
//         res.write(JSON.stringify([1,2,3]));
//         res.end();
//     }
// });


// server.listen(3000);
//  console.log('listerning on port 3000...');