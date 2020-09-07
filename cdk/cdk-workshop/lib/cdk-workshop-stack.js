"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkWorkshopStack = void 0;
const cdk = require("@aws-cdk/core");
const lambda = require("@aws-cdk/aws-lambda");
const apigw = require("@aws-cdk/aws-apigateway");
const hitcounter_1 = require("./hitcounter");
class CdkWorkshopStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // defines an AWS lambda resource
        const hello = new lambda.Function(this, 'HelloHandler', {
            runtime: lambda.Runtime.NODEJS_10_X,
            code: lambda.Code.fromAsset('lambda'),
            handler: 'hello.handler' // file is 'hello', function is 'handler'
        });
        const helloWithCounter = new hitcounter_1.HitCounter(this, 'HelloHitCounter', {
            downstream: hello
        });
        // defines an API Gateway REST API resource backed by our "hello" function
        new apigw.LambdaRestApi(this, 'Endpoint', {
            handler: helloWithCounter.handler
        });
    }
}
exports.CdkWorkshopStack = CdkWorkshopStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXdvcmtzaG9wLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLXdvcmtzaG9wLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyw4Q0FBOEM7QUFDOUMsaURBQWlEO0FBQ2pELDZDQUF3QztBQUV4QyxNQUFhLGdCQUFpQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQzdDLFlBQVksS0FBYyxFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUM1RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixpQ0FBaUM7UUFDakMsTUFBTSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDdEQsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1lBQ3JDLE9BQU8sRUFBRSxlQUFlLENBQUMseUNBQXlDO1NBQ25FLENBQUMsQ0FBQTtRQUVGLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSx1QkFBVSxDQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRTtZQUMvRCxVQUFVLEVBQUUsS0FBSztTQUNsQixDQUFDLENBQUE7UUFFRiwwRUFBMEU7UUFDMUUsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDeEMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLE9BQU87U0FDbEMsQ0FBQyxDQUFBO0lBRUosQ0FBQztDQUNGO0FBckJELDRDQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcbmltcG9ydCAqIGFzIGFwaWd3IGZyb20gJ0Bhd3MtY2RrL2F3cy1hcGlnYXRld2F5JztcbmltcG9ydCB7SGl0Q291bnRlcn0gZnJvbSBcIi4vaGl0Y291bnRlclwiO1xuXG5leHBvcnQgY2xhc3MgQ2RrV29ya3Nob3BTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQXBwLCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICAvLyBkZWZpbmVzIGFuIEFXUyBsYW1iZGEgcmVzb3VyY2VcbiAgICBjb25zdCBoZWxsbyA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ0hlbGxvSGFuZGxlcicsIHtcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xMF9YLFxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdsYW1iZGEnKSwgLy8gY29kZSBsb2FkZWQgZnJvbSBcImxhbWJkYVwiIGRpcmVjdG9yeSAtIHJlbGF0aXZlIHRvIHByb2plY3Qgcm9vdFxuICAgICAgaGFuZGxlcjogJ2hlbGxvLmhhbmRsZXInIC8vIGZpbGUgaXMgJ2hlbGxvJywgZnVuY3Rpb24gaXMgJ2hhbmRsZXInXG4gICAgfSlcblxuICAgIGNvbnN0IGhlbGxvV2l0aENvdW50ZXIgPSBuZXcgSGl0Q291bnRlcih0aGlzLCAnSGVsbG9IaXRDb3VudGVyJywge1xuICAgICAgZG93bnN0cmVhbTogaGVsbG9cbiAgICB9KVxuXG4gICAgLy8gZGVmaW5lcyBhbiBBUEkgR2F0ZXdheSBSRVNUIEFQSSByZXNvdXJjZSBiYWNrZWQgYnkgb3VyIFwiaGVsbG9cIiBmdW5jdGlvblxuICAgIG5ldyBhcGlndy5MYW1iZGFSZXN0QXBpKHRoaXMsICdFbmRwb2ludCcsIHtcbiAgICAgIGhhbmRsZXI6IGhlbGxvV2l0aENvdW50ZXIuaGFuZGxlclxuICAgIH0pXG5cbiAgfVxufVxuIl19