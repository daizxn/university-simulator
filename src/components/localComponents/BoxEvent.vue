<script setup>
import {Event} from "@/assets/js/event.js";
import {Data} from "@/assets/js/data.js";
import VanillaTilt from "vanilla-tilt";


const props = defineProps({
  event: {
    type: Object,
    default() {
      return new Event(-1, "测试标题",
          "这里有大量的测试文本这里有大量的测试文本这里有大量的测试文本这里有大量的测试文本",
          1, new Data(1, -0.5, 1, 1, 1));
    }
  },
})

const event = ref(props.event)

/*测试数据*/
const t = ref(new Event(1, "测试标题",
    "这里有大量的测试文本这里有大量的测试文本这里有大量的测试文本这里有大量的测试文本",
    1, new Data(1, -0.5, 1, 1, 1)));

const mouseEnterFlag = ref(false)


const box_3D_change = () => {
  /*增加3D效果*/
  console.log(1)
  VanillaTilt.init(document.querySelectorAll(".background-box"), {
    max: 10,
    speed: 300,
    glare: true,
    "max-glare": 0.5,
  });
}


</script>

<template>
  <div class="background-box" @mouseenter="[box_3D_change(),mouseEnterFlag=true]" @mouseleave="mouseEnterFlag=false">
    <div class="info-box">
      <span class="title">{{ event.title }}</span>
      <p class="info" v-if="mouseEnterFlag">{{ event.info }}</p>
    </div>
  </div>
</template>

<style scoped>
.background-box {
  background: #f2f2f2;
  width: 400px;
  height: 150px;
  border-radius: 10px;
  box-shadow: 0 25px 35px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;

  transform-style: preserve-3d;
  transition: background 0.25s;

}

.background-box .info-box {
  width: 200px;
  height: 50%;
  background: #2c3e50;
  border-radius: 3px 3px 8px 8px;

  justify-content: center;
  text-align: center;

  transition: 0.5s;
}

.background-box .info-box .title {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  /*  margin-top: 10px;*/
}

.background-box:hover {
  background: darkseagreen;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.25);
}

.background-box:hover .info-box {
  background: #fff;
  border-radius: 8px;
  transform: translateZ(50px) scale(1.5) translateY(23px);
}

.background-box:hover .info-box .title {
  color: #2c3e50;
}

.background-box:hover .info-box .info {
  color: #2c3e50;
  font-size: 10px;
}
</style>