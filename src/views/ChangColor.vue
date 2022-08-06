<template>
  <div>
    <h1>Chang website color</h1>
    <div :style="{ '--main-color': color }">
      <ul>
        <li data-color="red" @click="updateColor"></li>
        <li data-color="rgb(10, 40, 80)" @click="updateColor"></li>
        <li data-color="rgb(27, 207, 177)" @click="updateColor"></li>
        <li data-color="rgb(129, 11, 113)" @click="updateColor"></li>
      </ul>
      <div class="color">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      color: "red",
    };
  },
  methods: {
    updateColor(e) {
      this.color = e.target.getAttribute("data-color");
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    list-style-type: none;
    margin: 10px 5px;
    width: 30px;
    height: 30px;
    background-color: #000;
    cursor: pointer;
  }
  li:first-child {
    background-color: red;
  }
  li:nth-child(2) {
    background-color: rgb(10, 40, 80);
  }
  li:nth-child(3) {
    background-color: rgb(27, 207, 177);
  }
  li:last-child {
    background-color: rgb(129, 11, 113);
  }
}
.color {
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    margin: 10px;
    width: 150px;
    height: 50px;
    background-color: var(--main-color);
  }
}
</style>
