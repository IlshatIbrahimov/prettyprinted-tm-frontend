(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55734175"],{"159b":function(t,e,a){var r=a("da84"),n=a("fdbc"),s=a("17c2"),i=a("9112");for(var c in n){var o=r[c],u=o&&o.prototype;if(u&&u.forEach!==s)try{i(u,"forEach",s)}catch(l){u.forEach=s}}},"17c2":function(t,e,a){"use strict";var r=a("b727").forEach,n=a("a640"),s=a("ae40"),i=n("forEach"),c=s("forEach");t.exports=i&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},1928:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"createTask"},[a("header",{staticClass:"header"},[a("h1",{staticClass:"header__title"},[t._v("New task in - "+t._s(t.project.name))])]),a("div",{staticClass:"createTask__content"},[a("div",{staticClass:"createTask__left"},[a("b-form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.submitHandler(e)}}},[a("b-form-group",{staticClass:"form__item",attrs:{label:"Name","label-for":"Name task","label-class":"form__label"}},[a("b-form-input",{staticClass:"form__input-field",attrs:{id:"nameTask",type:"text",state:t.validateState("name")},model:{value:t.$v.task.name.$model,callback:function(e){t.$set(t.$v.task.name,"$model",e)},expression:"$v.task.name.$model"}}),this.$v.task.name.required?t._e():a("b-form-invalid-feedback",{attrs:{id:"input"}},[t._v("This field is required. ")]),this.$v.task.name.maxLength?t._e():a("b-form-invalid-feedback",{attrs:{id:"input"}},[t._v("The name must be at most 140 characters long. ")])],1),a("b-form-group",{staticClass:"form__item",attrs:{label:"Content","label-for":"content","label-class":"form__label"}},[a("b-form-textarea",{staticClass:"form__textarea-field",attrs:{id:"content",type:"text",state:t.validateState("content")},model:{value:t.$v.task.content.$model,callback:function(e){t.$set(t.$v.task.content,"$model",e)},expression:"$v.task.content.$model"}}),this.$v.task.content.maxLength?t._e():a("b-form-invalid-feedback",{attrs:{id:"textarea"}},[t._v("The content must be at most 1000 characters long. ")])],1),t.isAssignee?t._e():a("div",{staticClass:"auth__invalid"},[a("p",[t._v("Please, pick assignee")])]),a("div",{staticClass:"create-task__footer"},[a("button",{staticClass:"button",attrs:{type:"submit"}},[t._v("Create ")])])],1)],1),a("div",{staticClass:"createTask__right"},[a("div",{staticClass:"attributes attributes--task"},[t._l(t.$root.attributes,(function(e,r,n){return a("div",{key:n,staticClass:"attributes__item"},[a("label",{staticClass:"attributes__label",attrs:{for:r}},[t._v(t._s(r)+":")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.task.keys[r],expression:"task.keys[name]"}],staticClass:"select",attrs:{id:r},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.task.keys,r,e.target.multiple?a:a[0])}}},t._l(e,(function(e,r){return a("option",{key:r,staticClass:"select__option",domProps:{value:r}},[t._v(t._s(e.name)+" ")])})),0)])})),a("div",{staticClass:"attributes__item"},[a("label",{staticClass:"attributes__label",attrs:{for:"assignee"}},[t._v("Assignee:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.task.assigneeId,expression:"task.assigneeId"}],staticClass:"select",attrs:{id:"assignee"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.task,"assigneeId",e.target.multiple?a:a[0])}}},t._l(t.users,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name)+" "+t._s(e.surname)+" ")])})),0)])],2)])])])},n=[],s=(a("99af"),a("b0c0"),a("d3b7"),a("ddb0"),a("5530")),i=(a("96cf"),a("1da1")),c=a("35ca"),o=a("e71c"),u=a("d8e7"),l=a("1dce"),f=a("b5ae"),d={name:"CreateTask",mixins:[l["validationMixin"]],data:function(){return{project:{id:null,name:"",taskList:[]},task:{name:"",content:"",assigneeId:null,keys:{type:0,priority:0,status:0}},users:[],isAssignee:!0}},validations:{task:{name:{required:f["required"],maxLength:Object(f["maxLength"])(140)},content:{maxLength:Object(f["maxLength"])(1e3)}}},methods:{validateState:function(t){var e=this.$v.task[t],a=e.$dirty,r=e.$error;return a?!r:null},submitHandler:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$v.task.$touch(),!t.$v.task.$anyError){e.next=3;break}return e.abrupt("return");case 3:if(null!==t.task.assigneeId){e.next=6;break}return t.isAssignee=!1,e.abrupt("return");case 6:return t.isAssignee=!0,e.next=9,u["a"].addTask({name:t.task.name,content:t.task.content,assigneeId:t.task.assigneeId,projectId:t.project.id,priorityId:t.task.keys.priority,typeId:t.task.keys.type,statusId:t.task.keys.status}).then((function(e){console.log(e),t.$router.push("/project/".concat(e.data.project.id,"/task-").concat(e.data.id))})).catch((function(t){return console.log(t.response)}));case 9:case"end":return e.stop()}}),e)})))()},fetchUsers:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].getAll().then((function(t){return t})).catch((function(t){return console.log(t)}));case 2:a=e.sent,t.users=a.data;case 4:case"end":return e.stop()}}),e)})))()},fetchProjectById:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].getById(t.$route.params.id).then((function(t){return t})).catch((function(t){return console.log(t)}));case 2:a=e.sent,t.project=Object(s["a"])({},a.data);case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.fetchUsers(),this.fetchProjectById()}},b=d,v=a("2877"),m=Object(v["a"])(b,r,n,!1,null,null,null);e["default"]=m.exports},4160:function(t,e,a){"use strict";var r=a("23e7"),n=a("17c2");r({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"4de4":function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").filter,s=a("1dde"),i=a("ae40"),c=s("filter"),o=i("filter");r({target:"Array",proto:!0,forced:!c||!o},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b");function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"99af":function(t,e,a){"use strict";var r=a("23e7"),n=a("d039"),s=a("e8b5"),i=a("861d"),c=a("7b0b"),o=a("50c4"),u=a("8418"),l=a("65f0"),f=a("1dde"),d=a("b622"),b=a("2d00"),v=d("isConcatSpreadable"),m=9007199254740991,p="Maximum allowed index exceeded",h=b>=51||!n((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),k=f("concat"),g=function(t){if(!i(t))return!1;var e=t[v];return void 0!==e?!!e:s(t)},_=!h||!k;r({target:"Array",proto:!0,forced:_},{concat:function(t){var e,a,r,n,s,i=c(this),f=l(i,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(s=-1===e?i:arguments[e],g(s)){if(n=o(s.length),d+n>m)throw TypeError(p);for(a=0;a<n;a++,d++)a in s&&u(f,d,s[a])}else{if(d>=m)throw TypeError(p);u(f,d++,s)}return f.length=d,f}})},b64b:function(t,e,a){var r=a("23e7"),n=a("7b0b"),s=a("df75"),i=a("d039"),c=i((function(){s(1)}));r({target:"Object",stat:!0,forced:c},{keys:function(t){return s(n(t))}})},d8e7:function(t,e,a){"use strict";var r=a("d4ec"),n=a("bee2"),s=a("c427"),i=function(){function t(){Object(r["a"])(this,t)}return Object(n["a"])(t,[{key:"getById",value:function(t){return Object(s["a"])().get("/task/".concat(t))}},{key:"getByAuthUser",value:function(){return Object(s["a"])().get("/task/user")}},{key:"addTask",value:function(t){return Object(s["a"])().post("/task",t)}},{key:"updateTask",value:function(t){return Object(s["a"])().put("/task",t)}},{key:"deleteTask",value:function(t){return Object(s["a"])().delete("/task/".concat(t))}}]),t}();e["a"]=new i},dbb4:function(t,e,a){var r=a("23e7"),n=a("83ab"),s=a("56ef"),i=a("fc6a"),c=a("06cf"),o=a("8418");r({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,a,r=i(t),n=c.f,u=s(r),l={},f=0;while(u.length>f)a=n(r,e=u[f++]),void 0!==a&&o(l,e,a);return l}})},e439:function(t,e,a){var r=a("23e7"),n=a("d039"),s=a("fc6a"),i=a("06cf").f,c=a("83ab"),o=n((function(){i(1)})),u=!c||o;r({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return i(s(t),e)}})}}]);
//# sourceMappingURL=chunk-55734175.0450f8bc.js.map