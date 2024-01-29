<script setup>
import { onMounted } from 'vue'
import { requestLoginApi } from '@/services/index.js'

onMounted(() => {
  requestLoginApi()
})
</script>

<template>
  <el-row>
    <el-button>Default</el-button>
  </el-row>
</template>

<style scoped lang="sass">

</style>
