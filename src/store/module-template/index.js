import state from "./state"
import * as mutations from "./mutations"
import * as getters from "./getters"
import * as actions from "./actions"

const myCustomModule = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
}

export default myCustomModule
