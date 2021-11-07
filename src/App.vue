<template>
  <div id="app">
    <Header />

    <main>
      <section>
        <h2>正在进行</h2>
        <div class="count">
          <span>
            {{ $store.state.todos.filter((item) => !item.done).length }}
          </span>
        </div>
      </section>

      <List :todos="$store.state.todos.filter((item) => !item.done)" />

      <section>
        <h2>已经完成</h2>
        <div class="count">
          <span>
            {{ $store.state.todos.filter((item) => item.done).length }}
          </span>
        </div>
      </section>

      <List :todos="$store.state.todos.filter((item) => item.done)" />
    </main>

    <Footer />
  </div>
</template>

<script>
/* 
正在进行 ongoing
已完成 completed
*/
export default {
  name: "App",
  components: {
    Header: () => import("./components/Header.vue"),
    Footer: () => import("./components/Footer.vue"),
    List: () => import("./components/List.vue"),
  },
};
</script>

<style>
body {
  margin: 0;
  --main-width: 800px;
  background-color: #ddd;
}
@media screen and (max-width: 800px) {
  body {
    --main-width: auto;
  }
  .el-dialog {
    width: 90%;
  }
}
main {
  width: var(--main-width);
  /* background-color: #e67e22; */
  margin: 0 auto;
}
</style>
<style scoped>
section {
  display: flex;
  justify-content: space-between;
  line-height: 3em;
}
h2 {
  font-size: 18px;
  font-weight: normal;
  margin: 0;
}
.count span {
  background-color: #fff;
  /* background-color: red; */
  display: inline-block;
  box-sizing: border-box;
  min-width: 18px;
  text-align: center;
  line-height: 16px;
  font-size: 14px;
  padding: 2px 4px;
  border-radius: 9px;
}
</style>
