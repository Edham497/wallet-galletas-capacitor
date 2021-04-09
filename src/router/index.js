import router from "./routes"

import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;

async function isLogged() {
  const user = await Storage.get({ key: 'user' })
  return JSON.parse(user.value)
}

/* eslint-disable */
router.beforeEach(async (to, from, next) => {
  const need_auth = ['/music', '/image', '/video', '/book'].includes(to.path)
  const logged = await isLogged()
  if (logged && need_auth) {
    next()
  } else {
    if (need_auth) {
      // next('/about')
      next()
    } else {
      next()
    }
  }
})

/* eslint-enable */

export default router
