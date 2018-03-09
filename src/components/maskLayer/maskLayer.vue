<template>
  <div class="maskLayerVue" v-show="showLayer">
    <button type="button" name="button" @click="showLayer = false">关闭</button>
    <ul>
      <li v-for="(value,key) in list" :key="key">{{value.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props : ['list'],
  data: () => ({
    showLayer : false
  }),
  methods: {
    open() {
      this.showLayer = true;
    }
  }
}
</script>
<style lang="scss" scoped>
  .maskLayerVue{
    width:500px;
    height:300px;
    background-color: gray;
  }
</style>
