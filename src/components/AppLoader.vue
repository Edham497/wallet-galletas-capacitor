<template>
  <v-overlay :value="loader" class="d-flex flex-col justify-center text-center">
    <v-col>
      <v-progress-circular indeterminate size="64"></v-progress-circular>
      <div class="mt-5">cargando tu mierda</div>
    </v-col>
  </v-overlay>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["loader"]),
  },
};
</script>