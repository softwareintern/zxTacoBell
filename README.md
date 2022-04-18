# zxTacoBell
### Some quick Bash + JS with ZX
A quick tutorial to using https://github.com/google/zx

- ***What it does:*** ZX wraps node's child process with some convenient features for shell scripting.
- ***What we gain/learn:*** Shell access from Node.js becomes easy for JavaScript devs to take advantage of. The obvious use cases would be to build better config, install, or setup processes. Some not so obvious use cases would be to run a script remotely that could collect and store data.
- ***Why:*** GUI users play by the rules, Shell users play with the rules. JavaScript devs can now unlock the super powers of ancient programmers, RPA Devs, DevSecOpses, SREs, Sys-Admins, Senior Data Scientists, and other Linuxy (and PowerShelly) neckbeards.

## Taco Bell Programming Delivered to JS
Taco Bell took a few simple ingredients and created a diverse menu of food, fast. Similarly, we can take a few standard GNU tools in Linux and combine them to do a huge variety of things fast. A common combination would be using curl, grep, and sed to automatically pull some information from a web page or an api, and sift through the data.

At first glance, ZX appears focused on building command line tools to streamline config and build tasks. But, the possibilities are far greater. These same modules can be used to conveniently store some Taco Bell recipies somewhere like GitHub, and have them at your fingertips, waiting to run from any machine or desktop.

## Intro Outline
1. part0.js uses node and child_process
2. install zx
3. part1.js gives some basic zx debugging
4. try some basic shell commands
5. try `zx https://raw.githubusercontent.com/timBrockman/zxdemo/main/part1.js`
6. part2.js output shell command to web interface to monitor server
7. remove double req from favicon.ico
8. write chunks for long stdout
9. add .kill() to limit long running processes (top)
10. save as part3.js
11. use pipe uptime to grep and sed to extract number of users
12. do this at some interval and cache it
13. create a smiley chart for output
14. replace "await for of" for "on('data', function())"
15. part4.js serve chart of users over time
16. worm0.js create a worm using zx and the above info
17. wormChallenge.js challenge create a remote file that creates and executes worm0.js
