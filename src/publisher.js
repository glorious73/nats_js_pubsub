const { StringCodec, connect } = require("nats");

const main = async () => {
    const nc = await connect({ servers: ["localhost:4222"]});
    console.log("Publisher is connected to NATS.");

    const sc = StringCodec();

    nc.publish("hello", sc.encode("Hello NATS to two subscribers!"));
    await nc.drain();
};

main();