(function(){


    const obj = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
      };
      const {
        b,
        d
      } = obj;
      console.log(b); // 2
      console.log(d); // 4
      console.log(a); // ReferenceError: a is not defined


})();