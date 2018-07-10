<template>
  <div class="pcindex">

    <el-container>
      <el-aside>
        <div class="lefttop">
          后台管理系统
        </div>
        <div class="leftbottom">
          <div class="user">
            <div class="touxiang">
              <img src="../../../static/image/ae1c9346gy1fqgunkjhtkj21400miaec.jpg" alt="">
            </div>
            <p class="superuser">超级管理员</p>
          </div>
        </div>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>



</script>

<style scoped>
.el-container {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  width: 180px !important;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

/* 修改的代码 */
.el-aside[data-v-4d8822c6] {
  height: 100%;
  background-color: #222d32;
}

.pcindex {
  height: 100%;
}
.el-header[data-v-4d8822c6],
.el-footer[data-v-4d8822c6] {
  background-color: #3c8dbc;
}

.lefttop {
  height: 60px;
  background-color: #337ab7;
  line-height: 60px;
  font-size: 20px;
  color: #ffff;
}
.leftbottom {
}
.user {
  height: 150px;
}
.user img {
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 20px auto 10px;
}
.superuser {
  height: 20px;
  line-height: 20px;
  color: #fff;
  font-size: 16px;
}
</style>
 