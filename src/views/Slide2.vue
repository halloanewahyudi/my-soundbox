<script setup>
import Slide from '../components/template/Slide.vue';
import BigTitle from '../components/BigTitle.vue';
import bgImage from '@/assets/img/transaction.png'
import { timeline, stagger, animate } from 'motion';
import { onMounted } from 'vue';
import ArrowRight from '../components/icons/ArrowRight.vue';

const animeSLide2 = () => {
  
  const sequence = [
    [
      '.anim', { opacity: [0, 1], y: [100, 0] }
    ],
    [
      '.go',{ opacity: [0, 1], x: [-100, 0] }
    ]

  ]
  timeline(sequence, { duration: 2, delay: .3 })
}

onMounted(() => {
  animate('.slide-2', { opacity:[0,1], x:[100,0] }, { duration: 1})
  animeSLide2()
})
</script>
<template>
  <div class="slide-2">
  <slide :bg="bgImage">
    <div class="flex flex-col gap-6">
      <BigTitle class="anim" title="Mulai dari fitur dan keunggulannya, kemudahan penggunaan, keamanan yang ditawarkan, hingga manfaat yang dapat diperoleh bagi bisnis Anda." />
      <p class="anim">
         Kami juga akan menyajikan studi kasus dan testimoni dari pengguna yang telah merasakan langsung manfaat dari QRIS Soundbox. <span class="go text-orange-500 font-semibold inline-flex items-center gap-2 cursor-pointer group " @click="$router.push({ name:'Slide 3'})"> Go <ArrowRight class="group-hover:translate-x-2 duration-300" /> </span>
      </p>
    </div>
  </slide>
</div>
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