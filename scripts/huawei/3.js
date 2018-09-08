var readline = require('readline');
process.stdin.setEncoding('utf-8');

var rl = readline.createInterface({ input: process.stdin, output: process.stdout, prompt: '' });
rl.prompt();
let matrix = []
let totolLine = 0
let col, row;
rl.on('line', function(token) {
    if(totolLine <= 9) {
        matrix.push(token.split(''))
    }
    else if(totolLine === 10) {
        col = parseInt(token)
    }
    else if(totolLine === 11){
        row = parseInt(token)
        getRst()

        totolLine = 0;
        matrix = [];
        row = col = null;
    }
    totolLine++
});

var getRst = () => {
    let stack = []
    stack.push([row, col])
    while(stack.length) {
        let curr = stack.pop()
        let x = curr[0]
        let y = curr[1]
        // matrix[x][y] = 0;
        if( x === 0 || 
            x === 9 ||
            y === 0 ||
            y === 9
        ) {
            console.log(1)
            return;
        }
        else {
            // right
            if(x < 9 && matrix[x+1][y] === '0') {
                matrix[x+1][y] = '2';
                stack.push([x+1, y])
            }
            if(y < 9 && matrix[x][y+1] === '0') {
                matrix[x][y+1] = '2';
                stack.push([x, y+1])
            }
            if(x > 0 && matrix[x-1][y] === '0') {
                matrix[x-1][y] = '2';
                stack.push([x-1, y])
            }
            if(y > 0 && matrix[x][y-1] === '0') {
                matrix[x][y-1] = '2';
                stack.push([x, y-1])
            }
        }
    }
    console.log(0)
    return;
}
