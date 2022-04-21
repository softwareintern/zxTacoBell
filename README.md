# zxTacoBell 🌮🔔
### JS is now on the 🌮🔔 menu with ZX
A quick tutorial to using https://github.com/google/zx

- ***What we did without ZX:*** We would use Node's child_process to spawn or execute shell commands and readline to receive interactive prompt input from users. We would install things like chalk as needed. 
- ***What we change by using ZX:*** Shell access from Node.js is wrapped for easy access. The obvious use cases would be to build better config, install, or setup processes. Some not so obvious use cases would be to post a script to remotely control some servers using JS, maybe to run tests or other bot activities.
- ***Why it's important:*** GUI users play by the rules, Shell users play with the rules. JavaScript devs can now unlock the super powers of ancient programmers, RPA Devs, DevSecOpses, SREs, System Admins, Senior Data Scientists, and other Linuxy (and PowerShelly) neckbeards. In short you can use a simple one-liner that would take hours of time and volumes of code to replicate in JS, if it's even possible.

## 🌮🔔 Programming Delivered to JS
Taco Bell (the restaurant) took a few simple ingredients wrapped them in a shell, and created a diverse menu of delicious food, fast. Similarly, we can take a few standard GNU tools in Linux and combine them in a shell script to do a huge variety of things fast. A common combination would be using curl, grep, and sed to automatically pull some information from a web page or an api, and sift through the data.

At first glance, ZX appears focused on building command line tools to streamline config and build tasks. But, the possibilities are far greater. These same modules can be used to conveniently store some 🌮🔔 recipies or one-liners somewhere like GitHub, and have them at your fingertips, waiting to run from any machine or desktop. Imagine a remote js file as C&C and a server that crons `zx https://yourFileUrl` to fetch and run the remote file at a regularly scheduled interval.

## Intro Outline
1. part0.js uses node and child_process
2. install zx
3. part1.js gives some basic zx debugging
4. try some basic shell commands
5. try creating a file and chmoding it
6. try question() for filename
7. try `zx https://raw.githubusercontent.com/softwareintern/zxdemo/main/part1.js`
8. part2.js output shell command to web interface to monitor server
9. remove double req from favicon.ico
10. write chunks for long stdout
11. add .kill() to limit long running processes (top)
12. save as part3.js
13. use pipe uptime to grep and sed to extract number of users
14. do this at some interval and cache it
15. create a smiley chart for output
16. replace "await for of" for "on('data', function())"
17. part4.js serve chart of users over time
18. worm0.js create a worm using zx and the above info
19. wormChallenge.js challenge create a remote file that creates and executes worm0.js
