<script setup>
import velocity from "velocity-animate";

const box = ref(null)
const info_height = ref(null)
const title_height = ref(null)
const img_icon = ref(null)
const show = ref(false)


const enter = (el, done) => {
  console.log("enter")
  velocity(
      box.value,
      {height: info_height.value.offsetHeight + title_height.value.offsetHeight + 10 + "px"},
      {easing: [12, 6], duration: 400, complete: done}
  )
  velocity(
      img_icon.value,
      {rotateZ: "90deg"},
      {easing: [12, 6], duration: 400, complete: done}
  )
}

const before_leave = (el, done) => {
  console.log("before leave")
  /*box.value.style.height =String( info_height.value.offsetHeight + title_height.value.offsetHeight) + 10+"px"*/
  console.log("before leave")
}

const leave = (el, done) => {
  console.log("leave")
  velocity(
      box.value,
      {height: "40px"},
      {duration: 400, complete: done}
  )
  velocity(
      img_icon.value,
      {rotateZ: "0deg"},
      {duration: 400, complete: done}
  )
}
</script>


<template>

  <div class="panel">
    <div class="panel__body">
      <div class="box" ref="box">

        <div class="image" @click="show=!show"><img src="@/assets/icon/icon.svg" alt="点击展开信息"
                                                    ref="img_icon"></img></div>
        <div class="passage">
          <div class="title" ref="title_height">这是一段测试文本</div>

          <Transition name="info_fade" @enter="enter" @before-leave="before_leave" @leave="leave">
            <div class="info" ref="info_height" v-if="show">
              勤工助学与就业指导中心主要负责人张耀丹发言。在过去的一年里，勤工助学与就业指导中心为学院广大有需求的同学们，提供了大量勤工岗位，并开展了数次就业招待会与各项活动，既为学生们的勤工助学与就业指导方面提供了全面的帮助与引导，也丰富了同学们的课余生活。勤工钉钉管理制度的推行，推动了勤工日常管理的规范，为日后整体工作的流畅提供了保障。
            </div>
          </Transition>

        </div>

      </div>
    </div>
  </div>

</template>


<style>

.panel__body {
  margin: 20px;
}

.box {
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 300px;
  background: #e6e6e6;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);


}

.box .image img {
  width: 20px;
  height: 20px;
  border-radius: 8px 0 0 8px;
  margin: 10px;
}

.box .passage .title {
  height: 40px;
  padding: 5px;
  font-size: 20px;
}

.box .passage .info {
  word-break: break-all;
}
</style>