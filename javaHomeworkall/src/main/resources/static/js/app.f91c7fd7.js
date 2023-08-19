(function(){"use strict";var e={6832:function(e,t,r){var s=r(144),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},l=[],o={name:"App",components:{}},n=o,i=r(1001),u=(0,i.Z)(n,a,l,!1,null,null,null),c=u.exports,m=r(4720),d=r.n(m),h=r(8345),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",{staticClass:"box-card"},[r("h2",[e._v("登录")]),r("el-form",{ref:"ruleForm",staticClass:"login-form",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-position":"left","label-width":"70px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"uname"}},[r("el-input",{attrs:{type:"text"},model:{value:e.ruleForm.uname,callback:function(t){e.$set(e.ruleForm,"uname",t)},expression:"ruleForm.uname"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1)],1),r("div",{staticClass:"btnGroup"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("登录")]),r("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")]),r("router-link",{attrs:{to:"/register"}},[r("el-button",{staticStyle:{"margin-left":"10px"}},[e._v("注册")])],1)],1)],1)],1)},_=[],f=(r(7658),{data(){return{ruleForm:{uname:"",password:""},rules:{uname:[{required:!0,message:"用户名不能为空！",trigger:"blur"}],password:[{required:!0,message:"密码不能为空！",trigger:"blur"}]}}},methods:{submitForm(e){this.$refs[e].validate((e=>{if(this.loading=!0,!e)return this.$message.error("请输入所有信息！"),console.log("error submit!!"),!1;{let e=this;this.axios({method:"post",url:"/user/login",headers:{"Content-Type":"application/x-www-form-urlencoded"},params:{uname:e.ruleForm.uname,password:e.ruleForm.password}}).then((t=>{"0"===t.data.code?(sessionStorage.setItem("userInfo",JSON.stringify(t.data.data)),0===t.data.data.user_status&&this.$router.push("/teacher"),1===t.data.data.user_status&&this.$router.push("/student"),this.$message({message:t.data.msg,type:"success"})):this.$message({message:t.data.msg,type:"warning"}),e.loading=!1,console.log(t)}))}}))},resetForm(e){this.$refs[e].resetFields()}}}),v=f,b=(0,i.Z)(v,p,_,!1,null,"b82b181e",null),g=b.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",{staticClass:"box-card"},[r("h2",[e._v("注册")]),r("el-form",{ref:"ruleForm",staticClass:"register-form",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-position":"left","label-width":"80px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"uname"}},[r("el-input",{model:{value:e.ruleForm.uname,callback:function(t){e.$set(e.ruleForm,"uname",t)},expression:"ruleForm.uname"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),r("el-form-item",{attrs:{label:"用户身份",prop:"user_status"}},[r("el-radio-group",{model:{value:e.ruleForm.user_status,callback:function(t){e.$set(e.ruleForm,"user_status",t)},expression:"ruleForm.user_status"}},[r("el-radio",{attrs:{label:0}},[e._v("老师")]),r("el-radio",{attrs:{label:1}},[e._v("学生")])],1)],1),r("el-form-item",{attrs:{label:"电话",prop:"phone"}},[r("el-input",{attrs:{type:"text"},model:{value:e.ruleForm.phone,callback:function(t){e.$set(e.ruleForm,"phone",t)},expression:"ruleForm.phone"}})],1),r("el-form-item",{attrs:{label:"性别",prop:"gender"}},[r("el-radio-group",{model:{value:e.ruleForm.gender,callback:function(t){e.$set(e.ruleForm,"gender",t)},expression:"ruleForm.gender"}},[r("el-radio",{attrs:{label:"man"}},[e._v("男")]),r("el-radio",{attrs:{label:"woman"}},[e._v("女")])],1)],1),r("el-form-item",{attrs:{label:"班级",prop:"class_id"}},[r("el-radio-group",{model:{value:e.ruleForm.class_id,callback:function(t){e.$set(e.ruleForm,"class_id",t)},expression:"ruleForm.class_id"}},[r("el-radio",{attrs:{label:1}},[e._v("1班")]),r("el-radio",{attrs:{label:2}},[e._v("2班")]),r("el-radio",{attrs:{label:3}},[e._v("3班")])],1)],1)],1),r("div",{staticClass:"btnGroup"},[r("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("提交")]),r("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")]),r("el-button",{on:{click:e.goBack}},[e._v("返回")])],1)],1)],1)},w=[],x={data(){return{ruleForm:{uname:"",password:"",user_status:0,phone:"",gender:"",class_id:0},rules:{uname:[{required:!0,message:"用户名不能为空！",trigger:"blur"}],password:[{required:!0,message:"密码不能为空！",trigger:"blur"}],user_status:[{required:!0,message:"身份不能为空！",trigger:"blur"}],phone:[{required:!0,message:"电话不能为空！",trigger:"blur"}],gender:[{required:!0,message:"性别不能为空！",trigger:"blur"}],class_id:[{required:!0,message:"班级不能为空！",trigger:"blur"}]},loading:!1}},methods:{submitForm(e){this.$refs[e].validate((e=>{if(this.loading=!0,!e)return console.log("error submit!!"),this.loading=!1,!1;{let e=this;e.ruleForm.user_status=parseInt(e.ruleForm.user_status),e.ruleForm.class_id=parseInt(e.ruleForm.class_id),this.axios({method:"post",url:"/user/register",headers:{"Content-Type":"application/json"},data:{uname:e.ruleForm.uname,password:e.ruleForm.password,user_status:e.ruleForm.user_status,phone:e.ruleForm.phone,gender:e.ruleForm.gender,class_id:e.ruleForm.class_id}}).then((t=>{"0"===t.data.code?this.$message({message:t.data.msg,type:"success"}):this.$message({message:t.data.msg,type:"warning"}),e.loading=!1,console.log(t)}))}}))},resetForm(e){this.$refs[e].resetFields()},goBack(){this.$router.go(-1)}}},$=x,y=(0,i.Z)($,F,w,!1,null,"0a0f8415",null),k=y.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("欢迎"+e._s(e.user.uname)+"！您的 uid 为"+e._s(e.user.uid))]),r("el-table",{attrs:{data:e.userTableData,border:""}},[r("el-table-column",{attrs:{prop:"uname",label:"用户名"}}),r("el-table-column",{attrs:{prop:"password",label:"密码"}}),r("el-table-column",{attrs:{prop:"phone",label:"电话"}}),r("el-table-column",{attrs:{prop:"gender",label:"性别"}}),r("el-table-column",{attrs:{prop:"class_id",label:"学院"}})],1),r("br"),r("el-button",{on:{click:e.logout}},[e._v(" 退出登录 ")])],1)},S=[],D={data(){return{user:{uname:"",uid:null},userTableData:[]}},methods:{logout(){sessionStorage.removeItem("userInfo"),this.$router.push("/login")}},mounted(){sessionStorage.getItem("userInfo")&&(this.user=JSON.parse(sessionStorage.getItem("userInfo")),this.userTableData=[{uname:this.user.uname,password:this.user.password,phone:this.user.phone,gender:this.user.gender,class_id:this.user.class_id}])}},E=D,I=(0,i.Z)(E,C,S,!1,null,"418b5d61",null),M=I.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{staticClass:"app-container"},[r("el-header",{staticClass:"app-header"},[r("div",{staticClass:"sys-title"},[e._v("JavaWeb课程教学管理系统")]),r("div",{staticClass:"header-left"},[r("span",[e._v("学生端")])])]),r("el-container",[r("el-aside",{staticClass:"app-aside",attrs:{width:"200px"}},[r("el-menu",{attrs:{router:!0,"active-text-color":"#ffd04b","default-active":"this.$route.path"},on:{select:e.handleMenuSelect}},[r("el-menu-item",{staticClass:"submenu",attrs:{index:"/student/HomeDemo"}},[r("template",{slot:"title"},[r("span",[e._v("个人中心")])])],2),r("el-menu-item",{staticClass:"submenu",attrs:{index:"/student/MaterialList"}},[r("template",{slot:"title"},[r("span",[e._v("资料管理")])])],2),r("el-menu-item",{staticClass:"submenu",attrs:{index:"/student/ScoresList"}},[r("template",{slot:"title"},[r("span",[e._v("成绩查看")])])],2)],1)],1),r("el-main",{staticClass:"app-main"},[r("router-view")],1)],1)],1)},N=[],O={name:"student",methods:{handleMenuSelect(e){this.$router.push(e)}}},Z=O,q=(0,i.Z)(Z,j,N,!1,null,"556007f7",null),T=q.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{staticClass:"app-container"},[r("el-header",{staticClass:"app-header"},[r("div",{staticClass:"sys-title"},[e._v("JavaWeb课程教学管理系统")]),r("div",{staticClass:"header-left"},[r("span",[e._v("教师端")])])]),r("el-container",[r("el-aside",{staticClass:"app-aside",attrs:{width:"200px"}},[r("el-menu",{attrs:{router:!0,"active-text-color":"#ffd04b","default-active":"this.$route.path"},on:{select:e.handleMenuSelect}},[r("el-menu-item",{staticClass:"submenu",attrs:{index:"/teacher/HomeDemo"}},[r("template",{slot:"title"},[r("span",[e._v("个人中心")])])],2),r("el-submenu",{staticClass:"submenu",attrs:{index:"/teacher/MaterialDemo"}},[r("template",{slot:"title"},[r("span",[e._v("资料管理")])]),r("el-menu-item",{attrs:{index:"/teacher/MaterialDemo/MaterialAdd"}},[e._v("文件上传")]),r("el-menu-item",{attrs:{index:"/teacher/MaterialDemo/MaterialView"}},[e._v("文件查询与删除")])],2),r("el-submenu",{staticClass:"submenu",attrs:{index:"/teacher/ScoresDemo"}},[r("template",{slot:"title"},[r("span",[e._v("成绩管理")])]),r("el-menu-item",{attrs:{index:"/teacher/ScoresDemo/ScoresAdd"}},[e._v("添加成绩")]),r("el-menu-item",{attrs:{index:"/teacher/ScoresDemo/ScoresView"}},[e._v("查询成绩")]),r("el-menu-item",{attrs:{index:"/teacher/ScoresDemo/ScoresDelete"}},[e._v("删除成绩")])],2)],1)],1),r("el-main",{staticClass:"app-main"},[r("router-view")],1)],1)],1)},A=[],U={name:"teacher",methods:{handleMenuSelect(e){this.$router.push(e)}}},H=U,P=(0,i.Z)(H,L,A,!1,null,"4f429e8a",null),V=P.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"file-list"},[r("h1",[e._v("文件查询与下载")]),r("div",{staticClass:"search-bar"},[r("label",[e._v("资料类型：")]),r("el-radio-group",{model:{value:e.searchName,callback:function(t){e.searchName=t},expression:"searchName"}},[r("el-radio",{attrs:{label:"teachplan"}},[e._v("教学计划")]),r("el-radio",{attrs:{label:"teachprecis"}},[e._v("教学大纲")]),r("el-radio",{attrs:{label:"courseware"}},[e._v("课件")]),r("el-radio",{attrs:{label:"learnprofile"}},[e._v("学习资料")]),r("el-radio",{attrs:{label:"homework"}},[e._v("练习试题")])],1),e._v("    "),r("button",{on:{click:e.fetchFiles}},[e._v("搜索")])],1),r("table",[e._m(0),r("tbody",e._l(e.files,(function(t){return r("tr",{key:t.id},[r("td",[e._v(e._s(t.fileid))]),r("td",[e._v(e._s(t.filename))]),r("td",[e._v(e._s(t.filepath))]),r("td",[e._v(e._s(t.fileblock))]),r("td",[r("button",{on:{click:function(r){return e.downloadFile(t.fileid)}}},[e._v("下载文件")])])])})),0)])])},J=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",[e._v("文件ID")]),r("th",[e._v("文件名称")]),r("th",[e._v("存储路径")]),r("th",[e._v("文件类型")]),r("th",[e._v("操作")])])])}],R=(r(6229),r(7330),r(2062),{data(){return{files:[],searchName:""}},mounted(){this.fetchFiles()},methods:{fetchFiles(){fetch(`/downloadfileview?option=${this.searchName}`).then((e=>e.json())).then((e=>{this.files=e})).catch((e=>{console.error("Error:",e)}))},downloadFile(e){fetch(`/downloadfile?fileid=${e}`,{method:"GET",responseType:"blob"}).then((e=>{if(e.ok)return e.blob();throw new Error("文件下载失败")})).then((e=>{const t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download="",r.click(),URL.revokeObjectURL(t),this.$message({message:"文件下载成功",type:"success"})})).catch((e=>{console.error("Error:",e),this.$message({message:"文件下载失败",type:"error"})}))}}}),B=R,W=(0,i.Z)(B,G,J,!1,null,null,null),z=W.exports,K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("资料管理")]),r("el-main",{staticClass:"app-main"},[r("router-view")],1)],1)},Q=[],X={data(){return{}},methods:{}},Y=X,ee=(0,i.Z)(Y,K,Q,!1,null,"407f68cc",null),te=ee.exports,re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",{staticClass:"box-card"},[r("h2",[e._v("文件上传")]),r("el-form",{ref:"ruleForm",staticClass:"filesAdd-form",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-position":"left","label-width":"80px"}},[r("el-form-item",{attrs:{label:"资料类型",prop:"fileblock"}},[r("el-radio-group",{model:{value:e.ruleForm.fileblock,callback:function(t){e.$set(e.ruleForm,"fileblock",t)},expression:"ruleForm.fileblock"}},[r("el-radio",{attrs:{label:"teachplan"}},[e._v("教学计划")]),r("el-radio",{attrs:{label:"teachprecis"}},[e._v("教学大纲")]),r("el-radio",{attrs:{label:"courseware"}},[e._v("课件")]),r("el-radio",{attrs:{label:"learnprofile"}},[e._v("学习资料")]),r("el-radio",{attrs:{label:"homework"}},[e._v("练习试题")])],1)],1),r("el-form-item",[r("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:e.handleFileUpload}}),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.$refs.fileInput.click()}}},[e._v("选择文件")]),e.selectedFile?r("span",{staticClass:"selected-file"},[e._v(e._s(e.selectedFile.name))]):r("span",{staticClass:"file-placeholder"},[e._v("  请选择文件")])],1),r("div",{staticClass:"btnGroup"},[r("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("上传文件")]),r("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)],1)},se=[],ae=r(6154),le={data(){return{ruleForm:{fileblock:""},fileList:[],selectedFile:null,fileContent:""}},methods:{handleFileUpload(e){this.selectedFile=e.target.files[0];const t=new FileReader;t.onload=e=>{this.fileContent=e.target.result},t.readAsText(this.selectedFile)},submitForm(e){if(!this.selectedFile||!this.ruleForm.fileblock)return void alert("请选择文件和资料类型");const t=new FormData;t.append("file",this.selectedFile),t.append("option",this.ruleForm.fileblock),ae.Z.post("/uploadfile",t).then((e=>{const t=e.data;if(2===t)alert("文件和资料类型不能为空");else if(1===t){alert("文件上传成功");const e={name:this.selectedFile.name,content:this.fileContent};this.fileList.push(e)}else alert("文件上传失败，请稍后再试")})).catch((e=>{console.log(e)}))},resetForm(e){this.$refs[e].resetFields(),this.selectedFile=null}}},oe=le,ne=(0,i.Z)(oe,re,se,!1,null,"be6ebfa8",null),ie=ne.exports,ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"file-list"},[r("h1",[e._v("文件查询与删除")]),r("div",{staticClass:"search-bar"},[r("label",[e._v("资料类型：")]),r("el-radio-group",{model:{value:e.searchName,callback:function(t){e.searchName=t},expression:"searchName"}},[r("el-radio",{attrs:{label:"teachplan"}},[e._v("教学计划")]),r("el-radio",{attrs:{label:"teachprecis"}},[e._v("教学大纲")]),r("el-radio",{attrs:{label:"courseware"}},[e._v("课件")]),r("el-radio",{attrs:{label:"learnprofile"}},[e._v("学习资料")]),r("el-radio",{attrs:{label:"homework"}},[e._v("练习试题")])],1),e._v("    "),r("button",{on:{click:e.fetchFiles}},[e._v("搜索")])],1),r("table",[e._m(0),r("tbody",e._l(e.files,(function(t){return r("tr",{key:t.id},[r("td",[e._v(e._s(t.filename))]),r("td",[e._v(e._s(t.filepath))]),r("td",[e._v(e._s(t.fileblock))]),r("td",[r("button",{on:{click:function(r){return e.deleteFile(t.fileid)}}},[e._v("删除文件")])])])})),0)])])},ce=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",[e._v("文件名称")]),r("th",[e._v("存储路径")]),r("th",[e._v("文件类型")]),r("th",[e._v("操作")])])])}],me={data(){return{files:[],searchName:""}},mounted(){this.fetchFiles()},methods:{fetchFiles(){fetch(`/viewfile?option=${this.searchName}`).then((e=>e.json())).then((e=>{this.files=e})).catch((e=>{console.error("Error:",e)}))},deleteFile(e){fetch(`/deletefile?fileid=${e}`).then((e=>e.json())).then((e=>{1===e?(this.$message({message:"文件删除成功",type:"success"}),this.fetchFiles()):(this.$message({message:"文件删除失败",type:"success"}),console.error("文件删除失败"))})).catch((e=>{console.error("Error:",e)}))}}},de=me,he=(0,i.Z)(de,ue,ce,!1,null,null,null),pe=he.exports,_e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"score-list"},[r("h1",[e._v("成绩列表")]),r("table",[e._m(0),r("tbody",e._l(e.scores,(function(t){return r("tr",{key:t.id},[r("td",[e._v(e._s(t.uname))]),r("td",[e._v(e._s(t.class_id))]),r("td",[e._v(e._s(t.course_id))]),r("td",[e._v(e._s(t.final_score))]),r("td",[e._v(e._s(t.mid_score))]),r("td",[e._v(e._s(t.total_score))])])})),0)])])},fe=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",[e._v("学生ID")]),r("th",[e._v("班级ID")]),r("th",[e._v("课程ID")]),r("th",[e._v("期末成绩")]),r("th",[e._v("期中成绩")]),r("th",[e._v("总成绩")])])])}],ve={data(){return{scores:[],user:{}}},mounted(){this.user=JSON.parse(sessionStorage.getItem("userInfo")),this.fetchScores()},methods:{fetchScores(){fetch(`/api/user/scorelist?uname=${this.user.uname}`).then((e=>e.json())).then((e=>{this.scores=e})).catch((e=>{console.error("Error:",e)}))}}},be=ve,ge=(0,i.Z)(be,_e,fe,!1,null,null,null),Fe=ge.exports,we=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("成绩管理")]),r("el-main",{staticClass:"app-main"},[r("router-view")],1)],1)},xe=[],$e={data(){return{}},methods:{}},ye=$e,ke=(0,i.Z)(ye,we,xe,!1,null,"76fefb56",null),Ce=ke.exports,Se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",{staticClass:"box-card"},[r("h2",[e._v("添加成绩")]),r("el-form",{ref:"ruleForm",staticClass:"scoresAdd-form",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-position":"left","label-width":"80px"}},[r("el-form-item",{attrs:{label:"学生ID",prop:"uname"}},[r("el-input",{model:{value:e.ruleForm.uname,callback:function(t){e.$set(e.ruleForm,"uname",t)},expression:"ruleForm.uname"}})],1),r("el-form-item",{attrs:{label:"班级ID",prop:"class_id"}},[r("el-radio-group",{model:{value:e.ruleForm.class_id,callback:function(t){e.$set(e.ruleForm,"class_id",t)},expression:"ruleForm.class_id"}},[r("el-radio",{attrs:{label:1}},[e._v("1班")]),r("el-radio",{attrs:{label:2}},[e._v("2班")]),r("el-radio",{attrs:{label:3}},[e._v("3班")])],1)],1),r("el-form-item",{attrs:{label:"课程ID",prop:"course_id"}},[r("el-radio-group",{model:{value:e.ruleForm.course_id,callback:function(t){e.$set(e.ruleForm,"course_id",t)},expression:"ruleForm.course_id"}},[r("el-radio",{attrs:{label:1}},[e._v("javaweb")]),r("el-radio",{attrs:{label:2}},[e._v("java")])],1)],1),r("el-form-item",{attrs:{label:"期末成绩",prop:"final_score"}},[r("el-input",{model:{value:e.ruleForm.final_score,callback:function(t){e.$set(e.ruleForm,"final_score",t)},expression:"ruleForm.final_score"}})],1),r("el-form-item",{attrs:{label:"期中成绩",prop:"mid_score"}},[r("el-input",{model:{value:e.ruleForm.mid_score,callback:function(t){e.$set(e.ruleForm,"mid_score",t)},expression:"ruleForm.mid_score"}})],1),r("el-form-item",{attrs:{label:"总成绩",prop:"total_score"}},[r("el-input",{model:{value:e.ruleForm.total_score,callback:function(t){e.$set(e.ruleForm,"total_score",t)},expression:"ruleForm.total_score"}})],1)],1),r("div",{staticClass:"btnGroup"},[r("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("添加成绩")]),r("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},De=[],Ee={data(){return{ruleForm:{uname:"",class_id:0,course_id:0,final_score:0,mid_score:0,total_score:0},rules:{uname:[{required:!0,message:"学生姓名不能为空！",trigger:"blur"}],class_id:[{required:!0,message:"班级ID不能为空！",trigger:"blur"}],course_id:[{required:!0,message:"课程ID不能为空！",trigger:"blur"}],final_score:[{required:!0,message:"期末成绩不能为空！",trigger:"blur"}],mid_score:[{required:!0,message:"期中成绩不能为空！",trigger:"blur"}],total_score:[{required:!0,message:"总成绩不能为空！",trigger:"blur"}]},loading:!1}},methods:{submitForm(e){this.$refs[e].validate((e=>{if(this.loading=!0,!e)return console.log("error submit!!"),this.loading=!1,!1;{let e=this;e.ruleForm.class_id=parseInt(e.ruleForm.class_id),e.ruleForm.course_id=parseInt(e.ruleForm.course_id),this.axios({method:"post",url:"/api/user/scoreinsert",headers:{"Content-Type":"application/json"},data:{uname:e.ruleForm.uname,class_id:e.ruleForm.class_id,course_id:e.ruleForm.course_id,final_score:e.ruleForm.final_score,mid_score:e.ruleForm.mid_score,total_score:e.ruleForm.total_score}}).then((t=>{1===t?this.$message({message:"添加成绩成功",type:"success"}):this.$message({message:"添加成绩失败",type:"warning"}),e.loading=!1,console.log(t)}))}}))},resetForm(e){this.$refs[e].resetFields()}}},Ie=Ee,Me=(0,i.Z)(Ie,Se,De,!1,null,"1c7ff1b3",null),je=Me.exports,Ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"score-list"},[r("h1",[e._v("成绩列表")]),r("div",{staticClass:"search-bar"},[r("label",[e._v("学生姓名：")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchName,expression:"searchName"}],attrs:{type:"text",placeholder:"请输入学生姓名"},domProps:{value:e.searchName},on:{input:function(t){t.target.composing||(e.searchName=t.target.value)}}}),r("button",{on:{click:e.fetchScores}},[e._v("搜索")])]),r("table",[e._m(0),r("tbody",e._l(e.scores,(function(t){return r("tr",{key:t.id},[r("td",[e._v(e._s(t.uname))]),r("td",[e._v(e._s(t.class_id))]),r("td",[e._v(e._s(t.course_id))]),r("td",[e._v(e._s(t.final_score))]),r("td",[e._v(e._s(t.mid_score))]),r("td",[e._v(e._s(t.total_score))])])})),0)])])},Oe=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",[e._v("学生ID")]),r("th",[e._v("班级ID")]),r("th",[e._v("课程ID")]),r("th",[e._v("期末成绩")]),r("th",[e._v("期中成绩")]),r("th",[e._v("总成绩")])])])}],Ze={data(){return{scores:[],searchName:""}},mounted(){this.fetchScores()},methods:{fetchScores(){fetch(`/api/user/scorelist?uname=${this.searchName}`).then((e=>e.json())).then((e=>{this.scores=e})).catch((e=>{console.error("Error:",e)}))}}},qe=Ze,Te=(0,i.Z)(qe,Ne,Oe,!1,null,null,null),Le=Te.exports,Ae=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"score-list"},[r("h1",[e._v("删除成绩")]),r("table",[e._m(0),r("tbody",e._l(e.scores,(function(t){return r("tr",{key:t.id},[r("td",[e._v(e._s(t.uname))]),r("td",[e._v(e._s(t.class_id))]),r("td",[e._v(e._s(t.course_id))]),r("td",[e._v(e._s(t.final_score))]),r("td",[e._v(e._s(t.mid_score))]),r("td",[e._v(e._s(t.total_score))]),r("td",[r("button",{on:{click:function(r){return e.deleteScore(t.uname,t.course_id)}}},[e._v("删除成绩")])])])})),0)])])},Ue=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",[e._v("学生ID")]),r("th",[e._v("班级ID")]),r("th",[e._v("课程ID")]),r("th",[e._v("期末成绩")]),r("th",[e._v("期中成绩")]),r("th",[e._v("总成绩")]),r("th",[e._v("操作")])])])}],He={data(){return{scores:[]}},mounted(){this.fetchScores()},methods:{fetchScores(){fetch("/api/user/scorelistall").then((e=>e.json())).then((e=>{this.scores=e})).catch((e=>{console.error("Error:",e)}))},deleteScore(e,t){fetch(`/api/user/scoredelete?uname=${e}&course_id=${t}`).then((e=>e.json())).then((e=>{1===e?(this.$message({message:"删除成绩成功",type:"success"}),this.fetchScores()):(this.$message({message:"删除成绩失败",type:"success"}),console.error("删除成绩失败"))})).catch((e=>{console.error("Error:",e)}))}}},Pe=He,Ve=(0,i.Z)(Pe,Ae,Ue,!1,null,null,null),Ge=Ve.exports;s["default"].use(h.Z);const Je=new h.Z({mode:"history",routes:[{path:"/",redirect:"/login"},{path:"/login",component:g},{path:"/register",component:k},{path:"/student",component:T,name:"student",children:[{path:"HomeDemo",component:M,name:"HomeDemo"},{path:"MaterialList",component:z,name:"MaterialList"},{path:"ScoresList",component:Fe,name:"ScoresList"}]},{path:"/teacher",component:V,name:"teacher",children:[{path:"HomeDemo",component:M,name:"HomeDemo"},{path:"MaterialDemo",component:te,name:"MaterialDemo",children:[{path:"MaterialAdd",component:ie,name:"MaterialAdd"},{path:"MaterialView",component:pe,name:"MaterialView"}]},{path:"ScoresDemo",component:Ce,name:"ScoresDemo",children:[{path:"ScoresAdd",component:je,name:"ScoresAdd"},{path:"ScoresView",component:Le,name:"ScoresView"},{path:"ScoresDelete",component:Ge,name:"ScoresDelete"}]}]}]});Je.beforeEach(((e,t,r)=>{let s=!!sessionStorage.getItem("userInfo");"/login"===e.path||"/register"===e.path||s?r():(r({path:"/login"}),(0,m.Message)({message:"请先登录！",type:"warning"}))}));var Re=Je,Be=r(2346);s["default"].config.productionTip=!1,s["default"].use(d()),s["default"].use(h.Z),s["default"].use(Be.Z,ae.Z),new s["default"]({render:e=>e(c),router:Re}).$mount("#app")}},t={};function r(s){var a=t[s];if(void 0!==a)return a.exports;var l=t[s]={id:s,loaded:!1,exports:{}};return e[s].call(l.exports,l,l.exports,r),l.loaded=!0,l.exports}r.m=e,function(){r.amdO={}}(),function(){var e=[];r.O=function(t,s,a,l){if(!s){var o=1/0;for(c=0;c<e.length;c++){s=e[c][0],a=e[c][1],l=e[c][2];for(var n=!0,i=0;i<s.length;i++)(!1&l||o>=l)&&Object.keys(r.O).every((function(e){return r.O[e](s[i])}))?s.splice(i--,1):(n=!1,l<o&&(o=l));if(n){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[s,a,l]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,l,o=s[0],n=s[1],i=s[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(a in n)r.o(n,a)&&(r.m[a]=n[a]);if(i)var c=i(r)}for(t&&t(s);u<o.length;u++)l=o[u],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(c)},s=self["webpackChunkvue_login_demo"]=self["webpackChunkvue_login_demo"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(6832)}));s=r.O(s)})();
//# sourceMappingURL=app.f91c7fd7.js.map