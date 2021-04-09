<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="green" v-bind="attrs" v-on="on" block><v-icon class="mr-5">mdi-plus-circle-outline</v-icon>Agregar Monedas</v-btn>
    </template>
    <v-card>
        <v-toolbar
          dark
          color="green"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Agregar Galleta</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    data: ()=> ({
        dialog: false
    })
}
</script>