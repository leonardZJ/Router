<template>
  <div>
    <div v-for="massage in massages" :key="massage.id">
      <router-link :to="`/home/massages/detail/${massage.id}`">{{ massage.title }}</router-link>
      <button @click="pushShow(massage.id)">push查看</button>
      <button @click="replaceShow(massage.id)">replace查看</button>
    </div>
    <button @click="$router.back()">返回</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        massages: []
      }
    },
    mounted: function() {
      setTimeout(() => {
        const massagesDetails = [
          {
            id: 1,
            title: 'massage001'
          },
          {
            id: 2,
            title: 'massage002'
          },
          {
            id: 3,
            title: 'massage003'
          },
        ]
        this.massagesDetails = massagesDetails
        this.massages = massagesDetails
      },1000)
    },
    methods: {
      pushShow: function(id) {
        this.$router.push(`/home/massages/detail/${id}`)
      },
      replaceShow: function(id) {
        this.$router.replace(`/home/massages/detail/${id}`)
      }
    }
  }
</script>

<style>

</style>