import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { WizardModule } from './wizard/wizard.module';
import { RequestTimingMiddleware } from './middleware/requestTiming.middleware';

@Module({
  imports: [WizardModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestTimingMiddleware).forRoutes('*'); // Apply to all routes, use specific path or controller if needed
  }
}
