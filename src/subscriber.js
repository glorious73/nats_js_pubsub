const { StringCodec, connect } = require("nats");

const main = async () => {
    const nc = await connect({ servers: ["localhost:4222"]});
    console.log("Subscriber is connected to NATS.");

    const sc = StringCodec();

    const sub = nc.subscribe("hello");

    for await (const m of sub) {
        console.log(`[${sub.getProcessed()}]: ${sc.decode(m.data)}`);
    }
    console.log("subscription closed");
    
};

main();