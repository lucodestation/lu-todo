import{n as a}from"./index.bdb788aa.js";import"./vendor.96ebac8f.js";var d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("header",[t("section",[t("h1",[e._v("\u5F85\u529E\u4E8B\u9879\u5217\u8868")]),t("div",{staticClass:"input"},[t("el-input",{attrs:{placeholder:"\u6DFB\u52A0\u5F85\u529E\u4E8B\u9879"},nativeOn:{keyup:function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.handleAddTodo.apply(null,arguments)}},model:{value:e.todo,callback:function(o){e.todo=o},expression:"todo"}})],1)])])},s=[];const i={name:"Header",data(){return{todo:""}},methods:{handleAddTodo(){const e=this.todo.trim();e!==""&&(this.$store.commit("addTodo",e),this.todo="")}}},r={};var l=a(i,d,s,!1,_,"6d373034",null,null);function _(e){for(let n in r)this[n]=r[n]}var p=function(){return l.exports}();export{p as default};