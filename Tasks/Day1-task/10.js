const obj1 = {
  a: 1,
  b: 2
};

const obj2 = {
  c: 3,
  d: 4
};

const obj3 = {
  ...obj1,
  ...obj2
};
console.log(obj3);

const {a, d} = obj3;
console.log(a);
console.log(d);