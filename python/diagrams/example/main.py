from diagrams import Cluster, Diagram
from diagrams.aws.compute import EC2, Lambda
from diagrams.aws.database import Aurora
from diagrams.aws.integration import SQS
from diagrams.aws.network import ALB, Route53
from diagrams.aws.storage import S3

with Diagram('AWS Architecture'):
    route53 = Route53('Route 53')

    alb = ALB('ALB')

    with Cluster('EC2 Auto Scaling'):
        instances = [
            EC2('Instance'),
            EC2('Instance'),
            EC2('Instance')
        ]

    aurora = Aurora('Aurora')

    sqs = SQS('SQS')

    function = Lambda('Lambda')

    s3 = S3('S3')

    route53 >> alb >> instances
    instances >> aurora
    instances >> sqs >> function >> s3
