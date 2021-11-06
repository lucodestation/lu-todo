<template>
  <ul>
    <li>
      <div class="checkbox"></div>
      <div class="content">
        这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话
      </div>
      <div class="delete">
        <el-button
          type="danger"
          icon="el-icon-delete"
          circle
          size="mini"
        ></el-button>
      </div>
    </li>
    <li>
      <div class="checkbox checked"></div>
      <div class="content">
        这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话这是一句话
      </div>
      <div class="delete">
        <el-button
          type="danger"
          icon="el-icon-delete"
          circle
          size="mini"
        ></el-button>
      </div>
    </li>
  </ul>
</template>

<style scoped>
ul {
  width: var(--main-width);
  /* background-color: #f39c12; */
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 1.9;
}
li {
  border-left: 6px solid #67c23a;
  display: flex;
  margin: 1em 0;
  border-radius: 6px;
}
.checkbox {
  /* background-color: red; */
}
.checkbox::before {
  content: "";
  width: 16px;
  height: 16px;
  /* background-color: pink; */
  border: 1px solid #909399;
  cursor: pointer;
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
