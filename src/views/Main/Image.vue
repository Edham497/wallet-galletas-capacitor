<template>
  <v-container>
    <div class="display-3 my-12 font-weight-normal text-center">Calculadora</div>
    <v-row no-gutters>
      <v-col cols="12">
        <v-item-group active-class="blue" v-model="coinSelected">
          <v-row>
            <v-col v-for="(book, i) in books" :key="i" cols="6">
              <v-item v-slot="{ active, toggle }">
                <v-card light @click="toggle">
                  <v-card-subtitle class="headline font-weight-bold pb-0">
                    {{ book.name }}
                  </v-card-subtitle>
                  <v-card-subtitle class="font-weight-medium pt-0">
                    {{ book.value.last }} MXN
                  </v-card-subtitle>
                </v-card>
              </v-item>
            </v-col>
            <v-col></v-col>
          </v-row>
        </v-item-group>
      </v-col>
      <v-col cols="12">
        <v-text-field
          class="centered-input"
          placeholder="100"
          readonly
          v-model="numero"
          single-line
          outlined
        ></v-text-field>
        <v-text-field
          class="centered-input"
          placeholder="100"
          readonly
          single-line
          disabled
          v-model="conversion"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-row no-gutters>
          <v-col v-for="i in 3" :key="i">
            <v-btn text block @click="keypad(i)">{{ i }}</v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col v-for="i in 3" :key="i + 3">
            <v-btn text block @click="keypad(i+3)">{{ i + 3 }}</v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col v-for="i in 3" :key="i + 6">
            <v-btn text block @click="keypad(i+6)">{{ i + 6 }}</v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col>
            <v-btn text block @click="keypad('.')">.</v-btn>
          </v-col>
          <v-col>
            <v-btn text block @click="keypad(0)">0</v-btn>
          </v-col>
          <v-col>
            <v-btn text block @click="deleteKey"><v-icon>mdi-backspace</v-icon></v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: ()=>({
    numero: "",
    coinSelected: null,
    conversion: 0
  }),
  async created() {
    await this.$store.dispatch("wallet/init_load");
    this.$store.commit("stopLoad");
    console.log(this.books);
  },
  computed: {
    ...mapGetters("wallet", ["books"]),
  },
  watch: {
    coinSelected(){
      if(this.coinSelected != null){
        this.conversion = this.numero / this.books[this.coinSelected].value.last
      }
    }
  },
  methods: {
    keypad(i){
      this.numero = this.numero + i
      if(this.coinSelected != null){
        this.conversion = this.numero / this.books[this.coinSelected].value.last
      }
    },
    deleteKey(){
      this.numero = this.numero.substring(0, this.numero.length-1)
      this.conversion = this.numero / this.books[this.coinSelected].value.last
    }
  }
};
</script>

<style scoped>
.centered-input >>> input {
  text-align: center;
}
</style>