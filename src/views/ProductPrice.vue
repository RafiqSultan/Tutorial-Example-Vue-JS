<template>
  <div>
    <h1>Calculate product price</h1>
    <div class="product">
      <h3>product title</h3>
      <h4>product desc</h4>
      <span class="pric">price : ${{ price }}</span>
      <input type="range" min="1" max="20" v-model="amount" />

      <div class="price">
        <span>amount:{{ amount }}</span>
        <span>Total :$ {{ totlalPrice }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      amount: 1,
      price: 50,
    };
  },
  computed: {
    totlalPrice: function () {
      return this.amount * this.price;
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  text-align: center;
  background-color: lightblue;
  width: 300px;
  height: 300px;
  .pric {
    margin: 10px 0;
    display: block;
  }

  .price {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
  }
}
</style>
