import { computed } from "mobx"
import {
  connectReduxDevTools,
  idProp,
  model,
  Model,
  modelAction,
  ModelAutoTypeCheckingMode,
  registerRootStore,
  setGlobalConfig,
  prop,
  tProp,
  types,
} from "mobx-keystone"

setGlobalConfig({
    modelAutoTypeChecking: ModelAutoTypeCheckingMode.AlwaysOn,
})

@model("todoSample/Todo")
export class Todo extends Model({
  id: idProp,
  text: prop<string>(),
  done: prop(false)
}) {
  @modelAction
  setDone(done: boolean) {
    this.done = done
  }

  @modelAction
  setText(text: string) {
    this.text = text
  }
}

@model("todoSample/TodoList")
export class TodoList extends Model({
  todos: prop<Todo[]>(() => [])
}) {
  @computed
  get pending() {
    return this.todos.filter((t) => !t.done)
  }

  @computed
  get done() {
    return this.todos.filter((t) => t.done)
  }

  @modelAction
  add(todo: Todo) {
    this.todos.push(todo)
  }

  @modelAction
  remove(todo: Todo) {
    const index = this.todos.indexOf(todo)
    if (index >= 0) {
      this.todos.splice(index, 1)
    }
  }
}

// export function createDefaultTodoList(): TodoList {
//   // the parameter is the initial data for the model
//   return new TodoList({
//     todos: [
//       new Todo({ text: "make mobx-keystone awesome!" }),
//       new Todo({ text: "spread the word" }),
//       new Todo({ text: "buy some milk", done: true }),
//     ],
//   })
// }

export function createRootStore(): TodoList {
//   const rootStore = createDefaultTodoList()

  // although not strictly required, it is always a good idea to register your root stores
  // as such, since this allows the model hook `onAttachedToRootStore` to work and other goodies
  registerRootStore(rootStore)

  // we can also connect the store to the redux dev tools
  const remotedev = require("remotedev")
  const connection = remotedev.connectViaExtension({
    name: "Todo List Example",
  })

  connectReduxDevTools(remotedev, connection, rootStore)

  return rootStore
}
