<template>
  <v-col cols="6" md="6" :class="color" class="text-center text-md-start">
    <div v-text="name" />
    <div class="title font-weight-bold" v-text="`${value?value:0} ${currency}`" />
  </v-col>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    currency: {
        type: String,
        required: false,
        default:" MXN"
    },
    color: {
        type: String,
        required: false,
        default: ''
    }
  },
};
</script>