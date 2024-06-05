<script setup>
defineProps(['title'])
</script>
<template>
    <div>
        <h1 class="big-title text-3xl md:text-5xl font-semibold leading-normal ">
            {{ title }}
        </h1>
    </div>
</template>
<style scope>
 .big-title{
    line-height: 120%;
 }
</style>
