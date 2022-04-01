# zxdemo
### Some quick Bash + JS with ZX for a demo
A quick tutorial to using https://github.com/google/zx
Briefly touted as a better bash, now a tool for better scripts, ZX wraps node's child process with some convenient features for shell scripting.
## Taco Bell Programming Delivered to JS
...

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
