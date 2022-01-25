function create() {
    let reponse = 23;
    return function (x) { return x + reponse; }
  }

  let a = create()
  console.log(a(12))