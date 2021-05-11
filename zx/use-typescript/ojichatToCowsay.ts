import {$} from "zx"
// @ts-ignore cowsayは型が提供されてなかった...
import cowsay from "cowsay";

const getOjichatMessage = async () => {
  try {
    await $`ojichat -v`
    return $`ojichat`
  } catch (p) {
    return $`docker run --rm -i greymd/ojichat:latest`
  }
}

$.verbose = false // `set -x`を無効
const ojichatMessage = await getOjichatMessage()

console.log(
  cowsay.say({
    text: ojichatMessage.stdout
  })
)
