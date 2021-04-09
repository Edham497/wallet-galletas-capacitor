<template>
  <v-col cols="12" md="12" class="text-center text-md-start">
    <div class="text-subtitle-1">{{name}}</div>
    <div class="display-1 font-weight-bold" v-text="`${value} MXN`" />
  </v-col>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
}
</script>