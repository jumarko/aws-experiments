import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import {AttributeType} from '@aws-cdk/aws-dynamodb';

export interface HitCounterProps {
    /** the function for which we want to count url hits **/
    downstream: lambda.IFunction;
}

export class HitCounter extends cdk.Construct {
    /** allows accessing the counter function - this is the hitcounter lambda function*/
    public readonly handler: lambda.Function;

    constructor(scope: cdk.Construct, id: string, props: HitCounterProps) {
        super(scope, id);

        const table = new dynamodb.Table(this, 'Hits', {
            partitionKey: {name: 'path', type: AttributeType.STRING}
        });

        this.handler = new lambda.Function(this, 'HitCounterHandler', {
            runtime: lambda.Runtime.NODEJS_10_X,
            handler: 'hitcounter.handler',
            code: lambda.Code.fromAsset('lambda'),
            environment: {
                // functionName and tableName are "late-bound values"
                // - they only resolve when we deploy our stack
                DOWNSTREAM_FUNCTION_NAME: props.downstream.functionName,
                HITS_TABLE_NAME: table.tableName
            }
        });

        // grant the lambda role read/write permissions to our table
        table.grantReadWriteData(this.handler);

        // this isn't in the tutorial but we need to grant invoke too otherwise it fails
        // ERROR Invoke Error {"errorType":"AccessDeniedException","errorMessage":"User: arn:aws:sts::504003789983:assumed-role/CdkWorkshopStack-HelloHitCounterHitCounterHandlerS-1M9KFL06AAJWX/CdkWorkshopStack-HelloHitCounterHitCounterHandlerD-BLRVLBPDD8AP is not authorized to perform: lambda:InvokeFunction on resource: arn:aws:lambda:eu-west-1:504003789983:function:CdkWorkshopStack-HelloHandler2E4FBA4D-QY17DX4E5FKI"
        props.downstream.grantInvoke(this.handler);
    }
}