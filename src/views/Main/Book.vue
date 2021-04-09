<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div
          class="display-3 my-12 font-weight-normal text-center text-md-start"
        >
          Calculadora
        </div>
      </v-col>
      <v-row cols="12" md="8" class="mb-8">
        <MoneyView name="Comprar" :value="value" color="grey--text" />
        <MoneyView name="Vender" :value="value" />
      </v-row>
      <v-col cols="12" md="4">
        <KeyPad v-model="value"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MoneyView from "@/components/Wallet/MoneyView";
import KeyPad from "@/components/KeyPad";

export default {
  data: () => ({
    value: "0"
  }),
  components: {
    MoneyView,
    KeyPad,
  },
  async created() {
    await this.$store.dispatch("wallet/init_load");
    this.$store.commit("stopLoad");
  },
};
</script>