<template>
  <v-col cols="12">
    <v-card
        flat
      v-if="porcentajes"
      height="10px"
      class="d-flex transparent flex-row justify-space-between ma-2 my-10 rounded-pill overflow-hidden"
    >
      <v-tooltip top v-for="coin in porcentajes" :key="coin.coin">
        <template v-slot:activator="{ on, attrs }">
          <v-card
          v-on="on"
          v-bind="attrs"
            class="rounded-pill"
            flat
            :color="getColor(coin.coin)"
            height="100%"
            :width="(coin.cant - .35) + '%'"
          ></v-card>
        </template>
        <span class="text-center">{{coin.coin}}<br>{{coin.cant}}%</span>
      </v-tooltip>
    </v-card>
  </v-col>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("wallet", ["porcentajes"]),
  },
  methods: {
    getColor(name) {
      switch (name.toUpperCase()) {
        case "MANA":
          return "orange darken-2";
        case "LTC":
          return "cyan ";
        case "BTC":
          return "yellow darken-3";
        case "ETH":
          return "purple darken-3";
        default:
          return "";
      }
    },
  },
};
</script>