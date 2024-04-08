<script setup>
import { requestPostApi } from '@/services/index.js'

async function handleClick() {
  console.log('click')
  await requestPostApi({
    fzsid: 626,
  })
}
</script>

<template>
  <main class="flex justify-center items-center flex-col px-[20px] gap-4">
    <div class="text-xl text-sky-500">
      欢迎使用 vue-template
    </div>
    <p class="text-gray-500 text-sm">
      adekang
    </p>

    <button class="flex w-400 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="handleClick">
      按钮
    </button>
  </main>
</template>

<style scoped>

</style>
