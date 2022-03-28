#!/usr/bin/env zx
/** simple example
 * run some commands and log the output
 * try:
 * touch foo.js; chmod +x foo.js; ls -l
 * uptime
 * w
 */
(async function(){
    const pOut = await $`touch foo.js; chmod +x foo.js; ls -l`;    
    console.log(pOut);
    console.log(pOut.stdout);
})();
