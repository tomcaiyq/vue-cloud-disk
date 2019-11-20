<template>
  <div class="top-nav">
    <div class="top-nav-left">
      <el-menu
        :default-active="1"
        mode="horizontal"
        @select="handleSelect"
        text-color="#000"
        :text-size="24"
        active-text-color="#36BAFF"
      >
        <el-menu-item>
          <a href>
            <img style="width: 155px;" src="../assets/image/logo.png" />
          </a>
        </el-menu-item>
        <el-menu-item :index="1">网盘</el-menu-item>
        <el-menu-item :index="2">动态</el-menu-item>
        <el-menu-item :index="3">分享</el-menu-item>
        <el-menu-item :index="4">找资源</el-menu-item>
        <el-menu-item :index="5">更多</el-menu-item>
        <el-menu-item style="float:right;">
          <div class="top-nav-right">用户名</div>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {};
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.top-nav {
  width: 100%;
  user-select: none;
}
</style>

<style>
.top-nav-left .el-menu-item {
  font-family: "microsoft yahei";
  font-size: 17px;
  margin-left: 10px;
}

.top-nav-left .el-menu-item:hover {
  opacity: 0.8;
}
</style>
