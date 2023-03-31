"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lambda = require("aws-cdk-lib/aws-lambda");
const s3 = require("aws-cdk-lib/aws-s3");
const cdk = require("aws-cdk-lib");
const s3n = require("aws-cdk-lib/aws-s3-notifications");
const app = new cdk.App();
const stack = new cdk.Stack(app, 'lambda-bucket-notifications');
const bucketA = new s3.Bucket(stack, 'MyBucket', {
    removalPolicy: cdk.RemovalPolicy.DESTROY,
});
const fn = new lambda.Function(stack, 'MyFunction', {
    runtime: lambda.Runtime.NODEJS_14_X,
    handler: 'index.handler',
    code: lambda.Code.fromInline(`exports.handler = ${handler.toString()}`),
});
const bucketB = new s3.Bucket(stack, 'YourBucket', {
    removalPolicy: cdk.RemovalPolicy.DESTROY,
});
bucketA.addObjectCreatedNotification(new s3n.LambdaDestination(fn), { suffix: '.png' });
bucketB.addEventNotification(s3.EventType.OBJECT_REMOVED, new s3n.LambdaDestination(fn));
app.synth();
/* eslint-disable no-console */
function handler(event, _context, callback) {
    console.log(JSON.stringify(event, undefined, 2));
    return callback(null, event);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcuYnVja2V0LW5vdGlmaWNhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnRlZy5idWNrZXQtbm90aWZpY2F0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUNqRCx5Q0FBeUM7QUFDekMsbUNBQW1DO0FBQ25DLHdEQUF3RDtBQUV4RCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUUxQixNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLDZCQUE2QixDQUFDLENBQUM7QUFFaEUsTUFBTSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUU7SUFDL0MsYUFBYSxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTztDQUN6QyxDQUFDLENBQUM7QUFFSCxNQUFNLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRTtJQUNsRCxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO0lBQ25DLE9BQU8sRUFBRSxlQUFlO0lBQ3hCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7Q0FDeEUsQ0FBQyxDQUFDO0FBRUgsTUFBTSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUU7SUFDakQsYUFBYSxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTztDQUN6QyxDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsNEJBQTRCLENBQUMsSUFBSSxHQUFHLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUN4RixPQUFPLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxHQUFHLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUV6RixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFWiwrQkFBK0I7QUFDL0IsU0FBUyxPQUFPLENBQUMsS0FBVSxFQUFFLFFBQWEsRUFBRSxRQUFhO0lBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQy9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnYXdzLWNkay1saWIvYXdzLWxhbWJkYSc7XG5pbXBvcnQgKiBhcyBzMyBmcm9tICdhd3MtY2RrLWxpYi9hd3MtczMnO1xuaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCAqIGFzIHMzbiBmcm9tICdhd3MtY2RrLWxpYi9hd3MtczMtbm90aWZpY2F0aW9ucyc7XG5cbmNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG5cbmNvbnN0IHN0YWNrID0gbmV3IGNkay5TdGFjayhhcHAsICdsYW1iZGEtYnVja2V0LW5vdGlmaWNhdGlvbnMnKTtcblxuY29uc3QgYnVja2V0QSA9IG5ldyBzMy5CdWNrZXQoc3RhY2ssICdNeUJ1Y2tldCcsIHtcbiAgcmVtb3ZhbFBvbGljeTogY2RrLlJlbW92YWxQb2xpY3kuREVTVFJPWSxcbn0pO1xuXG5jb25zdCBmbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24oc3RhY2ssICdNeUZ1bmN0aW9uJywge1xuICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTRfWCxcbiAgaGFuZGxlcjogJ2luZGV4LmhhbmRsZXInLFxuICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tSW5saW5lKGBleHBvcnRzLmhhbmRsZXIgPSAke2hhbmRsZXIudG9TdHJpbmcoKX1gKSxcbn0pO1xuXG5jb25zdCBidWNrZXRCID0gbmV3IHMzLkJ1Y2tldChzdGFjaywgJ1lvdXJCdWNrZXQnLCB7XG4gIHJlbW92YWxQb2xpY3k6IGNkay5SZW1vdmFsUG9saWN5LkRFU1RST1ksXG59KTtcblxuYnVja2V0QS5hZGRPYmplY3RDcmVhdGVkTm90aWZpY2F0aW9uKG5ldyBzM24uTGFtYmRhRGVzdGluYXRpb24oZm4pLCB7IHN1ZmZpeDogJy5wbmcnIH0pO1xuYnVja2V0Qi5hZGRFdmVudE5vdGlmaWNhdGlvbihzMy5FdmVudFR5cGUuT0JKRUNUX1JFTU9WRUQsIG5ldyBzM24uTGFtYmRhRGVzdGluYXRpb24oZm4pKTtcblxuYXBwLnN5bnRoKCk7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQ6IGFueSwgX2NvbnRleHQ6IGFueSwgY2FsbGJhY2s6IGFueSkge1xuICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShldmVudCwgdW5kZWZpbmVkLCAyKSk7XG4gIHJldHVybiBjYWxsYmFjayhudWxsLCBldmVudCk7XG59XG4iXX0=