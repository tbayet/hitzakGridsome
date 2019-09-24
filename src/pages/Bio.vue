<template>
  <Layout>
    <v-row wrap>
      <v-flex xs8 offset-xs2>
        <p>
          Hitzak - words in Basque - is a Paris-based musical collective featuring
          a French guitarist and composer, a Scottish spoken-word performer, and their
          many friends. There were ten people in the group at the last count!
          The band's first album, Little Black Book, was released in September 2015,
          and they are in the process of writing its follow-up.
        </p><br />
      </v-flex>
      <v-flex
        v-for="edge in $page.members.edges"
        xs12
        v-bind="{ [`md${edge.node.order >= 3 ? 4 : 6}`]: true}"
        :key="edge.node.name"
        class="pa-2"
      >
        <Card
          :image="edge.node.picture"
          :height="edge.node.order >= 3 ? '350px' : '450px'"
          :title="edge.node.name"
          :subtitle="edge.node.role"
        ></Card>
      </v-flex>
    </v-row>
  </Layout>
</template>

<page-query>
query Members {
  members: allMember(sortBy: "order", order: ASC) {
    edges {
      node {
        name,
        role,
        picture,
        order
      }
    }
  }
}
</page-query>

<script>
import Card from '../components/Card'

export default {
  components: {
    Card
  },
  metaInfo: {
    title: 'Bio'
  }
}
</script>
