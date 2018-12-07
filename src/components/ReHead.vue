<template>
  <div>
    <div class="leader">
      <LeaderComponent></LeaderComponent>
    </div>
    <div class="content">
      <div class="paper">
        <div class="box">
          <h1>简历</h1>
          <div class="p-head">
            <div class="p-h-left">
              <p>
                <span>前端开发</span>正式工作或实习
              </p>
            </div>
            <div class="p-h-center">
              <p>喜欢并擅长协调、经营的工作。关注用户的内容偏好，有一定的数据分析能力。喜欢新技术、新产品，对互联网产品的运营有浓厚的兴趣和热情。坚信好的互联网产品必将营造更美好的生活。</p>
            </div>
            <div class="p-h-photo">
              <img src="../img/wechat.jpg" alt="头像">
            </div>
          </div>
          <!-- 简历内容 -->
          <div class="p-content">
            <!-- 简历左边 -->
            <div class="p-c-left">
              <!-- table1 -->
              <table>
                <tr>
                  <th>个人信息</th>
                </tr>
                <tr>
                  <td>姓名 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>
                </tr>
                <tr>
                  <td>生日 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>
                </tr>
                <tr>
                  <td>所在地&nbsp; &nbsp; &nbsp; &nbsp;</td>
                </tr>
                <tr>
                  <td>Email&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>
                </tr>
                <tr>
                  <td>手机 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>
                </tr>
                <tr>
                  <td>QQ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>
                </tr>
              </table>
              <!-- table2 -->
              <table class="t2">
                <tr>
                  <th>教育背景</th>
                </tr>
                <tr>
                  <td>
                    <span class="orange">广东理工学院</span>
                  </td>
                </tr>
                <tr>
                  <td>信息工程系 &nbsp; &nbsp;软件技术专业</td>
                </tr>
                <tr>
                  <td>大专&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2016-至今</td>
                </tr>
              </table>
              <!-- table3 -->
              <table class="t2">
                <tr>
                  <th>个人技能</th>
                </tr>
                <tr>
                  <td>Html</td>
                </tr>
                <tr>
                  <td>CSS </td>
                </tr>
                <tr>
                  <td>JavaScript</td>
                </tr>
                <tr>
                  <td>jQuery</td>
                </tr>
                <tr>
                  <td>Vue</td>
                </tr>
              </table>
              <!-- table4 -->
              <table class="t2">
                <tr>
                  <th>所获荣誉</th>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                </tr>
              </table>
            </div>
            <!-- 简历右边 -->
            <div class="p-c-right">
                <h2>实践经验</h2>
                <div class="practice">
                  <!-- 左边 -->
                  <div class="practice-left">
                      <div class="leftBox1 diamonds">
                        <P>微软在线 产品技术支持 实习生为Surface、Windows、Office等产品的用户提供技术支持，统计用户意见和数据；分析反馈数据和用户意见，提高用户对产品的期望，提交总结和建议报告。</p>
                      </div>
                      <p>2013.09-2014.09</p>
                      <div class="leftBox2 diamonds">
                        <P>微软在线 产品技术支持 实习生为Surface、Windows、Office等产品的用户提供技术支持，统计用户意见和数据；分析反馈数据和用户意见，提高用户对产品的期望，提交总结和建议报告。</p>
                      </div>
                      <p>2013.09-2014.09</p>
                      <div class="leftBox3 diamonds">
                        <P>微软在线 产品技术支持 实习生为Surface、Windows、Office等产品的用户提供技术支持，统计用户意见和数据；分析反馈数据和用户意见，提高用户对产品的期望，提交总结和建议报告。</p>
                      </div>
                  </div>
                  <!-- 中间 -->
                  <div class="practice-center">

                  </div>
                  <!-- 右边 -->
                  <div class="practice-right">
                    <ul>
                      <li>2014.07-2014.10</li>
                    </ul>
                    <li class="secondPoint"></li>
                    <div class="diamonds rightBox1">
                        <p>竞猜系统的开发和运营 负责人前期LAMP平台开发和后续运营至今，分析用户数据，研究用户习惯，从而有正对性地丰富产品内容并修补系统漏洞；</p>
                    </div>
                    <ul>
                      <li class="right-third-point">2014.07-2014.10</li>
                    </ul>
                    <div class="diamonds rightBox2">
                        <p>竞猜系统的开发和运营 负责人前期LAMP平台开发和后续运营至今，分析用户数据，研究用户习惯，从而有正对性地丰富产品内容并修补系统漏洞；</p>
                    </div>
                    <li class="thirdPoint"></li>
                    <ul>
                      <li class="right-third-point">2014.07-2014.10</li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeaderComponent from "./leader";
