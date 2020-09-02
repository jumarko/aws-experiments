import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';

export class Ec2WithAwsCdkStack extends cdk.Stack {
 constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
   super(scope, id, props);

   new ec2.CfnInstance(this, 'MyInstance', {
       imageId: 'ami-07ad4b1c3af1ea214',
       instanceType: 't3.micro',
       keyName: 'kp_wai',
       monitoring: false,
       networkInterfaces: [
         {
           deviceIndex: "0",
           associatePublicIpAddress: true,
           subnetId: 'subnet-09fe229ff896761aa'
         }
       ]
     }
   );
 }
}
