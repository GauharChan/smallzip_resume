<template>
    <div>
    <!-- 底部 -->
        <div class="foot">Powered by <span @click="aboutMe">Gauhar</span></div>
        <!-- top -->
        <!-- <div class="top animate" id="top" v-show="condition" @click="goTop">
            <a href="#">top</a>
        </div> -->
    </div>
</template>
<script>
export default {
  data() {
    return {
    //   condition: false
    };
  },
  created() {
    // window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    // handleScroll() {
    //   let top = window.scrollY;
    //   if (top >= 1000) {
    //     this.condition = true;
    //   } else if (top <= 500) {
    //     this.condition = false
    //   }
    // },
    // goTop(){
    //     window.scrollTo(0,0);
    // }

    aboutMe(){
      this.$router.push('/rehead')
      window.scrollTo(0,0);
    },
  }
};
</script>

<style>
@import url('../static/css/Foot.css');
</style>
