import { ApolloServer } from 'apollo-server'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { readFile } from 'fs/promises'
import util from 'util'

function later(delay: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay)
  })
}

const BASIC_DELAY = {
  requestDidStart(requestContext: any) {
    console.log('request started')
    console.log(
      `Query: ${util.inspect(requestContext.request.query, false, null, true)}`
    )
    return {
      async willSendResponse(context: any) {
        // Wait for 3 seconds
        await later(3_000)

        console.log(
          `Response: ${util.inspect(context.response, false, null, true)}`
        )
      },
    }
  },
}

;(async () => {
  const typeDefs = (await readFile(process.argv[2])).toString()

  const server = new ApolloServer({
    typeDefs,
    mocks: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  })

  const { url } = await server.listen({ port: 3000 })

  console.log(`Mock server ready at ${url}`)
})()
