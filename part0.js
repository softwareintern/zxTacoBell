#!/usr/bin/env node
/*
* Use Node standard library's child_process for compairison.
* Use "#!" and "chmod +x", to make it more fun. 
*/
const {exec} = require('child_process');
const http = require('http');
const port = 3000;

(function(){
  const server = http.createServer((req, res)=>{
    exec('ls -a', (error, stdout, stderr)=>{
      res.end(stdout);
    });
  });
  server.listen(port, ()=>{
    console.log(`serving on port ${port}`);
  });
})();
