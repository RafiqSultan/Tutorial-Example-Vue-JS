<template>
  <div>
    <h1>ConvertTitleToSlug</h1>
    <form action="#">
      <input :type="feildType" placeholder="input password" />
      <button @click.prevent="switchFeild">{{ ShowAndHide }}</button>
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      ShowAndHide: "Show",
      feildType: "password",
    };
  },
  methods: {
    switchFeild() {
      // this.feildType==="password" ? "text "this.ShowAndHide="Hide" :"password",this.ShowAndHide="password";
      if (this.feildType === "password") {
        this.ShowAndHide = "Hide";
        this.feildType = "text";
      } else {
        this.ShowAndHide = "Show";
        this.feildType = "password";
      }
    },
  },
};
</script>
