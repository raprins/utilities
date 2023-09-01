# Utilities
These are some utilities function or Classes that I use

## Event Emitter
This is a simple Typed Event Emitter
```ts
    import { EventEmitter } from "@raprincis/utilities"

    type EventMap = {
        connected : []
    }

    // Declare Class with 
    export default class MyClass extends EventEmitter<EventMap> {}

    // Somewhere in code
    const instance = MyClass()
    instance.on("connected", () => { /** */ })

```