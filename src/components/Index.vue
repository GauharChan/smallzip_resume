<template>
    <div>
        <HeadComponent></HeadComponent>
        <MainComponent></MainComponent>
        <FootComponent></FootComponent>
    </div>
</template>

<script>
import HeadComponent from "./Head"; //  引入组件
import MainComponent from './Main';
import FootComponent from "./Foot";
export default {
  name: "Index",
  components: {
    HeadComponent,
    MainComponent,
    FootComponent
  },
  created() {
       console.log(`
    Author:Gauhar
⊂_ヽ
　 ＼＼  Λ＿Λ
　　 ＼( 'ㅅ' )
　　　 >　⌒ヽ
　　　/ 　 へ＼
　　 /　　/　＼＼
　　 ﾚ　ノ　　 ヽ_つ
　　/　/
　 /　/|`);
    
  },
}
</script>




