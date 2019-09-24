<template>
  <Layout>
    <v-row justify="center">
      <v-flex xs11 md8 class="mt-12">
        <Book :pages="$page.lyrics.edges"></Book>
      </v-flex>
    </v-row>
  </Layout>
</template>

<page-query>
query Lyrics {
  lyrics: allLyric(sortBy: "order", order: ASC) {
    edges {
      node {
        name,
        content,
        order
      }
    }
  }
}
</page-query>

<script>
import Book from '~/components/Book.vue'

export default {
  metaInfo: {
    title: 'Lyrics'
  },
  components: {
    Book
  }
}
</script>

<style scoped>
</style>
