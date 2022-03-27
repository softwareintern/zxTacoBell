#!/usr/bin/env zx
/** Challenge: Create a Computer Worm in JS
 * run some commands and log the output
 * Hint: remember chmod
 * Warning!! Use some sort of counter to limit this.  
 */
 const path = require('path');
 const wormName = path.basename(__filename, '.js');
 
(async function(){
  const counter = Number(wormName.at(4)) + 1;
  if(counter <= 4){
    const newFile = 'worm' + counter + '.js';
    await $`cat ${wormName}.js > ${newFile};chmod +x ${newFile}; ./${newFile}`;
  }else{
    console.log('worm matured');
  };
});
