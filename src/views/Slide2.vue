<script setup>
import Slide from '../components/template/Slide.vue';
import BigTitle from '../components/BigTitle.vue';
import bgImage from '@/assets/img/transaction.png'
</script>
<template>
  <transition name="slide-fade">
  <slide :bg="bgImage">
    <div class="flex flex-col gap-6">
      <BigTitle class="anim" title="Dalam presentasi ini, kami akan membahas berbagai aspek dari QRIS Soundbox" />
      <p class="anim">
        mulai dari fitur dan keunggulannya, kemudahan penggunaan, keamanan yang ditawarkan, hingga manfaat yang dapat diperoleh bagi bisnis Anda. Kami juga akan menyajikan studi kasus dan testimoni dari pengguna yang telah merasakan langsung manfaat dari QRIS Soundbox.
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