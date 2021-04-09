<template>
  <v-container>
    <v-row no-gutters justify="center" align="center">
      <v-col md="5" cols="12">
        <v-row>
          <v-col cols="12">
            <div class="display-3 my-12 font-weight-normal text-center text-md-start">Galletas</div>
          </v-col>
          <BalanceTotal name="Balance Total" :value="balance_total" />
          <MoneyView
            name="Ganancias"
            color="green--text"
            :value="ganancia_total"
          />
          <MoneyView
            name="Invertido"
            color="grey--text"
            :value="inversion_total"
          />
          <v-col cols="12" md="10">
            <AgregarGalleta />
          </v-col>
        </v-row>
      </v-col>
      <v-col md="7" cols="12">
        <v-row no-gutters justify="center" align="center">
          <CoinCap />
          <v-col v-for="(coin, i) in portafolio" :key="i" md="6" cols="12">
            <GalletaCard
              :nombre="coin.name"
              :precio="coin.last"
              :cantidad="coin.cant"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import axios from 'axios'
import BalanceTotal from "@/components/Wallet/BalanceTotal";
import AgregarGalleta from "@/components/Wallet/AgregarGalleta";
import MoneyView from "@/components/Wallet/MoneyView";
import CoinCap from "@/components/Wallet/CoinCap";
import GalletaCard from "@/components/Galleta";
// import bitsoApi from "@/api/bitso_api";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("wallet", [
      "balance_total",
      "ganancia_total",
      "inversion_total",
      "portafolio",
    ]),
  },
  async mounted() {
    await this.$store.dispatch("wallet/init_load");
    this.$store.commit("stopLoad");
  },
  components: {
    GalletaCard,
    BalanceTotal,
    MoneyView,
    CoinCap,
    AgregarGalleta,
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