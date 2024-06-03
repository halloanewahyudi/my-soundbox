<script setup>

import { useRouter } from 'vue-router';
import ArrowDown from './components/icons/ArrowDown.vue';
import ArrowUp from './components/icons/ArrowUp.vue';
import { animate, timeline } from 'motion';
import { onMounted } from 'vue';


const router = useRouter()

const prevPage = () => {
  const prevRouteName = router.currentRoute.value.meta.prev;
  router.push({ name: prevRouteName });
}
const nextPage = () => {
  const nextRouteName = router.currentRoute.value.meta.next;
  router.push({ name: nextRouteName });
}

</script>
<template>
  <main class=" min-h-screen bg-gradient-to-b from-brand-600 to-brand-950 text-brand-50">
    <transition>
      <router-view></router-view>
    </transition>
    <div class="fixed right-6 top-1/2 bottom-1/2 translate-y-1/2">
      <div class="w-8 flex flex-col gap-3">
        <ArrowUp @click="prevPage" class="w-9 h-9" />
        <ArrowDown @click="nextPage" class="w-9 h-9" />
      </div>
    </div>
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
</style>
