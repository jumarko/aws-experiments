#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { Ec2WithAwsCdkStack } from '../lib/ec2-with-aws-cdk-stack';

const app = new cdk.App();
new Ec2WithAwsCdkStack(app, 'Ec2WithAwsCdkStack');
