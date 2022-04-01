#!/usr/bin/env zx
const http = require('http');
const port = 3000;

/**
* easiest solution
* use for await to pipe a stream of chuncks
* also get rid of double req from browser
* try top
*/
(function(){
  const server = http.createServer(async (req, res)=>{
    if(req.url !='/favicon.ico'){
      let limiter = 4;
      const uptime = $`uptime`;
      for await (let chunk of uptime.stdout){
        res.write(chunk);
        console.log('chunk');
        if(limiter){
          limiter--;
        }else{
          uptime.kill();
        }
      };
  };
    res.end();
  });
  server.listen(port, ()=>{
    console.log(`serving on port ${port}`);
  });
})();
