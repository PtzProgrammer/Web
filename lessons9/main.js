let Vue = require("vue");
let VueRouter = require("vue-router");
Vue.use(VueRouter);
let Enlarger = require("./enlarger.vue");
let Reducer = require("./reducer.vue");
const routers=[
  {path:'/add',component:Enlarger},
  {path:'/deduct',component:Reducer}
];
let router = new VueRouter({routes:routers});
let vm = new Vue ({
    el:"#app",
    router:router
});
