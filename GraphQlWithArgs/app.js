const express = require('express');
const {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLList} = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const app = express();

const seedData = [
  {id: 1, language: 'JavaScript', loved: true},
  {id: 2, language: 'Scala', loved: true},
  {id: 3, language: 'Python', loved: true}
]

const LangaugeType = new GraphQLObjectType({
  name: 'ProgrammingLanguages',
  description: 'An Api for mordern programming languages',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    language: {
      type: GraphQLString
    },
    loved: {
      type: GraphQLBoolean
    }
  })
})

const rootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Entry point into the schema',
  fields: ()=> ({
    langaugeData: {
      type: GraphQLList(LangaugeType),
      resolve: () => seedData
    },
    singleLang: {
      type: LangaugeType,
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve: (_, args) => (
        seedData.find(eachObjectInSeedData => eachObjectInSeedData.id == args.id )
      )
    }
  })
})

const schema = new GraphQLSchema({query: rootQueryType})

app.use(
  '/graphql', graphqlHTTP({
    graphiql: true,
    schema
  }),
);

const PORT = 3000

app.listen(PORT, ()=> {
  console.log(`listening on port ${PORT}`)
})




