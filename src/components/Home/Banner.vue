<script setup>
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';
</script>

<template>
  <swiper :modules="[Pagination]" :slides-per-view="1" :pagination="{ clickable: true }">
    <swiper-slide>
      <div>
        <img class="w-full" src="@/assets/images/image/banner.png" alt="">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div>
        <img class="w-full" src="@/assets/images/image/banner.png" alt="">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div>
        <img class="w-full" src="@/assets/images/image/banner.png" alt="">
      </div>
    </swiper-slide>
  </swiper>
</template>