#!/usr/bin/env zx
const http = require('http');
const port = 3000;

/**
 * will work for serving simple short await stdout
 * a better version for longer output would pipe a stream of chunks
 * something like `top` will never resolve
 */
(function(){
    const server = http.createServer(async (req, res)=>{
        const uptime = await $`w`;
        
        console.log(uptime);
        res.write(uptime.stdout);
        res.end();
    });
    server.listen(port, ()=>{
        console.log(`serving on port ${port}`);
    });
})();
