const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {GraphQLString, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLBoolean, GraphQLNonNull} = require('graphql');
const cors = require('cors')
const app = express();

const seedData = [
  {id:1, fruit: 'apple' ,  loved: false},
  {id:2, fruit: 'banana',  loved: true },
  {id:3, fruit: 'grapes',  loved: true }
]

const fruitType = new GraphQLObjectType({
  name: 'Fruit',
  description: 'Some fruits',
  fields: {
    id: {
      type: GraphQLInt
    },
    fruit: {
      type: GraphQLString
    },
    loved: {
      type: GraphQLBoolean
    }
  }
})


const rootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'RootQuery',
  fields: {
    fruits: {
      type: GraphQLList(fruitType),
      resolve: () => seedData
    },
    singleFruit: {
      type: fruitType,
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve: (_, args) => (
        seedData.find(fruit => fruit.id == args.id)
      )
    }
  }
})


const rootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'RootMutation',
  fields: {
    fruits: {
      type: fruitType,
      args: {
        fruit: {type: GraphQLNonNull(GraphQLString)},
        loved: {type: GraphQLNonNull(GraphQLBoolean)},
      },
      resolve: (_, {id, fruit, loved}) => {
        const newFruit = {id: seedData.length + 1, fruit: fruit, loved: loved}
        seedData.push(newFruit)
        return newFruit
      }
    }
  }
})

const schema = new GraphQLSchema({ query: rootQuery, mutation: rootMutation})
app.use('/graphql',cors(), graphqlHTTP({
  schema,
  graphiql: true
}))

const PORT =  3001
app.listen(PORT, ()=> {
  console.log(`Listening on port: ${PORT}`)
})