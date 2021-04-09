<template>
  <v-card :color="color" flat class="ma-2">
    <!-- <v-row no-gutters>
      <v-col cols="6"> -->
    <v-card-title class="headline font-weight-bold opacity-sm">
      {{ nombre }}
    </v-card-title>
    <v-card-subtitle class="font-weight-bold mb-0 mb-n10">
      {{ precio }} MXN
    </v-card-subtitle>
    <!-- </v-col>
      <v-col cols="6"> -->
    <v-card-title class="justify-end">
      {{ cantidad }}
      <span class="caption font-weight-bold mt-1 ml-1"> {{ nombre }} </span>
    </v-card-title>
    <v-card-subtitle class="font-weight-medium text-end">
      {{ valor }}
    </v-card-subtitle>
    <!-- </v-col>
    </v-row> -->
  </v-card>
</template>

<script>
export default {
  props: {
    nombre: {
      type: String,
      required: true,
      default: "Galletas",
    },
    precio: {
      required: true,
      default: 15,
    },
    cantidad: {
      required: true,
      default: 1500,
    },
    dark: {
      type: Boolean,
    },
  },
  computed: {
    valor() {
      const precio = this.precio * this.cantidad;
      return `${Number.parseFloat(precio).toFixed(2)} MXN`;
    },
    color() {
      switch (this.nombre) {
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