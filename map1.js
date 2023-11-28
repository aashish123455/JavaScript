function* simpleGenerator(){
    console.warn("function called")
    let a = 99;
    yield a;
    yield 30;
    yield 40;
}
let sG=simpleGenerator();
console.log(sG.next().value);
console.log(sG.next());
console.log(sG.next());
console.log(sG.next());

