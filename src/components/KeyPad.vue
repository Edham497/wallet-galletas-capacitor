<template>
  <v-row>
    <v-col v-for="i in 9" :cols="4" :key="i" align="center" justify="center">
      <v-btn fab x- large @click="emitChar(i)">{{ i }}</v-btn>
    </v-col>
    <v-col align="center" justify="center">
      <v-btn fab x- large @click="emitChar('.')">.</v-btn>
    </v-col>
    <v-col align="center" justify="center">
      <v-btn fab x- large @click="emitChar(0)">0</v-btn>
    </v-col>
    <v-col align="center" justify="center">
      <v-btn fab x- large @click="deleteChar"><v-icon>mdi-backspace</v-icon></v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
    data: ()=> ({
        value: ''
    }),
    methods: {
        emitChar(i){
            this.value = this.value + i
            this.$emit("input", this.value)
        },
        deleteChar(){
            this.value = this.value.substr(0, this.value.length -1)
            this.$emit("input", this.value)
        }
    }
}
</script>

