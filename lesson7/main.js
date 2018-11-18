Vue.component("blog-post",{
  props: ['title','id', 'content'],
  template:'<div><div id={{id}}></div><h3>{{title}}</h3><p>{{content}}</p></div>'
});

let vm = new Vue ({
  el:"#app",
  data: {
    posts:[
      {id:1, title:'New journey',content:'Hello my first journey'},
      {id:2, title:'Hello my friends',content:'Hello my first journey'},
      {id:3, title:'Bye-bye',content:'Hello my first journey'},
    ]
  }
});
