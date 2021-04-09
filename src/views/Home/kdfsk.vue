<template>
  <v-container>
    <div class="display-3 my-12 font-weight-normal text-center">Galletas</div>
    <v-sheet class="transparent pa-2 text-center rounded-xl mb-4 text-button">
      <v-row class="mb-5">
        <BalanceTotal name="Balance Total" :value="balance_total"/>
        <MoneyView name="Invertido" :value="inversion_total" color="grey--text"/>
        <MoneyView name="Ganancias" :value="ganancia_total" color="green--text"/>
      </v-row>
    </v-sheet>

    <v-row no-gutters>
      <!-- <v-col md="6" cols="12">
        <v-card color="orange darken-1" light>
          <v-card-subtitle class="headline font-weight-bold">
            MANA
          </v-card-subtitle>
          <v-card-title>
            331.91541667
            <span class="caption font-weight-bold mt-2 ml-1"> MANA </span>
          </v-card-title>
          <v-card-subtitle class="font-weight-medium">
            1,586.55 MXN
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col md="6" cols="12">
        <v-card color="blue-grey lighten-4" light>
          <v-card-subtitle class="headline font-weight-bold">
            Litecoin
          </v-card-subtitle>
          <v-card-title>
            1.16754119
            <span class="caption font-weight-bold mt-2 ml-1"> LTC </span>
          </v-card-title>
          <v-card-subtitle class="font-weight-medium">
            3.907.45 MXN
          </v-card-subtitle>
        </v-card>
      </v-col> -->
      <!-- <v-col md="6" cols="12">
        <GalletaCard v-if="mana_price" color="orange" :nombre="mana_price.name" :precio="mana_price.last" :cantidad="mana_price.cant"/>
      </v-col>
      <v-col md="6" cols="12">
        <GalletaCard v-if="ltc_price" color="blue-grey lighten-4" :nombre="ltc_price.name" :precio="ltc_price.last" :cantidad="ltc_price.cant" />
      </v-col> -->
      <!-- <v-col md="6" cols="12">
        <GalletaCard color="green lighten-2" nombre="USD" precio="20"  cantidad="20.94" />
      </v-col>
      <v-col md="6" cols="12">
        <GalletaCard color="pink lighten-4" nombre="Hugolivares" precio="-1500"  cantidad="10.94" />
      </v-col> -->
      <v-col cols="12">
        <v-card v-if="porcentajes" height="5px" class="d-flex transparent flex-row justify-space-between ma-2 rounded-pill overflow-hidden">
          <v-card class="rounded-pill" flat :width="porcentajes[0].cant+'%'" color="cyan" height="100%"></v-card>
          <v-card class="rounded-pill" flat :width="porcentajes[1].cant+'%'" color="orange darken-2" height="100%"></v-card>
        </v-card>
      </v-col>
      <v-col v-for="(coin, i) in portfolio" :key="i" md="6" cols="12">
        <GalletaCard
          :nombre="coin.name"
          :precio="coin.last"
          :cantidad="coin.cant"
        />
      </v-col>
    </v-row>

    <!-- <v-card color="orange darken-2" class="mt-2" dark v-if="mana">
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
          Ganancia
          {{ calcularGanancia("mana_mxn") }}
          MXN
        </div>
      </v-card-text> -->
    <!-- <v-card-subtitle>
        {{ mana }}
      </v-card-subtitle> -->
    <!-- </v-card>
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
          Ganancia
          {{ calcularGanancia("ltc_mxn") }}
          MXN
        </div>
      </v-card-text>
    </v-card> -->
  </v-container>
</template>

<script>
// import axios from 'axios'
import BalanceTotal from '@/components/Wallet/BalanceTotal'
import MoneyView from '@/components/Wallet/MoneyView'
import GalletaCard from "@/components/Galleta";
// import bitsoApi from "@/api/bitso_api";
import { mapGetters } from "vuex";
export default {
  data: () => ({
    // mana: null,
    // ltc: null,
    // original: {
    //   mana: { price: "3.00", cant: 331.91541667 },
    //   ltc: { price: "2670.00", cant: 1.16754119 },
    // },
    // wallet: {
    //   mana: {},
    //   ltc: {},
    //   eth: null,
    //   btc: null,
    // },
  }),
  methods: {
    // async getGalletas() {
    //   this.mana = await bitsoApi.get_mana();
    //   this.ltc = await bitsoApi.get_ltc();
    // },
    // calcularGanancia(galleta) {
    //   let rendimiento = 0;
    //   switch (galleta) {
    //     case "ltc_mxn":
    //       rendimiento =
    //         this.original.ltc.cant * this.ltc.last -
    //         this.original.ltc.cant * this.original.ltc.price;
    //       break;
    //     case "mana_mxn":
    //       rendimiento =
    //         this.original.mana.cant * this.mana.last -
    //         this.original.mana.cant * this.original.mana.price;
    //       break;
    //   }
    //   return Number.parseFloat(rendimiento).toFixed(2);
    // },
    // calcularInversion() {
    //   const inversion =
    //     this.original.mana.cant * this.original.mana.price +
    //     this.original.ltc.cant * this.original.ltc.price;
    //   return Number.parseFloat(inversion).toFixed(2);
    // },
  },
  computed: {
    // calcularRendimiento() {
    //   const rendimiento =
    //     this.original.ltc.cant * this.ltc.last -
    //     this.original.ltc.cant * this.original.ltc.price +
    //     this.original.mana.cant * this.mana.last -
    //     this.original.mana.cant * this.original.mana.price;
    //   return Number.parseFloat(rendimiento).toFixed(2);
    // },
    // balanaceTotal() {
    //   const balance =
    //     this.original.mana.cant * this.mana.last +
    //     this.original.ltc.cant * this.ltc.last;
    //   return Number.parseFloat(balance).toFixed(2);
    // },
    ...mapGetters("wallet", [
      "balance_total",
      "ganancia_total",
      "inversion_total",
      "portfolio",
      "porcentajes"
    ]),
  },
  async mounted() {
    // await this.getGalletas();
    // await this.$store.dispatch("wallet/getCoin", "btc");
    // await this.$store.dispatch("wallet/getCoin", "ltc");
    // await this.$store.dispatch("wallet/getCoin", "mana");
    await this.$store.dispatch("wallet/init_load");
    this.$store.commit('stopLoad')
  },
  components: {
    GalletaCard,
    BalanceTotal,
    MoneyView
  },
};

// {
//     "appId": "org.edham.captest",
//     "appName": "cap-test",
//     "bundledWebRuntime": false,
//     "webDir": "dist",
//     "server":{
//         "url": "http://192.168.0.15:8080",
//         "cleartext": true
//     }
// }
</script>