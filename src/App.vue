<template>

  <div>
    

    <!--<myheader></myheader>-->
    <!--<router-link to='/user'>user</router-link>-->

    <router-view class="view" keep-alive transition transition-mode="out-in">

    </router-view>
  </div>
</template>

<script>

import myheader from './components/header.vue'

export default {
  components: {myheader}
}
</script>

<style>
	@import "../node_modules/font-awesome/css/font-awesome.min.css";
	@import "../node_modules/flex.css/dist/flex.css";
	.bounce-enter-active {
		animation: bounce-in .5s;
	}
	
	.bounce-leave-active {
		animation: bounce-out .2s;
	}
	
	@keyframes bounce-in {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1.05);
		}
		100% {
			transform: scale(1);
		}
	}
	
	@keyframes bounce-out {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(0.95);
		}
		100% {
			transform: scale(0);
		}
	}
	
	body {
		/*background-color: #324057;*/
		margin: 0px;
		padding: 0px;
		/*background: url(assets/bg1.jpg) center !important;
		background-size: cover;*/
		background: #1F2D3D;
		font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
		font-weight: 400;
		-webkit-font-smoothing: antialiased;
	}
	
	#app {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
	}
	
	.el-submenu [class^=fa] {
		vertical-align: baseline;
		margin-right: 10px;
	}
	
	.el-menu-item [class^=fa] {
		vertical-align: baseline;
		margin-right: 10px;
	}
</style>