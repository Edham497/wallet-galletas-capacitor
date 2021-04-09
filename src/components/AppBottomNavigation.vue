<template>
  <v-bottom-navigation
    v-model="value"
    :background-color="color"
    dark
    color="lighten-4"
    app
    grow
    shift
  >
    <v-btn
      text
      v-for="(item, i) in items"
      :key="i"
      height="100%"
      @click="$router.push(item.ref).catch(() => {})"
    >
      <span>{{ item.name }}</span>
      <v-icon class="pb-1">{{ item.icon }}</v-icon>
    </v-btn>
    <!-- <v-menu offset-x>
      <template v-slot:activator="{ on, attrs }">
        <v-btn height="100%">
          <span>{{ user.name }}</span>
          <v-avatar color="grey white--text" size="25">
            <v-img
              v-bind="attrs"
              v-on="on"
              src="https://cdn.vuetifyjs.com/images/cards/plane.jpg"
            ></v-img>
          </v-avatar>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="i in 4" :key="i">
          <v-list-item-title>item {{ i }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu> -->
  </v-bottom-navigation>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    value: "1",
    items: [
      { name: "Wallet", icon: "mdi-wallet", ref: "/video" },
      { name: "Simulador", icon: "mdi-image", ref: "/image" },
      { name: "Youtube Premium", icon: "mdi-music-note", ref: "/music" },
      // { name: "Book", icon: "mdi-book", ref: "/book" },
    ],
  }),
  computed: {
    ...mapGetters(["user"]),
    color() {
      switch (this.value) {
        case 0:
          return "black";
        case 1:
          return "blue-grey darken-4";
        case 2:
          return "red darken-2";
        case 3:
          return "indigo";
        default:
          return "black";
      }
    },
  },
  created() {
    switch(this.$router.history.current.path){
      case '/video': this.value = 0; break;
      case '/image': this.value = 1; break;
      case '/music': this.value = 2; break;
    }
  }
};
</script>