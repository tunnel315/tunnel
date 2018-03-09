<template>
	<div class="app-wrapper" :class="{hideSidebar:!sidebar}">
		<sidebar class="sidebar-container"></sidebar>
		<div class="main-container">
			
			<navbar></navbar>
			<!-- <tags-view></tags-view> -->
			<app-main></app-main>
		</div>
	</div>
</template>
<script>
	import {AppMain ,Navbar,Sidebar} from './components/index';

	export default {
		components : {
			AppMain,
			Navbar,
			Sidebar
		},
		computed: {
			sidebar() {
				return this.$store.state.rootStatus.sidebar.optened
			},
		},
		methods : {
			
		}
	}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
	@import "../../../style/scss/public/mixin.scss";
	.app-wrapper {
	  @include clearfix;
	  position: relative;
	  height: 100%;
	  width: 100%;
	}
</style>