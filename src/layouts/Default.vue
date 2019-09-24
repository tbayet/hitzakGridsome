<template>
  <v-app>
    <v-app-bar
      app
      dark
      shrink-on-scroll
      fade-img-on-scroll
      scroll-threshold="150"
      height="500"
    >
      <v-toolbar-title class="mx-auto toolbar_title">{{ title }}</v-toolbar-title>
      <template v-slot:img="{ props }">
        <g-image
          quality="100"
          v-bind="props"
          class="image_banner"
          width="1800"
          src="~/assets/bataclan_scene.png"
        ></g-image>
      </template>
      <template v-slot:extension>
        <v-tabs
          centered
          background-color="transparent"
        >
          <v-tab flat to="/">Dates</v-tab>
          <v-tab flat to="/bio">Bio</v-tab>
          <v-tab flat to="/lyrics">Lyrics</v-tab>
          <v-tab flat to="/gallery">Gallery</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-content class="ma-12">
      <slot/>
    </v-content>
    <v-speed-dial
      v-model="fab"
      bottom
      right
      direction="left"
      transition="slide-x-reverse-transition"
    >
      <template v-slot:activator>
        <v-btn
          :dark="fab"
          fab
        >
          <v-icon>fa-share-alt</v-icon>
        </v-btn>
      </template>
      <v-btn fab dark small href="https://www.facebook.com/hitzakband/" title="Facebook" target="_blank">
        <v-icon>fab fa-facebook-f</v-icon>
      </v-btn>
      <v-btn fab dark small href="https://www.youtube.com/user/hitzakband/videos" title="Youtube" target="_blank">
        <v-icon>fab fa-youtube</v-icon>
      </v-btn>
      <v-btn fab dark small href="https://hitzak.bandcamp.com/" title="Bandcamp" target="_blank">
        <v-icon>fab fa-bandcamp</v-icon>
      </v-btn>

    </v-speed-dial>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  name: 'App',
  title: 'Hitzak',
  methods: {
  },
  data () {
    return {
      title: 'HITZAK',
      fab: false,
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: "nyt-cheltenham";
  src: url("https://typeface.nyt.com/fonts/nyt-cheltenham-700-normal.woff");
}
.v-speed-dial {
  position: fixed;
}
.v-btn--floating {
  position: relative;
}
.toolbar_title {
  height: 90%;
  padding: 0 !important;
  font-family: nyt-cheltenham;
  font-size: 180% !important;
  padding-left: 20px !important;
  padding-right: 20px !important;
  text-shadow: 5px 5px 5px black
}
.image_banner {
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
