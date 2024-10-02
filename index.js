function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  function namedFunction() {
    console.log("named");
  }
  return namedFunction;
}

const func = returnsANamedFunction();
func();

function returnsAnAnonymousFunction() {
    return () => {
        return "anonymous"
    }
}
