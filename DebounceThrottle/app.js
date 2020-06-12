//Debounce: As long as it continues to be invoked , do not call it but call only if time is elapsed
let input = document.querySelector("#debounce");
let result = document.querySelector("#resultDebounce");

input.addEventListener(
  "keypress",
  mydebounce(() => {
    result.textContent = input.value;
  }, 2000)
);

function mydebounce(func, interval) {
  let timeout;
  return function() {
    let args = arguments,
      context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, interval);
  };
}

//Throttle : as long as it continues to be invoked, call only on specific intervals
let inputThrottle = document.querySelector("#throttle");
let resultThrottle = document.querySelector("#throttleResult");

inputThrottle.addEventListener(
  "keypress",
  mythrottle(() => {
    resultThrottle.textContent = inputThrottle.value;
  }, 2000)
);

function mythrottle(funcc, interval) {
  let timeout;
  return function() {
    if (!timeout) {
      funcc.call();
      timeout = true;

      setTimeout(() => {
        timeout = false;
      }, interval);
    }
  };
}
