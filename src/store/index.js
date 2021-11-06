import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const todos = JSON.parse(localStorage.getItem("todos")) || [];

const state = {
  todos,
};

export default new Vuex.Store({
  state,
  mutations: {
    // 添加
    addTodo(state, payload) {
      // 确定 id 。最大的 id 加 1
      let id = 0;
      if (state.todos.length) {
        id = Math.max(...state.todos.map((item) => item.id)) + 1;
      }
      // 组织对象
      const todo = {
        id,
        content: payload,
        done: false,
      };
      // 保存状态
      state.todos.unshift(todo);
      // 本地存储
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    // 完成/取消完成
    doneTodo(state, payload) {
      let todo = {};
      state.todos.map((item, index) => {
        if (item.id === payload) {
          todo = state.todos.splice(index, 1)[0];
        }
      });
      if (todo.done) {
        // console.log("点击的是已完成的项");
        todo.done = false;
        state.todos.push(todo);
      } else {
        // console.log("点击的是正在进行的项");
        todo.done = true;
        state.todos.unshift(todo);
      }
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    // 删除
    deleteTodo(state, payload) {
      state.todos.splice(
        state.todos.findIndex((item) => item.id === payload),
        1
      );
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    // 清空
    cleanTodos(state) {
      state.todos = [];
      localStorage.clear("todos");
    },
    // 编辑
    editTodo(state, payload) {
      state.todos.map((item, index) => {
        if (item.id === payload.id) {
          item.content = payload.content;
        }
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
  actions: {},
  modules: {},
});
