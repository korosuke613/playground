import {$} from 'zx'

const status = await $`git status --porcelain`

if(status.stdout.length > 0){
  throw new Error("git working tree is dirty.")
}
