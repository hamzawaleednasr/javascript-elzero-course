function parent() {
  let a = 10;
  function child() {
    console.log(a); // 10
    console.log(b); // Error

    function grand() {
      let a = 20;
      let b = 15;
      console.log(a); // 20
      console.log(b); // 15
    }
    grand();
  }
  child();
}
parent();
