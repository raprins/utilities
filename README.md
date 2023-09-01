# Utilities
These are some utilities function or Classes that I use

## Event Emitter
This is a simple Typed Event Emitter
```ts
    import { EventEmitter } from "@raprincis/utilities";

    type Events = {
        // Event when user is connected
        connected: [user: { firstname: string }]
    }

    class ConnectionManager extends EventEmitter<Events> {
        /** Some other implementation */
    }

    const service = new ConnectionManager()
    service.on("connected", (user) => {
        console.log(`User ${user.firstname} is connected`)
    })

    service.emit("connected", { firstname: "RAKOTOMANGA" })
```