import uploadImage from "@/modules/daybook/helpers/uploadImage.js"
import axios from "axios"

describe("Pruebas en el uploadImage", () => {
  test("debe de cargar un archivo y retornar el url", async () => {
    const { data } = await axios.get(
      "https://res.cloudinary.com/diebuntu/image/upload/v1636502343/l2nfoau7vy91raddkv5i.png",
      {
        responseType: "arraybuffer",
      }
    )
    const file = new File([data], "foto.jpg")
    const url = await uploadImage(file)

    expect(typeof url).toBe("string")
  })
})
