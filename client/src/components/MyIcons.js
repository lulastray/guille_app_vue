import Vue from 'vue'
import Vuetify from 'vuetify/lib'

const MY_ICONS = {
 rewards:"@/assets/images/icons/rewards_icon",
 tasks: "@/assets/images/icons/rewards_icon"
}

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    values: MY_ICONS,
  },
})