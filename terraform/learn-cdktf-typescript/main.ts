import { Construct } from 'constructs'
import {App, TerraformStack, RemoteBackend, TerraformOutput} from 'cdktf'
import {AwsProvider, Instance, Subnet, Vpc} from './.gen/providers/aws'


export class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id)

    new AwsProvider(this, 'aws', {
      region: 'ap-northeast-1',
    })

    const vpc = new Vpc(this, 'vpc', {
      cidrBlock: "10.0.0.0/16"
    })

    const subnet = new Subnet(this, 'private-subnet', {
      cidrBlock: "10.0.0.0/24",
      vpcId: vpc.id
    })

    const instance = new Instance(this, 'compute', {
      instanceType: 't2.micro',
      ami: "ami-02892a4ea9bfa2192", // Amazon Linux 2 AMI (HVM), SSD Volume Type
      associatePublicIpAddress: false,
      subnetId: subnet.id
    })

    new TerraformOutput(this, 'public_ip', {
      value: instance.id,
    })
  }
}

const app = new App()
const stack = new MyStack(app, 'typescript-aws')

new RemoteBackend(stack, {
  hostname: "app.terraform.io",
  organization: "korosuke613",
  workspaces: {
    name: "learn-cdktf-typescript",
  },
});

app.synth()
