#!/usr/bin/env zx
const http = require('http');
const port = 3000;
const interval = 3000;

let userCounts = [];
function chartSmiles(numberOfSmiles){
  let smiles = ''; 
  while(numberOfSmiles > 0){
    smiles += '&#9787;';
    numberOfSmiles--;
  };
  return smiles;
};

function checkUptime(){
  const uptime = $`uptime | sed 's/,/\\n/g' | grep "users" | sed 's/[a-z ]//g'`;
  uptime.stdout.on('data', function(chunk){
    userCounts.push({
      userCount: Number(chunk)||0,
      countTime: new Date().toString(),
    });
  });
};

(function(){
  const bg = setInterval(()=>checkUptime(), interval);
  const server = http.createServer(async function(req, res){
    if(req.url !='/favicon.ico'){
      userCounts.map(function(i){
        let smiles = chartSmiles(i.userCount);
        res.write(`<div style="color:lightgreen; background:black;">${i.countTime} ${smiles}</div>\n`);
      });
    };
    res.end();
  });
  server.listen(port, function(){
    console.log(`serving on port ${port}`);
  });
})();
