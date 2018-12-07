<template>
    <div class="main">
            <!-- 图片 -->
            <div class="photo" v-for="(photo,index) of photos" :key="photo.id">
                <p>{{photo.text}}</p>
                <img :src="photo.src" alt="" @click='lookPhoto(index)'>
                <div><a href="#">{{photo.learn}}</a></div>
            </div>
            <!-- 双图片 -->
            <div class="main-double">
                <p>TWO CATS</p>
                <div class="doublePhoto" @click='move'>
                    <img :class='{doublePhotoStop:isStop,doublePhotoMove:isMove}' src="../img/06.jpg" alt="">
                    <img :class='{doublePhotoStop:isStop,doublePhotoMove:isMove}' src="../img/07.jpg" alt="">
                </div>

            </div>
            <!-- 全屏看图片 -->
            <div class="look" v-show="shadow" @click='closePhoto'>
                <img :src="lookSrc" alt="">
            </div>

            <!-- 轮播看图片 -->
            <div class="aroundShadow" v-show="aroundShadow">
                <p class="hidd" @click = "hiddenAround">X</p>
                <div class="aroundLook" >
                    <div class="pre" @click = "pre">
                        <span> {{s1}} </span>
                    </div> 
                    <img :src="aroundSrc" alt="">
                    <div class="next" @click = "next">
                        <span> > </span>
                    </div>
                </div>
            </div>

            <!-- 轮播图 -->
            <div class="aroundPhoto">
                <div v-for="(aroundPhoto,index) in aroundPhotos" :key="aroundPhoto.id">
                    <img :src="aroundPhoto.src" alt="" @click ="showAround(index)">
                </div>
            </div>

            <!-- 卡片-->
            <div class="flexBox">
                <div class="card">
                    <div>
                        <p>Entertainment Art</p>
                    </div>
                    <img src="../img/07.jpg" alt="">
                    <div class="mar">
                        <a href="#" v-html="html"></a>
                    </div>

                </div>
                <div class="card">
                    <div>
                        <p>Fashion Illustration</p>
                    </div>
                    <img src="../img/06.jpg" alt="">
                    <div class="mar">
                        <a href="#" v-html="html"></a>
                    </div>
                </div>
            </div>
            <!-- video -->
            <div class="card" v-show="showVideo">
                <div>
                    <p>Video</p>
                </div>
                <video src="../img/01.mp4" controls='controls'></video>
                
            </div>

            <!-- top -->
            <div class="top animate" id="top" v-show="topBoll" @click="goTop">
                <a href="#">top</a>
            </div>
            <!-- <h1 @click="addCount">我是新的内容{{count}}</h1> -->
        </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      photos: [
        {
          src: require("../img/02.jpg"),
          id: 1
        },
        {
          src: require("../img/03.jpg"),
          id: 2
        },
        {
          src: require("../img/04.jpg"),
          id: 3
        },
        {
          src: require("../img/05.jpg"),
          id: 4
        },
        {
          src: require("../img/06.jpg"),
          id: 5
        },
        {
          src: require("../img/09.jpg"),
          id: 6
        },
        {
          src: require("../img/08.png"),
          text: "Vue",
          learn: "Learn More",
          id: 7
        },
        {
          src: require("../img/07.jpg"),
          text: "Cat",
          id: 8
        }
      ],
      aroundPhotos: [
        {
          src: require("../img/10.jpg"),
          id: 1
        },
        {
          src: require("../img/11.jpg"),
          id: 2
        }
      ],
      shadow: false,
      lookSrc: "",
      isStop: true,
      isMove: false,
      aroundShadow: false,
      showVideo: true,
      aroundSrc: "",
      x: 0,
      html: "Learn More &#8594",
      topBoll: false,
      s1:'<'
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  computed: {
    count() {
      return this.$store.getters.count;
    }
  },
  methods: {
    handleScroll() {
      let top = window.scrollY;
      if (top >= 1000) {
        this.topBoll = true;
      } else if (top <= 500) {
        this.topBoll = false;
      }
    },
    goTop() {
      window.scrollTo(0, 0);
    },
    addCount() {
      this.$store.dispatch("add", 3);
    },
    // 查看大图片
    lookPhoto(index) {
      this.shadow = !this.shadow;
      this.lookSrc = this.photos[index].src;
      document.getElementsByTagName("body")[0].setAttribute("style", "overflow : hidden");
    },
    // 关闭查看大图片
    closePhoto() {
      this.shadow = false;
      document.getElementsByTagName("body")[0].removeAttribute("style");
    },
    // 控制双图片
    move() {
      this.isMove = !this.isMove;
      this.isStop = !this.isStop;
    },

    // 查看轮播图
    showAround(index) {
      this.aroundShadow = true;
      this.aroundSrc = this.aroundPhotos[index].src;
      this.x = index;
      document.getElementsByTagName('body')[0].setAttribute('style','overflow : hidden');
    },
    // 关闭轮播图
    hiddenAround() {
      this.aroundShadow = false;
      document.getElementsByTagName('body')[0].removeAttribute('style');
    },
    pre() {
      let a = parseInt(this.x);
      let that = this;
      if (a > 0) {
        that.aroundSrc = that.aroundPhotos[a - 1].src;
        this.x = a - 1;
      } else {
        a = this.aroundPhotos.length - 1;
        that.aroundSrc = that.aroundPhotos[a].src;
        this.x = a;
      }
    },
    next() {
      let a = parseInt(this.x);
      if (a > this.aroundPhotos.length - 2) {
        a = 0;
        this.aroundSrc = this.aroundPhotos[a].src;
        this.x = a;
      } else {
        this.aroundSrc = this.aroundPhotos[a + 1].src;
        this.x = a + 1;
      }
    }
  }
};
</script>

<style>
@import url("../static/css/Main.css");
</style>


