<template>
<div>
  <div class="head">
      <!-- <table></table> -->
      <LeaderComponent></LeaderComponent>
      <div class="head-content" v-show="showHeadContent">
          <p>From Sketch To Teality</p>
          <h1>THE AGE OF DISCOVERY</h1>
          <a @click = 'aboutMe'>About Me</a>
      </div>
  </div>
  <!-- <h1 @click="addCount">我是新的内容{{count}}</h1> -->
      <!-- <MainComponent/>
      <FootComponent/> -->
</div>
</template>

<script>
// import MainComponent from "./Main"; //  引入组件
import LeaderComponent from './leader';
export default {
  name: "Head",
  data() {
    return {
      showHeadContent:true,
    };
  },
  created () {
   
  },
  computed: {
    count() {
      return this.$store.getters.count
    }
  },
  components: {
    //  注册组件
    LeaderComponent
  },
  methods: {
    // addCount() {
      
      
    //   //  添加
    //   this.$store.dispatch('add',2)
    // },
    // jumpMian() {
    //   this.$router.push("/main"); //  跳转到main页面
    // },
    aboutMe(){
      this.$router.push("/rehead")
      this.showHeadContent = false
    },
    rouIn(index){
      if(index == 4){
        this.$router.push('/')
      }
    },
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.head {
  background-image: url(../img/01.jpg);
  height: 675px;
  color: white;
  overflow: hidden;
}

.head-content {
  margin-top: 180px;
  text-align: center;
}

.head-content p {
  font-size: 24px;
  font-family: "ink free";
}

.head-content h1 {
  font-size: 68px;
  margin: 30px 0;
}

.head-content a {
  text-decoration: none;
  color: white;
  font-size: 24px;
  font-family: "ink free";
  border-bottom: 1px solid white;
}

.head-content a:hover{
  cursor: pointer;
}

/* head结束 */
</style>
