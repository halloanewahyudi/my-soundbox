<script setup>
import { animate, timeline, stagger } from 'motion'
import { onMounted } from 'vue'
import BigTitle from '../components/BigTitle.vue'
import Bullet from '../components/icons/Bullet.vue';

const anim = () => {
    const squence = [
        [
            '.title', {
                opacity: [0, 1],
                scale: [.8, 1],
            }
        ],
        [
            '.text', {
                opacity: [0, 1],
                scale: [.8, 1],
            }, {
                delay: 1
            }

        ],
        [
            '.titik',
            {opacity:[0, 1]}
        ],
        [
            '.pulse',
            {
                opacity: [0, 1],
                scale: [1, 1.2],
            },
            {
                duration: 1,
                repeat: Infinity,
                delay: stagger(0.9),
            }
        ]
    ]
    timeline(squence, { duration: 2, delay: .3 })
}
onMounted(() => {
    anim()
})
</script>
<template>
    <div>
        <div class="max-w-screen-md mx-auto text-center flex flex-col gap-6 justify-center items-center min-h-screen">
            <BigTitle class="title " title=" Mari kita jelajahi bersama bagaimana QRIS Soundbox " />
            <p class="text">guna memberikan pengalaman pembayaran terbaik bagi pelanggan Anda. Terima kasih atas
                perhatian dan waktu Anda.</p>
                <div class="relative flex justify-center items-center ">
                    <div class="titik absolute z-20 w-5 h-5 rounded-full bg-brand-300 cursor-pointer"></div>
                    <Bullet class="pulse animate-ping  w-10 h-10" />
                </div>
           
        </div>
    </div>
</template>