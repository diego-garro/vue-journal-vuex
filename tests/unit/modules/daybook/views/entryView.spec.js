import { shallowMount } from "@vue/test-utils"
import { createStore } from "vuex"

import Swal from "sweetalert2"

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

jest.mock("sweetalert2", () => ({
  fire: jest.fn(),
  showLoading: jest.fn(),
  close: jest.fn(),
}))

describe("Pruebas en el EntryView component", () => {
  const store = createVuexStore(journalState)
  store.dispatch = jest.fn()
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

  test("debe de borrar la entrada y salir", (done) => {
    Swal.fire.mockReturnValueOnce(Promise.resolve({ isConfirmed: true }))
    wrapper.find(".btn-danger").trigger("click")

    expect(Swal.fire).toHaveBeenCalledWith({
      title: "Está seguro?",
      text: "Una vez borrado, no se puede recuperar",
      showDenyButton: true,
      confirmButtonText: "Sí estoy seguro",
    })
    setTimeout(() => {
      expect(store.dispatch).toHaveBeenCalledWith(
        "journal/deleteEntry",
        "-Mo5dj4lF0GaZ4kCMAp0"
      )
      expect(mockRouter.push).toHaveBeenCalled()
      done()
    }, 1)
  })
})
