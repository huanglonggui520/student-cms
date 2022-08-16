
<template>
    <div class="box">
        <!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button> -->

        <el-dialog
        :title="title"
        :lockScroll='false'
        :visible.sync="dialogVisible"
        width="40%"
        :before-close="handleClose">
        <span>
            <slot></slot>
        </span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisibleevent">确 定</el-button>
        </span>
        </el-dialog>

    </div>
</template>
<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        title:'提示'
      };
    },
    methods: {
      handleClose(done) {
       
            done();
        
      },
      dialogVisibleevent(){
          this.dialogVisible=false
          this.$bus.$emit('changebox')
      }
    },
    mounted(){
        this.$bus.$on('getbox',(title)=>{
            this.dialogVisible=true
            this.title=title
        })
    },
    beforeDestroy(){
        this.$bus.$off(['changebox','getbox'])
    }
  };
</script>
