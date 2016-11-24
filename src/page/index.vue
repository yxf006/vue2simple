<template>
  <div>
    <h1>index</h1>

    <el-row class="tac">
      <el-col :span="3">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group title="分组一">
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <el-row class="tac">
          <el-col :span="24" class="floatright"><myheader></myheader></el-col>
          
            
          

        </el-row>

        <ul class="list">
          <li v-for="item in lists" v-text="item.title"></li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import myheader from '../components/header.vue'


export default {
  data() {
    return {
      lists:[{
        id:1,
        title:"test title 1"
      },{
        id:2,
        title:"test title 2"
      }]
    }
  },

  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
  components:{myheader}
}
</script>

<style>
.floatright{
  float:"right";
}
</style>