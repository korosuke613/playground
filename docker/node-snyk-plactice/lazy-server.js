import Fastify from "fastify";

const fastify = Fastify()
fastify.get('/delayed', async (request, reply) => {
    const SECONDS_DELAY = 10000
    console.log(`request: ${JSON.stringify(request.headers)}`)
    await new Promise(resolve => {
        setTimeout(() => resolve(), SECONDS_DELAY)
    })
    return { hello: 'delayed world' }
})

const start = async () => {
    try {
        await fastify.listen(3000, "localhost")
        console.log(`*^!@4=> Process id: ${process.pid}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

async function closeGracefully(signal) {
    console.log(`*^!@4=> Received signal to terminate: ${signal}`)

    await fastify.close()
    // await db.close() if we have a db connection in this app
    // await other things we should cleanup nicely
    process.kill(process.pid, signal);
}
process.once('SIGINT', closeGracefully)
process.once('SIGTERM', closeGracefully)

start()
