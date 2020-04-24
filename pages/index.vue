<template>
  <div>
    <Graph :data="data" :categories="categories" />
  </div>
</template>

<script>
import db from '@/plugins/db'
import Graph from '@/components/graph/Base'
require('date-utils')

export default {
  components: {
    Graph
  },
  async asyncData() {
    const data = []
    const categories = []

    await db
      .collection('trade')
      .orderBy('date')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const fbData = doc.data()
          data.push(fbData.balance)
          const date = fbData.date.toDate().toFormat('MM/DD')
          categories.push(date)
        })
      })

    return { data, categories }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
