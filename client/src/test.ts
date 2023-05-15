import { greetUser } from '@monorepo/shared';
import { greetUserDeeply } from '@monorepo/shared/deep';
// import { greetUserDeeply } from '@monorepo/shared/deep';
greetUserDeeply;

import { RemovalPolicy, CfnOutput } from 'aws-cdk-lib';
import { Certificate, CertificateValidation } from 'aws-cdk-lib/aws-certificatemanager';

console.log(RemovalPolicy.RETAIN);
greetUser('client');
greetUserDeeply('client');
