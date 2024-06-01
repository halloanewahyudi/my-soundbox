<script setup>

import { useRouter } from 'vue-router';
import ArrowDown from './components/icons/ArrowDown.vue';
import ArrowUp from './components/icons/ArrowUp.vue';

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
    <main class="plus-jakarta-sans-global min-h-screen bg-gradient-to-b from-brand-600 to-brand-950 text-brand-50 overflow-x-hidden">
        <RouterView />
        <div class="fixed right-0 top-1/2 bottom-1/2 translate-y-1/2">
          <div class="w-8 flex flex-col gap-3">
            <ArrowUp @click="prevPage" />
            <ArrowDown @click="nextPage"  />
          </div>
        </div>
    </main>
</template>
<style>
:root {
    --plus-jakarta-sans-weight: 400; /* Default weight */
  }
  
  .plus-jakarta-sans-global {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: var(--plus-jakarta-sans-weight);
    font-style: normal;
  }
 
  p{
    line-height: 160%;
    margin-bottom: 2rem;
    letter-spacing: 1.5px;
    font-weight: 300;
    font-size: larger;
  }

</style>


