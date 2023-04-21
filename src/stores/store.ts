import { ref, computed } from "vue"
import axios from "axios"
import { useRouter, useRoute } from "vue-router"
import { defineStore } from "pinia"
import type { authUser } from "@/types/authUser"
import type { Role } from "../types/role";
import type { User } from "../types/user"
import data from "../data/db.json"

export const userAuthStore = defineStore("user", () => {

  const authUser = ref<authUser | null>()
  const router = useRouter()
  const id = ref<number>(1)
  const roles = ref<Role[]>([])
  const drawer = ref<Boolean>(false)

  const baseUrl = "https://my-json-server.typicode.com/mark-azdev/azdev-json-server"

  const doubleCount = computed(() => id.value * 2)

  const role = computed<Role>(() => roles.value.find((role) => role.id === id.value) || {} as Role)

  async function registerUser(user: User) {
    try {
      const res = await axios.post(`${baseUrl}/users`, user)
      authUser.value = { id: id.value, name: res.data.name, email: res.data.email, token: "fake-jwt-token" }
      localStorage.setItem("authUser", JSON.stringify(authUser.value))
      axios.defaults.headers.common["Authorization"] = `Bearer ${authUser.value.token}`
    } catch (error) {
      router.push({ name: "NetworkError" })
    }
  }

  async function login(name: string, password: string) {
    const res = await axios.get(`${baseUrl}/users?userName=${name}&password=${password}`)
    const user = res.data[0]
    authUser.value = { id: user.id, name: user.name, email: user.email, token: user.token }
    console.log(`Bearer ${authUser.value.token}`)
    localStorage.setItem("authUser", JSON.stringify(authUser.value))
    axios.defaults.headers.common["Authorization"] = `Bearer ${authUser.value.token}`
  }

  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function getRoles() {

    // await sleep(5000)

    let rolesObject;

    try {
      if (localStorage.getItem("roles") !== null) {
        rolesObject = JSON.parse(localStorage.getItem("roles") || "{}")
        if (rolesObject.timestamp) {
          const diff = new Date().getTime() - rolesObject.timestamp
          const daysDifference = Math.floor(diff / 1000 / 60 / 60 / 24);
          if (daysDifference === 0 && rolesObject.value) {
            roles.value = rolesObject.value
            return
          }
        }
      }
      
      //const res = await axios.get(`https://localhost:7233/roles`)
      //const res = await axios.get(`${baseUrl}/roles`)

      const res: any = { data: data.roles }

      roles.value = JSON.parse(JSON.stringify(res.data))
      // rolesObject = { "value": roles.value, "timestamp": new Date().getTime() }
      // localStorage.setItem("roles", JSON.stringify(rolesObject))
    }
    catch (error) {
      router.push({ name: "NetworkError" })
    }
  }

  return { authUser, registerUser, doubleCount, login, getRoles, roles, role, id }
})
