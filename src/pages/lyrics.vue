<template>
  <Layout>
    <v-row justify="center">
      <v-flex xs11 md8 class="mt-12">
        <Book></Book>
      </v-flex>
    </v-row>
  </Layout>
</template>

<script>
import Book from '~/components/Book.vue'

export default {
  metaInfo: {
    title: 'Dates'
  },
  components: {
    Book
  }
}
</script>

<style scoped>
</style>