export default {
  name: "rehead",
  data() {
    return {
      show2: true,

    };
  },
  created() {

  },
  components: {
    LeaderComponent
  }
};
</script>



<style scoped>
.leader {
  background: url("../img/ReheadBG.jpg");
  overflow: hidden;
  color: white;
}

.content {
  width: 100%;
  height: 100%;
  background-color: #f3f3f3;
  overflow: hidden;
}
.paper {
  width: 210mm;
  /* height: 100%; */
  height: 260mm;
  margin: 30px auto;
  background-color: white;
  box-shadow: 0px 0px 15px #888888;
  overflow: hidden;
}
.box {
  width: 95%;
  height: 90%;
  margin: auto;
}
.box h1 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 2rem;
}
.p-head {
  display: flex;
  justify-content: space-between;
  color: #8b8b8b;
  font-weight: 550;
}
.orange {
  color: #f89f63;
  font-weight: 550;
  padding-right: 5px;
  font-size: 14px;
}

.p-h-left span {
  color: #f89f63;
  font-weight: 550;
  padding-right: 5px;
}

.p-h-center {
  width: 50%;
}
.p-h-center p {
  font-size: 12px;
}

.p-h-photo {
  height: 70px;
}
.p-h-photo img {
  position: relative;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  top: -50px;
}
/*头部结束*/

/*内容开始*/
.p-content {
  display: flex;
}
.p-c-right{
  width: 70%;
}
.p-c-left{
  width: 30%;
}
/*表格*/
td {
  width: 220px;
  border-bottom: 1px solid #b1b1b1;
  text-align: left;
  padding-top: 10px;
  color: #6b6b6b;
  font-size: 14px;
}
th {
  width: 220px;
  border-bottom: 1px solid #b1b1b1;
  text-align: left;
  padding-top: 10px;
  color: #6b6b6b;
  font-size: 17px;
}
.t2 {
  margin: 20px 0;
}


/* 主要内容右边 */
.p-c-right h2{
  width: 100%;
  text-align: center;
  padding-top: 10px;
  color: #6b6b6b;
  font-size: 17px;
}

.practice{
  display: flex;
}
.practice-center{
  height: 200mm;
  border: 2px solid #c5c5c5;
  margin: 15px;
}
.p-c-right p{
  font-size: 14px;
}
/*方块*/
.diamonds{
  width: 200px;
  box-shadow: 0px 5px 10px #6b6b6b;
  padding: 10px;
  color: white;
  font-weight: 600;
}
/*左边的方块*/
.leftBox1{
  background-color: skyblue;
  margin: 5px 0px 50px 30px;
}
.leftBox2{
  background-color: #97a6bd;
  margin: 75px 0px 50px 30px;
}
.leftBox3{
  background-color: #a4bb83;
  margin: 75px 0px 50px 30px;
}
/*右边的方块*/
.rightBox1{
  background-color: #9cc3c2;
  margin-top: 25px;
}
.rightBox2{
  background-color: #d697b2;
  margin-top: 120px;
}

ul li{
  width: 100%;
  margin: 30px 0 70px 0;
  font-size: 15px;
  color: #535353;
  font-weight: 600;
}
.practice-right li:first-child{
  position: relative;
  left: -3px;
  
}
.right-third-point{
  top: 30px;
}
/*第二个点*/
.secondPoint{
  position: relative;
  top: 10%;
  left: -19px;
}
.practice-left p:nth-child(2){
  text-align: right;
  font-size: 15px;
  color: #535353;
  font-weight: 600;
  margin-top: 59px;
}
/*第三个点*/
.thirdPoint{
  position: relative;
  top: -9%;
  left: -19px;
}
.practice-left p:nth-child(4){
  text-align: right;
  font-size: 15px;
  color: #535353;
  font-weight: 600;
  margin-top: 63px;
}
</style>
