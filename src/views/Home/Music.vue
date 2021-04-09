<template>
  <v-container>
    <div class="display-1 mb-6">Music</div>
    <v-card color="#385F73" dark>
      <v-card-title class="headline"> Unlimited music now </v-card-title>

      <v-card-subtitle
        >Listen to your favorite artists and albums whenever and wherever,
        online and offline.</v-card-subtitle
      >

      <v-card-actions>
        <v-btn text> Listen Now </v-btn>
      </v-card-actions>
    </v-card>

    <v-card v-for="(item, i) in items" :key="i" :color="item.color" dark class="mt-3">
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title class="headline" v-text="item.title"></v-card-title>

          <v-card-subtitle v-text="item.artist"></v-card-subtitle>

          <v-card-actions>
            <v-btn
              v-if="item.artist === 'Ellie Goulding'"
              class="ml-2 mt-3"
              fab
              icon
              height="40px"
              right
              width="40px"
            >
              <v-icon>mdi-play</v-icon>
            </v-btn>

            <v-btn v-else class="ml-2 mt-5" outlined rounded small>
              START RADIO
            </v-btn>
          </v-card-actions>
        </div>

        <v-avatar class="ma-3" size="125" tile>
          <v-img :src="item.src"></v-img>
        </v-avatar>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
    ],
  }),
};
</script>