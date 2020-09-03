#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { MyProjectTypescriptStack } from '../lib/my-project-typescript-stack';

const app = new cdk.App();
new MyProjectTypescriptStack(app, 'MyProjectTypescriptStack');
app.synth();
