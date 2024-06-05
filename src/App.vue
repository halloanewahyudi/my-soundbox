<script lang="ts" setup>

import { useRouter, useRoute } from 'vue-router';
import { animate, timeline } from 'motion';
import { computed, onMounted, ref, watch } from 'vue';
import ArrowLeftCircle from './components/icons/ArrowLeftCircle.vue';
import ArrowRightCircle from './components/icons/ArrowRightCircle.vue';

const router = useRouter()
const route = useRoute()

const prevPage = () => {
  const prevRouteName = router.currentRoute.value.meta.prev;
  router.push({ name: prevRouteName });
}
const nextPage = () => {
  const nextRouteName = router.currentRoute.value.meta.next;
  router.push({ name: nextRouteName });
}

// pagination bullet
const bulletPage = computed(() => {
  const getNumber = router.getRoutes()
  return getNumber
})

</script>
<template>
  <main class=" min-h-screen bg-gradient-to-b from-brand-600 to-brand-950 text-brand-50">
    <div class="fixed top-0 left-0 w-full min-h-14 z-50 py-3">
      <nav class="container flex justify-between items-center gap-6">
        <div class="flex gap-2 lg:gap-8 items-center"> 
          <router-link to="/" class="italic" > <span class="font-semibold" > QRIS </span> Soundbox </router-link>
        <ul class="flex gap-6 items-center">
          <li v-for="route in bulletPage" :key="route.path">
            <router-link :to="route" class="w-2 h-2 rounded-full bg-white inline-block opacity-45">
            </router-link>
          </li>
        </ul>
        </div>

        <div class="w-max flex gap-3">
          <ArrowLeftCircle @click="prevPage" class="w-6 h-6 cursor-pointer" />
          <ArrowRightCircle @click="nextPage" class="w-6 h-6 cursor-pointer" />
        </div>
      </nav>
    </div>
    <transition>
      <router-view></router-view>
    </transition>

  </main>
</template>
<style>
:root {
  --plus-jakarta-sans-weight: 400;
  /* Default weight */
}

body {
  overflow-x: hidden;
}

.plus-jakarta-sans-global {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: var(--plus-jakarta-sans-weight);
  font-style: normal;
}

p {
  line-height: 160%;
  margin-bottom: 1.2rem;
  letter-spacing: 1.5px;
  font-weight: 300;
  font-size: larger;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

li .router-link-active {
  @apply scale-125 bg-orange-500 transition-all ease-in-out duration-300 opacity-100 w-6;
}
</style>
