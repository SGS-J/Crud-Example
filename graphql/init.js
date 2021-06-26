const { graphqlHTTP } = require("express-graphql");
const {
  loadSchemaSync,
  GraphQLFileLoader,
  addResolversToSchema,
} = require("graphql-tools");

const resolvers = require("./resolvers");

const schema = loadSchemaSync("./**/*.graphql", {
  loaders: [new GraphQLFileLoader()],
});

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers,
});

module.exports = graphqlHTTP({
  graphiql: true,
  schema: schemaWithResolvers,
});
