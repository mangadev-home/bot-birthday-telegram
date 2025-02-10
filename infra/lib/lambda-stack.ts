import path = require('path');
import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as lambdaNodejs from '@aws-cdk/aws-lambda-nodejs';
import * as events from '@aws-cdk/aws-events';
import * as targets from '@aws-cdk/aws-events-targets';

export class LambdaStack extends cdk.Stack {
  private morningName = 'morning';

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const morningLambda = new lambdaNodejs.NodejsFunction(this, `${this.morningName}Lambda`, {
      runtime: lambda.Runtime.NODEJS_16_X,
      entry: path.join(__dirname, `../../src/${this.morningName}Handler.js`),
      handler: 'handler',
      timeout: cdk.Duration.seconds(100),
    });

    new events.Rule(this, `${this.morningName}ScheduledRule`, {
      schedule: events.Schedule.expression('cron(0 12 * * ? *)'),
    }).addTarget(new targets.LambdaFunction(morningLambda));
  }
}
