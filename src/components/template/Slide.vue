<script setup>
import { onMounted } from "vue"
defineProps({
    bg: {
        type: String,
        default: '@/assets/transaction.png'
    }
})

</script>
<template>

    <div class="min-h-screen">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
            <div class="kiri h-screen " :style="{
                background: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }">

            </div>
            <div class="kanan col-span-2">
                <div class="p-6 lg:p-10 xl:p-20">
                    <slot class="content" />
                </div>

            </div>
        </div>
    </div>
</template>