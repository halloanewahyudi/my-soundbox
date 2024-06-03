<script setup>
import { onMounted } from "vue"
import videoBackground from 'vue-responsive-video-background-player'
</script>
<template>

    <div class="min-h-screen">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
            <video-background src="@/assets/transaction.mp4" class="w-full min-h-screen"
                overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)">
                <h1 style="color: white;">Hello welcome!</h1>
            </video-background>
            <div class="kanan col-span-2">
                <div class="p-6 lg:p-10 xl:p-20">
                    <div class="content">


                        <video controls autoplay>
                            <source src="@/assets/transaction.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>