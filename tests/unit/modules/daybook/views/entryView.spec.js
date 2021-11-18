import { shallowMount } from "@vue/test-utils"
import { createStore } from "vuex"

import journal from "@/modules/daybook/store/journal"
import { journalState } from "../../../mock-data/test-journal-state"
import EntryView from "@/modules/daybook/views/EntryView.vue"

const createVuexStore = (initialState) =>
  createStore({
    modules: {
      journal: {
        ...journal,
        state: { ...initialState },
      },
    },
  })

describe("Pruebas en el EntryView component", () => {
  const store = createVuexStore(journalState)
  const mockRouter = {
    push: jest.fn(),
  }

  let wrapper

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallowMount(EntryView, {
      props: {
        id: "-Mo5dj4lF0GaZ4kCMAp0",
      },
      global: {
        mocks: {
          $router: mockRouter,
        },
        plugins: [store],
      },
    })
  })

  test("debe de sacar al usuario porque el id no existe", () => {
    const wrapper = shallowMount(EntryView, {
      props: {
        id: "este id no existe en el STORE",
      },
      global: {
        mocks: {
          $router: mockRouter,
        },
        plugins: [store],
      },
    })

    expect(mockRouter.push).toHaveBeenCalledWith({ name: "no-entry" })
  })

  test("debe de mostrar la entrada correctamente", () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(mockRouter.push).not.toHaveBeenCalledWith({ name: "no-entry" })
  })
})
