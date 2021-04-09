<template>
  <v-app>
    <app-loader />
    <v-main>
      <v-container fluid class="fill-height">
        <router-view />
      </v-container>
    </v-main>
    <bottom-navigation v-if="user" />
  </v-app>
</template>

<script>
import BottomNavigation from "@/components/AppBottomNavigation";
import AppLoader from "@/components/AppLoader";
import { mapGetters } from "vuex";
export default {
  components: {
    BottomNavigation,
    AppLoader,
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>