import { createRouter,createWebHistory } from "vue-router";
import Home from "@/components/Home"
import Result from "@/components/Result"
const routes = [
    {
        path : '/',
        component : Home 
    },
    {
        path: '/result',
        component : Result
    }
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

  export default router