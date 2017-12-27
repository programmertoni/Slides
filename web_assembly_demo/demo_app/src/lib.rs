fn main() {
    println!("Hello, world!");
}

// Functions that you wish to access from Javascript
// must be marked as no_mangle
#[no_mangle]

pub fn intensive_func() -> u32 {
  let mut counter = 0;

  for num in 0..10000000000 {
    counter += 1;
  }

  return 7;
}