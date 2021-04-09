<template>
  <v-container>
    <div class="display-1 my-12 d-flex justify-center align-center">
      <v-avatar tile size="80">
        <v-img contain :src="require('@/assets/yt.png')" />
      </v-avatar>
      <label class="ml-3"> Youtube Premium </label>
    </div>
    <v-card color="red darken-4" dark>
      <v-card-title class="headline">
        Proxina fecha de facturacion
      </v-card-title>
      <v-card-subtitle> jueves, 4 de Marzo del 2021 </v-card-subtitle>
    </v-card>

    <v-card dark class="mt-3" v-for="tonto in items" :key="tonto.name">
      <div class="d-flex flex-no-wrap justify-start align-center">
        <v-avatar
          color="grey lighten-1"
          class="ma-3 mr-0 grey--text text--darken-3 title"
          size="45"
        >
          <!-- <v-icon class="grey--text">mdi-lightbulb-outline</v-icon> -->
          {{ tonto.name[0] }}
        </v-avatar>
        <div>
          <v-card-title class="headline">{{ tonto.name }}</v-card-title>
          <v-card-subtitle v-if="calcularMeses(tonto.meses) > 0">No ha pagado</v-card-subtitle>
          <v-card-subtitle v-else>Pagado</v-card-subtitle>
        </div>
        <v-spacer></v-spacer>
        <div class="mr-3">{{ costo * calcularMeses(tonto.meses) }} MXN</div>
      </div>
      <v-subheader
        class="mb-0 pb-0 grey darken-3 font-weight-bold"
        @click="tonto.open = !tonto.open"
      >
        PAGOS ABRIL 2020 - FEBRERO 2021
      </v-subheader>
      <v-card-text class="pa-0" v-if="tonto.open">
        <v-list class="grey darken-4 py-0 pt-1" dense>
          <v-list-item v-for="(mes, i) in tonto.meses" :key="i">
              <v-list-item-content :class="{'text-decoration-line-through': mes.pago}">
                <v-list-item-title>{{ mes.mes }}</v-list-item-title>
                <v-list-item-subtitle >{{ costo }} MXN</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <v-card class="mt-3" color="red darken-3">
      <v-card-title>Funados</v-card-title>
      <v-card dark color="red">
        <div class="d-flex flex-no-wrap justify-start align-center">
          <v-avatar color="red darken-4" class="ma-3 mr-0 title" size="45">
            <!-- <v-icon class="grey--text">mdi-lightbulb-outline</v-icon> -->
            {{ funado.name[0] }}
          </v-avatar>
          <div>
            <v-card-title class="headline">{{ funado.name }}</v-card-title>
            <v-card-subtitle>No ha pagado</v-card-subtitle>
          </div>
          <v-spacer></v-spacer>
          <div class="mr-3">{{ costo * 8 }} MXN</div>
        </div>
        <v-subheader
          class="mb-0 pb-0 grey darken-3 font-weight-bold"
          @click="funado.open = !funado.open"
        >
          PAGOS AGO-2020 NOV-2020
        </v-subheader>
        <v-card-text class="pa-0" v-if="funado.open">
          <v-list class="grey darken-4 py-0 pt-1" dense>
            <v-list-item v-for="(mes, i) in funado.meses" :key="i">
              <v-list-item-content>
                <v-list-item-title>{{ mes.mes }}</v-list-item-title>
                <v-list-item-subtitle>{{ costo }} MXN</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        name: "Hector",
        open: false,
        meses: [
          // { mes: "Marzo 2021", pago: false },
          { mes: "Febrero 2021", pago: true },
          { mes: "Enero 2021", pago: true },
          { mes: "Diciembre 2020", pago: true },
          { mes: "Noviembre 2020", pago: true },
          { mes: "Octubre 2020", pago: true },
          { mes: "Septiembre 2020", pago: true },
          { mes: "Agosto 2020", pago: true },
          { mes: "Julio 2020", pago: true },
          { mes: "Junio 2020", pago: true },
          { mes: "Mayo 2020", pago: true },
          { mes: "Abril 2020", pago: true },
        ],
      },
      {
        name: "Gera",
        open: false,
        meses: [
          // { mes: "Marzo 2021", pago: true },
          { mes: "Febrero 2021", pago: true },
          { mes: "Enero 2021", pago: true },
          { mes: "Diciembre 2020", pago: true },
          { mes: "Noviembre 2020", pago: true },
          { mes: "Octubre 2020", pago: true },
          { mes: "Septiembre 2020", pago: true },
          { mes: "Agosto 2020", pago: true },
          { mes: "Julio 2020", pago: true },
          { mes: "Junio 2020", pago: true },
          { mes: "Mayo 2020", pago: true },
          { mes: "Abril 2020", pago: true },
        ],
      },
      {
        name: "Rix",
        open: false,
        meses: [
          // { mes: "Marzo 2021", pago: false },
          { mes: "Febrero 2021", pago: true },
          { mes: "Enero 2021", pago: true },
          { mes: "Diciembre 2020", pago: true },
          { mes: "Noviembre 2020", pago: true },
          { mes: "Octubre 2020", pago: true },
          { mes: "Septiembre 2020", pago: true },
          { mes: "Agosto 2020", pago: true },
          { mes: "Julio 2020", pago: true },
          { mes: "Junio 2020", pago: true },
          { mes: "Mayo 2020", pago: true },
          { mes: "Abril 2020", pago: true },
        ],
      },
      {
        name: "Carlos",
        open: false,
        meses: [
          // { mes: "Marzo 2021", pago: false },
          { mes: "Febrero 2021", pago: false },
          { mes: "Enero 2021", pago: false },
          { mes: "Diciembre 2020", pago: true },
          { mes: "Noviembre 2020", pago: true },
          { mes: "Octubre 2020", pago: true },
          { mes: "Septiembre 2020", pago: true },
          { mes: "Agosto 2020", pago: true },
          { mes: "Julio 2020", pago: true },
          { mes: "Junio 2020", pago: true },
          { mes: "Mayo 2020", pago: true },
          { mes: "Abril 2020", pago: true },
        ],
      },
    ],
    funado: {
      name: "Adal",
      open: false,
      meses: [
        { mes: "Noviembre 2020", pago: false },
        { mes: "Octubre 2020", pago: false },
        { mes: "Septiembre 2020", pago: false },
        { mes: "Agosto 2020", pago: false },
        { mes: "Julio 2020", pago: false },
        { mes: "Junio 2020", pago: false },
        { mes: "Mayo 2020", pago: false },
        { mes: "Abril 2020", pago: false },
      ],
    },
    costo: Math.ceil(Number.parseFloat(179 / 6).toFixed(2)),
  }),
  methods: {
    calcularMeses(meses){
      let i = 0
      for(const mes in meses){
        if(!meses[mes].pago){
          i++
        }
      }
      return i
    }
  },
  mounted(){
    this.$store.commit("stopLoad");
  }
};
</script>