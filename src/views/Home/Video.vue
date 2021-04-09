<template>
  <v-container>
    <div class="display-1 mb-6">Galletas</div>

    <v-card>
      <v-card-title>Total</v-card-title>
      <v-card-subtitle>{{ original.mana.cant * mana.last + original.ltc.cant * ltc.last }} MXN</v-card-subtitle>
      <v-card-title>Total Invertido</v-card-title>
      <v-card-subtitle>{{ original.mana.cant * original.mana.price + original.ltc.cant * original.ltc.price }} MXN</v-card-subtitle>
      <v-card-title>Total Ganancias</v-card-title>
      <v-card-subtitle>{{ original.ltc.cant * ltc.last - original.ltc.cant * original.ltc.price + original.mana.cant * mana.last - original.mana.cant * original.mana.price }} MXN</v-card-subtitle>
    </v-card>

    <v-card color="orange darken-2" class="mt-2" dark v-if="mana">
      <v-card-title class="display-1">MANA</v-card-title>
      <v-card-subtitle class="text- pb-0">{{ mana.last }} MXN</v-card-subtitle>
      <v-card-text>
        <v-divider></v-divider>
        <div class="py-0 text-button">
          Precio de compra {{ original.mana.price }} MXN
        </div>
        <div class="py-0 my-n2 text-button">
          Cantidad {{ original.mana.cant }} mana
        </div>
        <div class="py-0 my-n2 text-button">
          Gastado {{ original.mana.cant * original.mana.price }} MXN
        </div>
        <div class="py-0 my-n2 text-button">
          Acutal {{ original.mana.cant * mana.last }} MXN
        </div>
        <div class="py-0 my-n2 text-button">
          Ganancia {{ original.mana.cant * mana.last - original.mana.cant * original.mana.price }} MXN
        </div>
      </v-card-text>
      <!-- <v-card-subtitle>
        {{ mana }}
      </v-card-subtitle> -->
    </v-card>
    <v-card color="blue-grey" class="mt-2" dark>
      <v-card-title class="display-1"> LTC</v-card-title>
      <v-card-subtitle class="text- pb-0">{{ ltc.last }} MXN</v-card-subtitle>
      <v-card-text>
        <v-divider></v-divider>
        <div class="py-0 text-button">
          Precio de compra {{ original.ltc.price }} MXN
        </div>
        <div class="py-0 my-n2 text-button">
          Cantidad {{ original.ltc.cant }} ltc
        </div>
        <div class="py-0 my-n2 text-button">
          Gastado {{ original.ltc.cant * original.ltc.price }} MXN
        </div>
        <div class="py-0 my-n2 text-button">
          Acutal {{ original.ltc.cant * ltc.last }} MXN
        </div>
        <div class="py-0 my-n2 text-button">
          Ganancia {{ original.ltc.cant * ltc.last - original.ltc.cant * original.ltc.price }} MXN
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
// import axios from 'axios'
export default {
  data: () => ({
    mana: null,
    ltc: null,
    original: {
      mana: { price: "3.00", cant: 331.91 },
      ltc: { price: "2670.00", cant: 1.1675 },
    },
  }),
  methods: {
    async get_mana() {
      const response = await fetch("http://192.168.0.15:3000/mana_mxn");
      return await response.json();
    },
    async get_ltc() {
      const response = await fetch("http://192.168.0.15:3000/ltc_mxn");
      return await response.json();
    },
  },
  async mounted() {
    this.mana = await this.get_mana();
    this.ltc = await this.get_ltc();
  },
};
</script>