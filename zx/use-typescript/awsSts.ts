import { $ } from "zx";

type StsIdentity = {
  UserId: string,
  Account: string,
  Arn: string
}

const commandPromise = await $`aws sts get-caller-identity`;
const identity: StsIdentity = JSON.parse(commandPromise.stdout);

console.log(`Account ID: ${identity.Account}`);
