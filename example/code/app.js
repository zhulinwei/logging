function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}   

async function main () {
  while(true) {
    // console.log({ name: "tony", time: new Date() })
    console.log({ name: "tony", time: "2020-05-06T07:14:09.421Z" })
    await sleep(1000 * 5)
  }
}

main()