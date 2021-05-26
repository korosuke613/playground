#!/usr/bin/env zx
import {$} from 'zx'

void async function () {
  let {stdout} = await $`pwd`.pipe($`cat`)
  console.log(chalk.red(stdout.trimEnd()), __filename)
}()
