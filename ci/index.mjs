import { connect } from "@dagger.io/dagger"

connect(async (client) => {
    const source = client.container()
                                    .from("node:16-slim")
                                    .withDirectory("/src", client.host().directory(),{
                                        exclude: ["node_modules/", "ci/"]
                                    })

    const runner = source.withExec(["npm", "install"])

    const builder = runner.withExec(["next", "build"]).directory("/build");

    await builder.export("/build");
    
    const out = await builder.entries()
    console.log(out)
}, {
    LogOutput: process.stdout
})