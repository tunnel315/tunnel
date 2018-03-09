<template>
  <div class="menu-wrapper">
    <template v-for="item in routes" v-if="!item.hidden && item.children">
      <!-- 没有二级路由的情况 -->
      <router-link v-if="item.children.length===1 && !item.children[0].children&&!item.alwaysShow" :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
        <el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
          <IconVue v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon"></IconVue>
          <span v-if="item.children[0].meta&&item.children[0].meta.title">{{item.children[0].meta.title}}</span>
        </el-menu-item>
      </router-link>
      <!-- 有二级子路由的情况 -->
      <el-submenu v-else :index="item.name||item.path" :key="item.name">
        <template slot="title">
          <IconVue v-if="item.meta && item.meta.icon" :icon-class="item.meta.icon"></IconVue>
          <span v-if="item.meta && item.meta.title">{{item.meta.title}}</span>
        </template>

        <template v-for="child in item.children" v-if="!child.hidden">
          <sidebar-item :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path"></sidebar-item>

          <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
            <el-menu-item :index="item.path+'/'+child.path">
              <IconVue v-if="child.meta && child.meta.icon" :icon-class="child.meta.icon"></IconVue>
              <span v-if="child.meta && child.meta.title">{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',//侧边导航每个子元素组件
  props: {
    routes: {//根据路由遍历显示内容
      type: Array
    },
    isNest: {//
      type: Boolean,
      default: false
    }
  },
  methods: {

  }
}
</script>

