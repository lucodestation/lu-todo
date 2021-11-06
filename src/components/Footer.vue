<template>
  <footer>
    Copyright &copy; 2021
    <span @click="handleCleanTodos">清除</span>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    handleCleanTodos() {
      this.$store.commit("cleanTodos");
    },
  },
};
</script>

<style scoped>
footer {
  /* background-color: #e67e22; */
  /* box-shadow: 0 -2px 2px 0 #00000033; */
  text-align: center;
  color: #909399;
  padding: 20px 0;
}
span {
  color: #f56c6cdd;
  cursor: pointer;
}
span:hover {
  color: #f56c6c;
}
</style>
