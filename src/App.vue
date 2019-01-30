<template>
  <div id="app">
    <h1>Router Basic</h1>
    <hr>
    <ul>
    	<li>
    		<router-link to="/about">About</router-link>
    	</li>
    	<li>
    		<router-link to="/home">Home</router-link>
    	</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
	#App {
		max-width: 70%;
		min-width: 650px;
		margin: 0 auto;
	}
	ul {
		float: left;
		list-style: none;
	}
	ul li:hover {
		background: #eee;
	}
	ul li a {
		display: block;
		padding-left: 20px;
		font-size: 25px;
		border: 1px solid #eee;
		height: 50px;
		width: 250px;
		line-height: 50px;
		color: black;
		text-decoration: none;
	}
</style>
