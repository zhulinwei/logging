function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}   

async function main () {
  while(true) {
    console.log({ name: "tony", time: new Date() })
    await sleep(1000)
  }
}

main()