<template>
  <div id="app" class="w-all">
    <router-view/>
    <van-tabbar route>
      <van-tabbar-item to="/add" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/cost" icon="search">花销</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Tabbar, TabbarItem } from 'vant';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    vanTabbar: Tabbar,
    vanTabbarItem: TabbarItem
  }
})
export default class App extends Vue{
  // private nowIndex: number = 0;
  public refresh(params: string):void {
    console.log(params)
  }
  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
