<script setup>
import { animate , timeline, stagger} from "motion"
import { onMounted } from "vue"
import BigTitle from '../components/BigTitle.vue'
import CheckVue from "../components/icons/Check.vue"

const animSlide5 = () => {
    animate('.anim',  {opacity:[0 , 1], y:[100,0]} , {duration:1, delay: stagger(0.1)})
    animate('.negasi',{ opacity:[0, 1]},{duration:2, delay:1})
}
onMounted(()=>{
    animSlide5()
})
</script>
<template>

    <div class="slide-5 min-h-screen">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
            <div
                class="video-background relative col-auto  overflow-hidden min-h-screen flex justify-center items-center">

                <div
                    class="absolute w-full h-full top-0 left-0 min-h-screen bg-gradient-to-tr from-brand-950 to-brand-700 z-20 opacity-65">
                </div>
                <video autoplay muted loop
                    class="absolute z-10 w-auto  min-h-screen top-1/2 bottom-0 left-0 -translate-y-1/2 ">
                    <source src="@/assets/transaction.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="kanan col-span-2">
                <div class="p-6 lg:p-10 xl:p-20">
                    <div class="content">
                        <BigTitle class="anim mb-6" title="Fungsi dan fitur Utama" />
                        <ul class="flex flex-col gap-5 text-xl">
                            <li class="anim flex gap-2">
                                <CheckVue class="icon w-8 h-8 shrink-0" />
                                Notifikasi suara real-time saat transaksi berhasil.
                            </li>
                            <li class=" anim flex gap-2">
                                <CheckVue class="icon  w-8 h-8 shrink-0" />Mendukung berbagai metode pembayaran digital
                                melalui QRIS.
                            </li>
                            <li class=" anim flex gap-2">
                                <CheckVue class="icon  w-8 h-8 shrink-0" />Desain ergonomis dan mudah dioperasikan.
                            </li>
                        </ul>

                        <div class="negasi p-6 bg-brand-950 bg-opacity-50 mt-10 ">
                            <div class="text-orange-100 max-w-max ">
                                <p>Berbeda dengan EDC yang membutuhkan kontak fisik, QRIS Soundbox hanya memerlukan pemindaian QR code</p>
                                <p>  Lebih aman dibandingkan pembayaran tunai dan kartu kredit. </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<style scoped>
.negasi {
    background-image: url('@/assets/lingkar3.svg');
    background-repeat: no-repeat;
    background-position: right top;
}
</style>