<template>
    <div class="home-h2">
    	<h2>Home组件</h2>
      <router-link to="/home/news" class="classForA">news</router-link>
      <router-link to="/home/massages" class="classForA">massages</router-link>
      <hr>
      <router-view></router-view>
    </div>
</template>

<script>
  export default {

  }
</script>

<style>
	.home-h2 {
    width: 500px;
		margin-left: 80px;
		float: left;
	}
  .classForA {
    text-decoration: none;
  }
</style>
