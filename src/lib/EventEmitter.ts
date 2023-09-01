export type EventHandler<K extends any[]> = (...args: K) => void
export type HandlerConfiguration = {
    once: boolean
}

export class EventEmitter<EventMap extends Record<string, any[]>> {
    private _eventHandlers: { [K in keyof EventMap]?: Map<EventHandler<EventMap[K]>, HandlerConfiguration> } = {}

    on<K extends keyof EventMap>(eventName: K, handler: EventHandler<EventMap[K]>) {
        const handlers = this._getHandlersByEvent(eventName)
        handlers.set(handler, { once: false })
        this._eventHandlers[eventName] = handlers
    }

    off<K extends keyof EventMap>(eventName: K, handler: EventHandler<EventMap[K]>) {
        const handlers = this._getHandlersByEvent(eventName)
        handlers.delete(handler)
    }

    emit<K extends keyof EventMap>(eventName: K, ...args: EventMap[K]) {
        const handlers = this._getHandlersByEvent(eventName)
        handlers.forEach((_, handler) => {
            handler(...args)
        })
    }

    private _getHandlersByEvent<K extends keyof EventMap>(eventName: K): Map<EventHandler<EventMap[K]>, HandlerConfiguration> {
        return this._eventHandlers[eventName] ?? new Map()
    }
}