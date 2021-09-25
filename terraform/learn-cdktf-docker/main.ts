import { Construct } from 'constructs'
import {App, RemoteBackend, TerraformStack} from 'cdktf'
import { Container, Image, DockerProvider } from './.gen/providers/docker'

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name)

    new DockerProvider(this, 'default', {})

    const dockerImage = new Image(this, 'nginxImage', {
      name: 'nginx:latest',
      keepLocally: false,
    })

    new Container(this, 'nginxContainer', {
      image: dockerImage.latest,
      name: 'tutorial',
      ports: [
        {
          internal: 80,
          external: 8000,
        },
      ],
    })
  }
}

const app = new App()
const stack = new MyStack(app, 'typescript-docker')

new RemoteBackend(stack, {
  hostname: "app.terraform.io",
  organization: "korosuke613",
  workspaces: {
    name: "learn-cdktf-docker",
  },
});

app.synth()
