<template>
 <v-responsive :aspect-ratio="4/3" max-height="60vh">
    <div id="flipbook">
      <div class="cover_front hard">
        <g-image
          quality="100"
          class="cover_image"
          width="920"
          src="~/assets/lbb.png"
        ></g-image>
      </div>
      <div class="cover_back hard"></div>
      <div class="sheet hard"> Page 1 </div>
      <div class="sheet hard"> Page 2 </div>
      <div class="cover_back hard"></div>
      <div class="cover_front hard">
        <g-image 
          quality="100"
          class="cover_image"
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
  mounted () {
    Turn(jQuery, window)
    jQuery('#flipbook').turn({
      width: '100%',
      height: '100%',
      autoCenter: true
    });
    window.addEventListener('resize', () => jQuery('#flipbook').turn('size', '100%', '100%'))
  },
  destroyed () {
    window.removeEventListener('resize')
  },
}
</script>

<style scoped>
.cover_image {
  height: 100%;
  width: 100%;
  object-fit: fill;
}
</style>
