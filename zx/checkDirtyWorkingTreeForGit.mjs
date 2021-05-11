const status = await $`git status --porcelain`

// console.log(`stdout: ${status.stdout}`)
// console.log(`stderr: ${status.stderr}`)
// console.log(`exitCode: ${status.exitCode}`)
// console.log(`status.length: ${status.length}`)
// console.log(`status: ${status}`)
// console.log(status)

if(status.stdout.length > 0){
  throw new Error("git working tree is dirty.")
}
