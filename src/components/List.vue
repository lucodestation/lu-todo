<template>
  <div>
    <section
      v-for="(todo, index) in todos"
      :key="index"
      :class="{
        ongoing: !todo.done,
        completed: todo.done,
      }"
    >
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
      <el-form>
        <el-form-item>
          <el-input
            v-model="content"
            autocomplete="off"
            placeholder="待办事项"
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
</style>
