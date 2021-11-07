<template>
  <div>
    <section
      v-for="(todo, index) in todos"
      :key="index"
      :class="{
        ongoing: !todo.done,
        completed: todo.done,
        dragging: !todo.done && dragging,
      }"
      :draggable="!todo.done"
      @dragstart="handleDragstart($event, todo)"
      @dragover="!todo.done && handleDragover($event)"
      @drop="!todo.done && handleDrop($event)"
      :data-todo="todo"
      @dragend="handleDragend"
    >
      <div class="mask" :data-todo="JSON.stringify(todo)"></div>
      <!-- 复选框 -->
      <div
        class="checkbox"
        :class="{
          checked: todo.done,
        }"
        @click="handleDoneTodo(todo.id)"
      ></div>

      <!-- 内容 -->
      <div class="content">{{ todo.content }}</div>

      <!-- 编辑按钮 -->
      <div class="delete">
        <el-button
          type="primary"
          icon="el-icon-edit"
          circle
          size="mini"
          @click="handleEditTodo(todo.id, todo.content)"
        ></el-button>
      </div>

      <!-- 删除按钮 -->
      <div class="delete">
        <el-button
          type="danger"
          icon="el-icon-delete"
          circle
          size="mini"
          @click="handleDeleteTodo(todo.id)"
        ></el-button>
      </div>
    </section>

    <!-- 对话框。不能在 v-for 中正确的传 id -->
    <el-dialog
      title="修改待办事项"
      :visible.sync="dialogFormVisible"
      width="600px"
      :close-on-click-modal="false"
    >
      <el-form @submit.native.prevent>
        <el-form-item>
          <el-input
            v-model="content"
            autocomplete="off"
            placeholder="待办事项"
            @keyup.enter.native="handleClose"
          ></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>

        <el-button type="primary" @click="handleClose">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "List",
  props: ["todos"],
  data() {
    return {
      dialogFormVisible: false,
      id: 0, // 要编辑的 id
      content: "", // 要编辑的内容
      dragging: false,
    };
  },
  methods: {
    // 完成/取消完成
    handleDoneTodo(id) {
      // console.log(id);
      this.$store.commit("doneTodo", id);
    },
    // 编辑
    handleEditTodo(id, content) {
      this.id = id;
      this.content = content;
      this.dialogFormVisible = true;
    },
    // 删除
    handleDeleteTodo(id) {
      // console.log(id);
      this.$store.commit("deleteTodo", id);
    },
    // 提交编辑
    handleClose() {
      if (!this.content.trim()) {
        this.dialogFormVisible = false;
        return;
      }
      this.$store.commit("editTodo", {
        id: this.id,
        content: this.content,
      });
      this.dialogFormVisible = false;
    },
    // 开始拖拽
    handleDragstart(event, todo) {
      // console.log("开始拖拽", event, todo);
      this.dragging = true;
      // event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", JSON.stringify(todo));
    },
    handleDragover(event) {
      event.preventDefault();
    },
    // 释放拖拽
    handleDrop(event) {
      event.preventDefault();
      // console.log("drop");
      // console.log(
      //   "拖拽数据",
      //   JSON.parse(event.dataTransfer.getData("text/plain"))
      // );
      // console.log("释放目标", event.target);
      // console.log("释放目标数据", JSON.parse(event.target.dataset.todo));
      const currentTodoId = JSON.parse(
        event.dataTransfer.getData("text/plain")
      ).id;
      const targetTodoId = JSON.parse(event.target.dataset.todo).id;
      console.log(currentTodoId, targetTodoId);

      // swapTodoPosition
      this.$store.commit("swapTodoPosition", [currentTodoId, targetTodoId]);
    },
    // 拖拽结束
    handleDragend() {
      // 不能放到释放拖拽中，因为如果不是在可释放目标上释放，不会触发 drop 事件
      this.dragging = false;
    },
    handleEmpty() {},
  },
};
</script>

<style scoped>
section {
  line-height: 1.9;
  border-left: 6px solid #16a085;
  display: flex;
  margin: 10px 0;
  border-radius: 6px;
  background-color: #fff;
  padding: 4px 0;
}
section.completed {
  background-color: #f0f0f0;
  color: #909399;
}
.checkbox::before {
  content: "";
  width: 16px;
  height: 16px;
  /* background-color: pink; */
  border: 1px solid #909399;
  cursor: pointer;
  border-radius: 3px;
}
.checkbox.checked::before {
  background-color: #909399;
}
.checkbox.checked::after {
  cursor: pointer;
  content: "";
  position: absolute;
  width: 10px;
  height: 5px;
  border-left: 2px solid #eee;
  border-bottom: 2px solid #eee;
  transform: translateY(-2px) rotate(-45deg);
}

.checkbox,
.edit,
.delete {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  flex: 18;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

section.ongoing {
  cursor: move;
}
section.dragging {
  /* section { */
  position: relative;
}
section.dragging .mask {
  /* section .mask { */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: 0 0 2px #16a085;
  border-radius: 0 6px 6px 0;
}
</style>
