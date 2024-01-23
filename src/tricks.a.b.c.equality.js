let a = {
  b: 0,
  valueOf: function(){ return ++this.b; }
}

console.log(a)
if (a== 1 && a == 2 && a == 3) {
  console.log(`(a== 1 && a == 2 && a == 3) is true for the following : 

    "const a = {
      b: 0,
      valueOf: function(){ return ++this.b; }
    }"

  `);
}

a = {
  currentValue: 1,
  valueOf: function(){
    return this.currentValue++;
  }
};

console.log(a)
if (a== 1 && a == 2 && a == 3) {
  console.log(`(a== 1 && a == 2 && a == 3) is true for the following : 

    "const a = {
      currentValue: 0,
      valueOf: function(){ return ++this.currentValue; }
    }"

  `);
}
