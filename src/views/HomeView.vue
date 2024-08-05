<script setup>

</script>

<template>
  <div class="box">
    <div class="title">
      <h1>欢迎来到XXXX大学</h1>
      <h1>让我们开始愉快的大学生涯把</h1>
    </div>
    <div class="begin-button">
      <button>
        <router-link to="/simulator">Begin</router-link>
      </button>
    </div>
  </div>
</template>

<style scoped>
.box {
  text-align: center;
  background-color: #fff;
  border-radius: 20px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.title {
  text-align: center;
  width: auto;
  height: 100px;
}

.begin-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100px;

}

button {
  width: 100px;
  height: 50px;
  color: white;
  border: none;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>