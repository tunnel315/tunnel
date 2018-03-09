<template>
  <scroll-bar>
    <el-menu mode="vertical" :default-active="$route.path" :collapse="isCollapse" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF">
      <sidebar-item :routes="permission_routers"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>
<script>
  import {mapGetters} from 'vuex';
  import {ScrollBar,SidebarItem} from './components/index';
  export default {
    name : 'sidebar',//侧边导航组件
    components: {
      ScrollBar,
      SidebarItem
    },
    computed: {
      ...mapGetters([
        'permission_routers',
        'sidebar'
      ]),
      isCollapse() {//监听sidebar的开关状态
        return !this.sidebar.optened
      }
    }
  }
</script>