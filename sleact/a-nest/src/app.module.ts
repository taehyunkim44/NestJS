import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';

// // 외부(AWS,GCP 같은 곳에서)에서 env 정보를 받아서 사용할때
// const getEnv = async () => {
//   // const response = await axios.get('/비밀요청');
//   // return response.data;
// };

// providers 원형
// @Module({
//   // forRoot() 같은 것들은 설정을 넣어주기 위한 함수
//   // imports: [ConfigModule.forRoot({ isGlobal: true, load: [getEnv] })],
//   imports: [ConfigModule.forRoot({ isGlobal: true })],
//   controllers: [AppController],
//   providers: [
//     {
//       provide: AppService, // provide: 고유한 키 => injectable되는 class를 넣는다면 알아서 class이름을 고유한 키로 작동시킴
//       useValue: '123',
//       useFactory: () => {
//          // 별의별 작업
//          return{
//            a: 'b',
//          }
//       }
//       useClass: AppService,
//     },
//     {
//        provide: 'CUSTOM_KEY',
//        useValue: 'CUSTOM_VALUE',
//      }
//   ],
// })

@Module({
  // forRoot() 같은 것들은 설정을 넣어주기 위한 함수
  // imports: [ConfigModule.forRoot({ isGlobal: true, load: [getEnv] })],
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
