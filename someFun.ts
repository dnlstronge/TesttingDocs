/* write a function which take two arguments, an array of codes, and an object person, check if the persons code is present in the array */


type arry = number[]
type obj = {
  name: string,
  passcode: number
}

const filterfun = (arr: arry , person: obj) => {
/*check if daves passcode is stored in the given array*/ 
  const remove = arr.filter(code => code === person.passcode ).length
  const solve = remove > 0 ? "The code is present" : "The code is not present"
  console.log(solve)
  return solve;
}

filterfun([13245, 22432, 34324], {name: "dave", passcode: 12345}) // not present
filterfun([13245, 12345, 34324], {name: "dave", passcode: 12345}) // present
filterfun([145, 22432, 321], {name: "dave", passcode: 145}) // present
filterfun([7283, 7452, 7231, 7283, 6541, 1023], {name: "dave", passcode: 7283}) // present
filterfun([13245, 22432, 34324], {name: "dave", passcode: 12995}) // not present

// now write tests for these
