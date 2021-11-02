//loop through the array and print it twice
const spinner = ["\r|", "\r/", "\r-", "\r\\"];

let time = 0;
for (const char of spinner) {
  time += 200;
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
}
for (const char of spinner) {
  time += 200;
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
}
