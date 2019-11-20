<template>
  <div class="main-body">
    <el-col>
      
    </el-col>
    <div class="left-menu">
      <el-menu default-active="1">
        <el-menu-item index="1">
          <i class="el-icon-document-copy"></i>
          <span>全部文件</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-picture-"></i>
          <span>图片</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-"></i>
          <span>文档</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-video-"></i>
          <span>视频</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-"></i>
          <span>种子</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-"></i>
          <span>音乐</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-"></i>
          <span>其它</span>
        </el-menu-item>
        <el-menu-item index="8">
          <i class="el-icon-share"></i>
          <span>我的分享</span>
        </el-menu-item>
        <el-menu-item index="9">
          <i class="el-icon-delete"></i>
          <span>回收站</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main">这是main</div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style scoped>
.top-nav {
  width: 100%;
}

.main-body {
  height: 100%;
}

.left-menu {
  float: left;
  width: 12%;
  background: #f7f7f7;
}

.main{
  padding: 10px;
}
</style>
