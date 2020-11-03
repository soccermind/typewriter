const typewriter = function(sentence) {
  let timeOut = 0; // ms
  for (let i in sentence) {
    setTimeout(() => { 
      process.stdout.write(sentence[i]);
      if (i == sentence.length - 1) {
        process.stdout.write('\n');
      }
    }, timeOut);
    timeOut += 50;
  }
};

typewriter("hello there from lighthouse labs");