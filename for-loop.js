const names = (["Ada", "Brendan", "Ali"]);

function writeNames(names) {
  for (let i = 0; i < names.length; i++ ) {
    console.log(`Thank you,${names[i]} for the wonderful  birthday  gift!`);
    
  }

  return names;
}

writeNames(names);