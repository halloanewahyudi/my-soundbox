<script setup>
import Slide from '../components/template/Slide.vue';
import BigTitle from '../components/BigTitle.vue';
import bgImage from '@/assets/img/transaction.png'
import { timeline, stagger, animate } from 'motion';
import { onMounted } from 'vue';
const welcome = () => {
  const sequence = [
    [
      '.anim', { opacity: [0, 1], scale: [.2, 1] }
    ]

  ]
  timeline(sequence, { duration: 2, delay: .3 })
}

onMounted(() => {
  animate('.slide-1', { opacity:[0,1],y:[100,0] },{ duration: 1, delay: stagger(0.1) })
  welcome()

})
</script>
<template>
  <div class="slide-1">
    <slide :bg="bgImage">
      <div class="flex flex-col gap-6">
        <BigTitle class="anim" title="Selamat datang dalam presentasi penjualan QRIS Soundbox" />
        <p class="anim">
          solusi pembayaran digital modern yang dirancang untuk memudahkan dan mengamankan setiap transaksi bisnis Anda.
          QRIS Soundbox adalah inovasi terbaru dalam teknologi pembayaran yang menggabungkan keunggulan QR code dengan
          notifikasi suara real-time.
        </p>
      </div>
    </slide>
  </div>
</template>
<style></style>