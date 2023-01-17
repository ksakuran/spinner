let spinChar = ["|", "/", "-", "\\","|", "/", "-", "\\","|", "/", "-", "\\", "|", "/", "-", "\\"];
let delay = 100;
for (const char of spinChar) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay += 200);
}



// setTimeout(() => {
//   process.stdout.write('\r|  ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/  ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-  ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\  ');
// }, 700);