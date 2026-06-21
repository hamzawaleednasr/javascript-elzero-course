let obj1 = {
  p1: 1,
  meth1: function () {},
};

let obj2 = {
  p2: 2,
  p3: 3,

  meth2: function () {},
};

let targetObject = {
  p1: 2,
};

let finalObject = Object.assign(targetObject, obj1, obj2);

console.log(finalObject);

let object = Object.assign({}, obj1, { p5: 5, p6: 6 });

console.log(object);
