








for (var i = 10; i > 0; i--) {
  if (i === 2) {
    console.log(`${i} speckled frogs sat on a log eating some most delicious bugs.
      One jumped in the pool where it's nice and cool, then there was ${i - 1} speckled frog.`)
  }else if (i === 1) {
    console.log(`${i} speckled frog sat on a log eating some most delicious bugs.
      One jumped in the pool where it's nice and cool, then there were no more
      speckled frogs!`);
  } else {
  console.log(`${i} speckled frogs sat on a log eating some most delicious bugs.
      One jumped in the pool where it's nice and cool, then there were ${i - 1} speckled frogs.`)
  }
}
