# CLI Program with NodeJS

## Description
A command-line interpreter or command-line processor uses a command-line interface (CLI) to receive commands from a user in the form of lines of text. This provides a means of setting parameters for the environment, invoking executables and providing information to them as to what actions they are to perform. In some cases the invocation is conditional based on conditions established by the user or previous executables. Such access was first provided by computer terminals starting in the mid-1960s. This provided an interactive environment not available with punched cards or other input methods.([Wikipedia](https://en.wikipedia.org/wiki/Command_line_interface))
<hr>

## Contents
- [Execute JavaScript outside the browser](#execute-javascript-outside-the-browser)
- [Debugging](#Debugging)
    - [1- In Visual Studio Code](#1--In-Visual-Studio-Code)
    - [2- Using log with colors](#2--Using-log-with-colors)
    - [3- Measure Execution Time in Node Js](#3--measure-execution-time-in-node-js)
- [Nodejs Args](#Nodejs-Args)
- [Reading data from a Readable stream (CLI Inputs)](#ReadLine)


## Execute JavaScript outside the browser
After installing nodejs on OS, you can use the `node` command to execute JavaScript code outside the browser.

Just make sure that the javascript code doesn't use the `window`, `document`, `page`, `alert()` those only can be executed in browser NOT in nodejs.

```bash
node hello.js
```
<hr>

## Debugging
### 1- In Visual Studio Code
The Visual Studio Code editor has built-in debugging support for the Node.js runtime and can debug JavaScript, TypeScript, and many other languages that are transpiled into JavaScript.([Visual Studio Code nodejs debugging documentation](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)).

On the javascript file, after saving, you can use the `F5`, then select Nodejs to start debugging.
Or you can select start Debugging from Run menu top.

Read mode about nodejs debugging, setting check points, move the debugger line by line, variables watchers, ...and  more in visual studio code, in the [official documentation site](https://code.visualstudio.com/docs/nodejs/nodejs-debugging) for VS code.
https://code.visualstudio.com/docs/nodejs/nodejs-debugging

### 2- Using log with colors
The old tradition of using the `console.log()` function to print messages to the console is still used in the Node.js runtime.

```js
console.log('variable b is: ' + b);
```
to apply colors to the output, you can use the hex unicode ASCII to color the text and make a few font formatting like italic or bold syntax.

Read more in [this article](https://chrisyeh96.github.io/2020/03/28/terminal-colors.html).

```js
console.log('\x1b[36m%s\x1b[0m', 'I am cyan');  //cyan
console.log('\x1b[33m%s\x1b[0m', stringToMakeYellow);  //yellow

Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"

FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"

BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m"
```

### 3- Measure Execution Time in Node Js
Starts a timer that can be used to compute the duration of an operation. Timers are identified by a unique label. Use the same label when calling console.timeEnd() to stop the timer and output the elapsed time in suitable time units to stdout ([Nodejs Docs console](https://nodejs.org/api/console.html#consoletimelabel)).

To calculate the execution time of a function or a piece of code, `console.time("LABEL")` and `console.timeEnd("LABEL")` can be used.
```js
function foo(args){
    ...
    ...
}

console.time("foo_timer");
foo(args);
console.timeEnd("foo_timer");
```
<hr>

## Nodejs Args
Passing in arguments via the command line is an extremely basic programming task, and a necessity for anyone trying to write a simple Command-Line Interface (CLI). In Node.js, as in C and many related environments, all command-line arguments received by the shell are given to the process in an array called argv (short for 'argument values') ([Nodejs Docs args](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/)).
```js
// argv.js file:
console.log(process.argv);
```

```sh
$ node argv.js one two three four five
[ 'node',
  '/home/avian/argvdemo/argv.js',
  'one',
  'two',
  'three',
  'four',
  'five' ]

  # the first element in the array is the path to the executable file, the second is the path to the script file, and the rest are the arguments passed to the script.
```

So the first two items in process.argv are not useful to us, so we can use the `.slice(2)` method to remove them.
```js
console.log(process.argv.slice(2));
```

```sh
$ node argv.js one two three four five
[ 'one', 'two', 'three', 'four', 'five' ]
```

Read More about nodejs args in [official nodejs documentation site> node args](https://nodejs.org/docs/latest-v17.x/api/process.html#processargv).

<hr>

## ReadLine
The node:readline module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time.

```js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(`What's your name?\n`, name => {
    console.log(`Hi ${name}!`);
    readline.question("How Old Are You?\n", age=>{
        console.log(`Your age is ${age} years old`)
        readline.close();
      })
  });
```

Read More about readLine in nodejs in [official nodejs documentation site> readLine](https://nodejs.org/api/readline.html#readline).
