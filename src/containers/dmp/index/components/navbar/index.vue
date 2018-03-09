<template>
  <el-menu class="navbar" mode="horizontal">
      <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="isActive"></hamburger>
      <breadcrumb class="breadcrumb-container"></breadcrumb>
      <div class="right-menu">
        <el-tooltip effect="dark" content="全屏" placement="bottom">
            <screenfull class="screenfull right-menu-item"></screenfull>
        </el-tooltip>
        <el-dropdown class="avatar-container right-menu-item" trigger="click">
            <div class="avatar-wrapper">
                <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
                <i class="el-icon-caret-bottom"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
            <router-link to="/">
                <el-dropdown-item>
                    选项1
                </el-dropdown-item>
            </router-link>
            <a target='_blank'>
                <el-dropdown-item>
                    选项2
                </el-dropdown-item>
            </a>
            <el-dropdown-item divided>
                <span @click="logout" style="display:block;">退出</span>
            </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
      </div>
  </el-menu>
</template>
<script>
    import { mapGetters } from 'vuex';
    import Breadcrumb from 'components/breadcrumb/index.vue';
    import Hamburger from 'components/hamburger/index.vue';
    import Screenfull from 'components/screenfull/index.vue';
    export default {
        components : {
            Breadcrumb,
            Hamburger,
            Screenfull
        },
        computed : {
            ...mapGetters([
                'rootStatus',
                'avatar'
            ]),
            isActive () {
                return this.rootStatus.sidebar.optened
            }
        },
        mounted () {

        },
        methods: {
            toggleSideBar() {
               //this.$store.dispatch('toggleSideBar');
                this.$store.state.rootStatus.sidebar.optened = !this.$store.state.rootStatus.sidebar.optened
            },
            logout() {
                this.$store.dispatch('logout').then(() => {
                    location.reload()
                })
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .navbar {
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
    .hamburger-container {
        line-height: 58px;
        height: 50px;
        float: left;
        padding: 0 10px;
    }
    .breadcrumb-container{
        float: left;
    }
    .errLog-container {
        display: inline-block;
        vertical-align: top;
    }
    .right-menu {
        float: right;
        height: 100%;
        &:focus{
        outline: none;
        }
        .right-menu-item {
        display: inline-block;
        margin: 0 8px;
        }
        .screenfull {
        height: 20px;
        }
        .international{
        vertical-align: top;
        }
        .theme-switch {
        vertical-align: 15px;
        }
        .avatar-container {
        height: 50px;
        margin-right: 30px;
        .avatar-wrapper {
            cursor: pointer;
            margin-top: 5px;
            position: relative;
            .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            }
            .el-icon-caret-bottom {
            position: absolute;
            right: -20px;
            top: 25px;
            font-size: 12px;
            }
        }
        }
    }
    }
</style>
