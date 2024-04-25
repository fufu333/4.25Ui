<!-- src/components/Ceshi.vue -->
<template>
    <div class="container">
        <van-swipe class="image-swipe" :autoplay="0" :show-indicators="false" @change="onChange">
            <van-swipe-item v-for="(imageUrl, index) in imageUrls" :key="index">
                <img :src="imageUrl" class="van-image" :style="{ objectFit: 'contain' }" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';

export default {
    components: {
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
    },
    data() {
        return {
            imageUrls: [
                'https://www.codelover.club/files/stutasks/userID_884/currNo_29/照片/FviulPire291Y26x3GalCdW20vyb.png',
                'https://www.codelover.club/files/stutasks/userID_884/currNo_29/照片/Fl-w-mJlDURQrSBSL6UIqvwTZ2lZ.png',
                'https://www.codelover.club/files/stutasks/userID_884/currNo_29/照片/FuKa16711NRiunaar-ANzftP2_-o.png',
                'https://www.codelover.club/files/stutasks/userID_884/currNo_29/照片/FsZGTuiY_HkddeIEh5IszMsjNGuR.png'
            ],
            activeIndex: 0,
        };
    },
    methods: {
        onChange(index) {
            this.activeIndex = index;
        },
    },
};
</script>

<style scoped>
.container {
    margin-top: 50px;
    width: 100vw;
    height: 55vh;
    overflow-x: hidden;
}

.van-image {
    width: 80vw;
}

@media(max-width:350px) {
    .van-image {
        width: 100vw;
    }
}
</style>