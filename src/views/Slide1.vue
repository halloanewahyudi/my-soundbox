<script setup>
import Slide from '../components/template/Slide.vue';
import BigTitle from '../components/BigTitle.vue';
import bgImage from '@/assets/img/transaction.png'
</script>
<template>
  <transition name="slide-fade">
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
  </transition>
</template>
<style>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>