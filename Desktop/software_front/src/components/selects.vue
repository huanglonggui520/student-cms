<template>
  <el-select v-model="value" filterable placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '539',
          label: '539'
        }, {
          value: '501',
          label: '501'
        }, {
          value: '540',
          label: '540'
        }, {
          value: '542',
          label: '542'
        }, {
          value: '543',
          label: '543'
        }],
        value: ''
      }
    }
  }
</script>