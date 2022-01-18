// process.stdout.write('hello from spinner1.js... \rheyyy\n');
let arr = ['|', '/', '-', '\\', '|']
for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r ${arr[i]}`);
  }, (100 + i * 200))
}

setTimeout(() => {
  console.log('');;
}, (100 + arr.length * 200));