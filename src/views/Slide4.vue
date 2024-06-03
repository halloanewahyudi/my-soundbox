<script setup>
import { animate, timeline } from "motion";
import { onMounted } from "vue"
import BigTitle from '../components/BigTitle.vue'
import ArrowRight from "../components/icons/ArrowRight.vue";
import Check from "../components/icons/Check.vue";

const animSlide4 = () => {
  animate('.slide-4',{
    opacity:[0,1], y:[100,0]
    },
    {
        duration:1
    }
  )
  const squence = [
    ['.device', {opacity:[0, 1], scale:[.4 , 1] }],
    ['.anim', { opacity:[0,1], scale:[1.2,1] } ]
  ]
  timeline(squence,{duration:1})
}

onMounted(()=>{
    animSlide4()
})
</script>
<template>
    <div class="slide-4 min-h-screen">
        <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
                <div class="kiri h-screen flex flex-col justify-center items-center min-h-screen">
                    <img class="device" src="@/assets/img/device.png" alt="" srcset="">
                </div>
                <div class="kanan col-span-2">
                    <div class="p-6 lg:p-10 xl:p-20">
                        <BigTitle class="mb-6" title=" Apa itu QRIS Soundbox ?" />
                        <ul class="flex flex-col gap-5 text-xl">
                            <li class="anim flex gap-2">
                                <Check class="icon w-8 h-8 shrink-0" />
                                QRIS Soundbox adalah perangkat pembayaran berbasis suara yang
                                menggunakan teknologi QRIS (Quick Response Code Indonesian Standard).
                            </li>
                            <li class=" anim flex gap-2">
                                <Check class="icon  w-8 h-8 shrink-0" /> Menggabungkan teknologi QR code dengan notifikasi
                                suara
                                untuk memudahkan transaksi.
                            </li>
                        </ul>
                        <router-link to="/slide-5" class="btn-light flex items-center gap-2 mt-6 max-w-max group lg:float-end"> GO <ArrowRight class="group-hover:translate-x-2 duration-300" /> </router-link>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.slide-4 {
    background: url('../assets/lingkar-2.svg') no-repeat left center;
    background-size: contain
}
</style>