<template>
  <div id="app">
    <router-view/>
    <van-tabbar route>
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
