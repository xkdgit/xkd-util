const xkdutil = require('./index')

const arr = ['python', 'php', 'nodejs']

let match = xkdutil.find(null, (v) => {
    return v === 'nodejs'
});

console.log(match);
