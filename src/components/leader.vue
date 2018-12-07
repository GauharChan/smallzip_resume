<template>
    <div>
        <div class="leader">
          <a class="leader-span" href="#">Gauhar</a>
          <div class="head-btn">CONTACT</div>
          <div class="head-text" v-for="(leader,index) in leaders" @mouseleave='hiddenDiv(index)' :key="leader.id">
              <a @click="rouIn(index)" @mouseenter='showDiv(index)'>{{leader.text}}</a>
          </div>
      </div>
      <div class="head-div" v-for="(leader,index) of leaders" @mouseleave='hiddenDiv(index)' :key="leader.id" >
          <div @mouseenter='showDiv(index)' :class="{headDefault:isDefault,headD1:isD1,headD2:isD2,headD3:isD3,}"
              v-show="leader.condition">{{leader.text}}</div>
      </div>
    </div>
</template>

<script>
export default {
  name: "leader",
  data() {
    return {
      leaders: [
        {
          text: "PROJECTS",
          condition: false,
          id: 1,
          num: 0
        },
        {
          text: "ENTERTAINMENT ARTS",
          condition: false,
          id: 2,
          num: 1
        },
        {
          text: "THEME PARK",
          condition: false,
          id: 3,
          num: 2
        },
        {
          text: "MARS PATHFINDER",
          condition: false,
          id: 4,
          num: 3
        },
        {
          text: "HOME",
          id: 5,
          num: 4
        }
      ],
      isDefault: true,
      isD1: false,
      isD2: false,
      isD3: false
    };
  },
  methods: {
    // 导航条
    rouIn(index) {
      if (index == 4) {
        this.$router.push("/");
      }
    },
    showDiv(index) {
      if (index == 0) {
        this.leaders[0].condition = true;
        this.isD3 = true;
      } else if (index == 1) {
        this.leaders[1].condition = true;
        this.isD2 = true;
      } else if (index == 2) {
        this.leaders[2].condition = true;
        this.isD1 = true;
      } else if (index == 3) {
        this.leaders[3].condition = true;
      }
    },
    hiddenDiv(index) {
      if (index == 0) {
        this.leaders[0].condition = false;
        this.isD3 = false;
      } else if (index == 1) {
        this.leaders[1].condition = false;
        this.isD2 = false;
      } else if (index == 2) {
        this.leaders[2].condition = false;
        this.isD1 = false;
      } else {
        this.leaders[3].condition = false;
      }
    }
  }
};
</script>

<style scoped>
.leader {
  margin-top: 35px;
  color: #fff;
}

.leader a {
  text-decoration: none;
  color: white;
  margin-left: 20px;
}

.leader-span {
  font-size: 20px;
}

.head-text {
  float: right;
}

.head-text a {
  margin: 0px 35px 0 0;
  font-size: 13px;
  font-weight: 600;
  opacity: 0.9;
  padding-bottom: 5px;
  cursor: pointer;
}

.head-div {
  display: flex;
  float: right;
}

.headDefault {
  width: 150px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 13px;
  font-weight: 600;
  background-color: #87CEEB;
  border-radius: 15px;
  margin: 5px 0 0px 0px;
  position: relative;
  left: -432px;
  top: -8px;
}

.headDefault:hover {
  cursor: pointer;
}

.headD1 {
  position: relative;
  left: -305px;
  width: 120px;
}

.headD2 {
  position: relative;
  width: 165px;
  left: -135px;
}

.headD3 {
  position: relative;
  left: -20px;
  width: 100px;
  
}

.head-btn {
  float: right;
  text-align: center;
  line-height: 43px;
  width: 116.5px;
  height: 43px;
  border-radius: 25px;
  border: 2px solid white;
  margin: -15px 20px 48px 0px;
}

.head-btn:hover {
  cursor: pointer;
  color: black;
  background-color: #fff;
}
</style>


