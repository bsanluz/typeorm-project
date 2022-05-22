import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import RepoModule from './repo.module';
import UserResolver from './resolvers/user.resolver';
import MessageResolver from './resolvers/message.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { context } from './db/loaders';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
const gqlImports = [UserResolver, MessageResolver];

@Module({
  imports: [TypeOrmModule.forRoot(config), RepoModule, ...gqlImports,
  GraphQLModule.forRoot<ApolloDriverConfig>({
    autoSchemaFile: 'schema.gql',
    playground: true,
    installSubscriptionHandlers: true,
    driver:ApolloDriver,
    context
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
