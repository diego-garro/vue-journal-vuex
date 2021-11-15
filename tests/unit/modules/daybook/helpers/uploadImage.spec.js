import cloudinary from "cloudinary"
import axios from "axios"

import uploadImage from "@/modules/daybook/helpers/uploadImage.js"

cloudinary.config({
  cloud_name: "diebuntu",
  api_key: "724221229563131",
  api_secret: "moCOrpct2uIItSmNkYxyiqZNJl0",
})

describe("Pruebas en el uploadImage", () => {
  test("debe de cargar un archivo y retornar el url", async (done) => {
    const { data } = await axios.get(
      "https://res.cloudinary.com/diebuntu/image/upload/v1636502343/l2nfoau7vy91raddkv5i.png",
      {
        responseType: "arraybuffer",
      }
    )
    const file = new File([data], "foto.jpg")
    const url = await uploadImage(file)

    expect(typeof url).toBe("string")

    // Tomar el ID
    const segments = url.split("/")
    const imageId = segments[segments.length - 1].replace(".png", "")
    cloudinary.v2.api.delete_resources(imageId, {}, () => {
      done()
    })
  })
})
