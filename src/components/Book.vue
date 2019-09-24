<template>
 <v-responsive :aspect-ratio="4/3" max-height="60vh">
    <div id="flipbook">
      <div class="hard">
        <g-image
          quality="100"
          class="cover_image"
          width="920"
          src="~/assets/lbb.png"
        ></g-image>
      </div>
      <div class="cover_back hard"></div>
      <div
        v-for="(edge, i) in pages"
        :key="i"
        :class="{'hard': true, 'radius': true, 'odd': !(i % 2)}"
      >
        <div class="book_page">
          <h1>{{ edge.node.name }}</h1>
          <div v-html="edge.node.content"></div>
        </div>
      </div>
      <div class="cover_back hard"></div>
      <div class="cover_front hard">
        <g-image 
          quality="100"
          class="cover_image last"
          width="920"
          src="~/assets/lbb.png"
        ></g-image>
      </div>
    </div>
  </v-responsive>
</template>

<script>

import Turn from './turnjs/lib/turn.js'
import jQuery from 'jquery'

export default {
  name: 'Book',
  props: {
    pages: Array
  },
  methods: {
    onResize () {
      jQuery('#flipbook').turn('size', '100%', '100%')
    }
  },
  mounted () {
    Turn(jQuery, window)
    jQuery('#flipbook').turn({
      width: '100%',
      height: '100%',
      autoCenter: true
    });
    window.addEventListener('resize', this.onResize )
  },
  destroyed () {
    window.removeEventListener('resize', this.onResize)
  },
}
</script>

<style scoped>
.cover_image {
  height: 100%;
  width: 100%;
  object-fit: fill;
  background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.6) 95%, transparent)
}
.cover_image.last {
  background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.6) 95%, transparent)
}
.cover_back {
  height: calc(100% - 5px);
  width: calc(100%);
  background: linear-gradient(to top right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)) no-repeat, url('/paper_pattern.jpg') repeat left top;
  filter: contrast(0.3);
  border: solid rgba(0, 0, 0, 0.4) 2px;
}
.book_page {
  height: calc(100% - 5px);
  width: calc(100%);
  background: linear-gradient(to top right, rgba(255, 245, 255, 0.8), rgba(255, 245, 255, 0.6)) no-repeat, url('/paper_pattern.jpg') repeat left top;
  padding: 20px;
  border: solid rgba(255, 245, 255, 0.4) 2px;
}
.radius {
  overflow: hidden;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}
.radius.odd {
  border-radius: 0;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

</style>
