#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { HelloCdkTypescriptStack } from '../lib/hello-cdk-typescript-stack';

const app = new cdk.App();
new HelloCdkTypescriptStack(app, 'HelloCdkTypescriptStack');
