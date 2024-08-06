<script setup>
import {Event} from "@/assets/js/event.js";
import {Data} from "@/assets/js/data.js";

const event = ref(new Event(-1, "测试",
    "这里有大量的测试文本这里有大量的测试文本这里有大量的测试文本这里有大量的测试文本",
    1, new Data(1, -0.5, 1, 1, 1)));


const eventChoiceBox = ref(null)
const changeEventBackground_enter = () => {
  eventChoiceBox.value.style.background = 'darkseagreen'
}
const changeEventBackground_leave = () => {
  eventChoiceBox.value.style.background = '#f1f1f1'
}
</script>

<template>
  <div class="bottomBackground">
    <div style="height: 100%">
      <div class="termBur">
        <h1>第一学期</h1>
      </div>
      <div class="statusBur">
    <span class="detail-status-info">
      <span>心情</span>
      <span>199</span>
    </span>
        <span class="detail-status-info">
      <span>健康</span>
      <span>199</span>
    </span>
        <span class="detail-status-info">
      <span>金钱</span>
      <span>199</span>
    </span>
        <span class="detail-status-info">
      <span>知识</span>
      <span>199</span>
    </span>
        <span class="detail-status-info">
      <span>见识</span>
      <span>199</span>
    </span>
      </div>
      <div class="information-box">
        <a class="eventBur">11</a>
        <a class="eventChoice" ref="eventChoiceBox">
          <div>
            <BoxEvent @mouseenter="changeEventBackground_enter" @mouseleave="changeEventBackground_leave"
                      :event="event"></BoxEvent>
          </div>
          <div>
            <BoxEvent @mouseenter="changeEventBackground_enter" @mouseleave="changeEventBackground_leave"
                      :event="event"></BoxEvent>
          </div>
          <div>
            <BoxEvent @mouseenter="changeEventBackground_enter" @mouseleave="changeEventBackground_leave"></BoxEvent>
          </div>
          <div>
            <BoxEvent @mouseenter="changeEventBackground_enter" @mouseleave="changeEventBackground_leave"></BoxEvent>
          </div>
        </a>
        <a class="yourClassInformation">33</a>
      </div>
    </div>
  </div>

</template>

<style lang="less" scoped>
.bottomBackground {
  overflow: auto;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.termBur {

  text-align: center;
  padding: 20px;
  background-color: #f1f1f1;
}

.statusBur {
  overflow: hidden;
  background-color: #333;
  text-align: center;
  padding: 30px;
  position: relative;
  top: 0;
}

.statusBur .detail-status-info {
  padding: 14px;
  color: white;
  white-space: nowrap;
}

.information-box {
  display: flex;
  overflow: auto;
  flex-direction: row;
  margin: 20px;
}

.information-box a {
  margin: 10px;
  border-radius: 20px;
  background-color: #f1f1f1;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
}


.information-box .eventBur {
  width: 25%;
}

.information-box .eventChoice {
  width: 50%;
}

.information-box .yourClassInformation {
  width: 25%;
}

.information-box a div {
  margin: 10px;
  display: flex;
  justify-content: center;
}
</style>