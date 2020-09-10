import { ConfigValidatorFactory } from "./config-validator/ConfigValidator.factory"
import { WatcherFactory } from "./watcher/Watcher.factory"
import { EventHandlerFactory } from "./event-handler/EventHandler.factory"

ConfigValidatorFactory.make().validate().then(() => {
  console.log("watching..")

  WatcherFactory.make().on("line", function(data: string) {
    let metadata = data.match(/\[.*]\s(SXB_EVENT.*)/)
    if (metadata == null) return
    metadata = metadata[1].split(':')
  
    console.log("EVENT : " + metadata[1] + " => " + metadata[2])

    let eventHandler = EventHandlerFactory.make()
    eventHandler.handleEvent(metadata[1], metadata[2])
      .catch(reason => { console.error(reason) })
  })
}).catch((reason: Error) => {
  console.error(reason.message)
})