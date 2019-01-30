<template>
  <ul>
    <li>ID: {{ massagesDetail.id}}</li>
    <li>Massage: {{ massagesDetail.title }}</li>
    <li>Content: {{ massagesDetail.content }}</li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        massagesDetail: {}
      }
    },
    mounted: function() {
      setTimeout(() => {
        const massagesDetails = [
          {
            id: 1,
            title: 'massage001',
            content: 'massage001 content...'
          },
          {
            id: 2,
            title: 'massage002',
            content: 'massage002 content...'
          },
          {
            id: 3,
            title: 'massage003',
            content: 'massage003 content...'
          }
        ]
        this.massagesDetails = massagesDetails
        const id = this.$route.params.id
        this.massagesDetail = this.massagesDetails.find(detail => detail.id==id)
      },1000)
    },
    watch: {
      $route: function(value) {
        const id = value.params.id
        this.massagesDetail = this.massagesDetails.find(detail => detail.id==id)
      }
    }
  }
</script>

<style>
  
</style>