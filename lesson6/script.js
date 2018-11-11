var vm = new Vue({
  el:"#app",
  data:{
    b:0,
    c:0,
    diskr:0,
    nosolve:false
  },
  methods:{
    solve: function(event) {
      this.diskr=Number(this.b*this.b)-4*Number(this.c);
      console.log(this.diskr);
      if(this.diskr<0)
      {
        this.nosolve=true;
      }
    }
    }
});
