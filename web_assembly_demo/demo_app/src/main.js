import('../src/lib.rs').then(wasm => {
  // console.log(wasm.add(1 + 1))
  console.log(".................................");
  console.log("Rust!")
  console.log(".................................");

  let t0 = performance.now();
  if (wasm.intensive_func() === 7) {
    console.log("Rust has finished!")
  }
  let t1 = performance.now();
  console.log(`Rust method took ${Math.floor((t1-t0)/1000)} seconds`);

  console.log("---------------------------------");
  console.log("JavaScript!")
  console.log("---------------------------------");

  let t2 = performance.now();
  const upperBound = 10000000000;
  let counter = 0; // eslint-disable-line
  for (let i = 0; i < upperBound; i++) {
    counter += 1;
  }
  let t3 = performance.now();
  console.log(`JavaScript method took ${Math.floor((t3-t2)/1000)} seconds`);

  console.log("Finished :)");
})

