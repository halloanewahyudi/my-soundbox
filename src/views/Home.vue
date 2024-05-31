<script setup>
import { animate, timeline } from 'motion';
import { onMounted, ref } from 'vue';
const title = ref(null)
const text = ref(null)
const device = ref(null)

const welcome = () => {
  const sequence = [
    [title.value, {
      opacity: [0, 1],
      x: [-200, 0],
      scale: [.3, 1]
    }],
    // This will start 0.5 from the start of the whole timeline:
    [text.value, { opacity: [0, 1], y: [100, 0] }],
    [
      '.device', { opacity: [0, 1], scale: [.2, 1] }
    ]

  ]
  timeline(sequence, { duration: 2, delay: .3 })
}

onMounted(() => {
  welcome()
})

</script>
<template>
  <div class="home ">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 min-h-screen items-center">
        <div class="p-4 cover-text">
          <h1 ref="title" class="text-[80px] font-bold leading-none"> QRIS Soundbox </h1>
          <p ref="text" class="text-2xl">
            meningkatkan efisiensi dan keamanan transaksi bisnis Anda, serta memberikan pengalaman pembayaran terbaik
            bagi pelanggan Anda.
          </p>
        </div>
        <div class="md:pt-10">
          <img class="device" src="../assets/img/device.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.home {
  background: url('../assets/lingkar.svg') no-repeat;
  background-size: contain
}
</style>
