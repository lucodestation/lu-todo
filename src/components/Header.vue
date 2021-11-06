<template>
  <header>
    <section>
      <h1>待办事项列表</h1>
      <div class="input">
        <!-- Element UI 的 el-input 组件绑定键盘事件需要添加 .native 修饰符 -->
        <el-input
          v-model="todo"
          placeholder="添加待办事项"
          @keyup.enter.native="handleAddTodo"
        ></el-input>
      </div>
    </section>

    <!-- 原生 input 元素绑定键盘事件不用加 .native 修饰符 -->
    <!-- <input v-model="todo" placeholder="添加待办事项" @keyup.enter="handleAddTodo" /> -->
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    handleAddTodo() {
      const todo = this.todo.trim();
      if (todo === "") {
        return;
      }
      this.$store.commit("addTodo", todo);
      this.todo = "";
    },
  },
};
</script>

<style scoped>
header {
  background-color: #303133;
  color: #fff;
  padding: 10px;
}
section {
  width: var(--main-width);
  /* 水平居中 */
  margin: 0 auto;
  /* 垂直居中 */
  display: flex;
  align-items: center;
}
h1 {
  font-size: 20px;
  font-weight: normal;
  margin: 0;
}
h1,
div {
  flex: 1;
}
</style>
