<template>
  <div class="panelMain">
    <div class="panel">
      <!-- body -->
      <transition
          name="panel-fade"
          @enter="enter"
          @before-leave="beforeLeave"
          @leave="leave"
      >
        <div class="panel__body" v-show="ifShowBody" ref="panel__body_height">
          <slot>
            <div class="box"></div>
          </slot>
        </div>
      </transition>
      <!-- footer -->
      <div class="panel__footer" @click="iconClick">{{ ifShowBody ? '收起' : '更多' }}</div>
    </div>
    <slot name="main">
      <div class="main" ref="main"></div>
    </slot>
  </div>
</template>
<script>
import velocity from "velocity-animate";

export default {
  name: "panel",
  props: {},
  data() {
    return {
      bodyHeight: 0,
      ifShowBody: true
    };
  },
  computed: {},
  mounted() {
    this.$refs.main.style.height = "calc(100% - " + (this.$refs.panel__body_height.offsetHeight * 2) + "px)";
  },
  methods: {
    iconClick() {
      this.ifShowBody = !this.ifShowBody;
    },
    enter(el, done) {
      var self = this;
      velocity(
          el,
          {height: self.bodyHeight + "px"},
          {duration: 500, complete: done}
      );
      this.$refs.main.style.height = "calc(100% -  " + (self.bodyHeight * 2) + "px)";
    },
    beforeLeave(el, done) {
      this.bodyHeight = el.clientHeight;
      this.$refs.main.style.height = "calc(100% -  " + el.clientHeight + "px)";
    },
    leave(el, done) {
      el.style.height = el.clientHeight + "px";
      velocity(el, {height: "0px"}, {duration: 500, complete: done});
    }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 100px;
  background-color: rgb(232, 238, 175);
}

.panel__body {
  overflow: hidden;
}

.panel__footer {
  width: 100%;
  height: 15px;
  text-align: center;
  font-size: 12px;
  background-color: paleturquoise;
  color: #000;
  cursor: pointer;
}

.main {
  width: 100%;
  background-color: palevioletred;
  margin: 10px auto;
  transition: all .8s ease;
}

.panelMain {
  width: 100%;
  height: 100%;
}
</style>