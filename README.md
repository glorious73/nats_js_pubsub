# NATS Pub/Sub Js Clients
This repository contains a publisher and a subscriber to the NATS server.

## Purpose
Demonstrate the ability to use [NATS](https://nats.io/) Pub/Sub in distributed systems.

## How to run
1. Install NATS on your machine and run the nats server. [Docs can be found here](https://docs.nats.io/running-a-nats-service/introduction/installation).
2. Clone the repository.
3. Hit `npm install` on a terminal window in the project root.
4. Run `node subscriber.js` and keep it running.
5. Open a new terminal window and run `publisher.js`.
6. Go back to the subscriber terminal window and confirm receiving the published message.

## Interoperability
There is [another repository](https://github.com/glorious73/nats_csharp_pubsub) that has a .NET client to NATS which has a subscriber that can receive messages from this one.

## References
- [NATS Documentation](https://docs.nats.io/nats-concepts/subjects).
- The briliant video by DevGuyAhnaf [on YouTube](https://www.youtube.com/watch?v=FugnvZs012Y).