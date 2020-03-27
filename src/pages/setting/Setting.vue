<template>
  <div id="setting">
    <h1>设置页面</h1>
  </div>
</template>

<script>
export default {
  name: 'setting',
  data () {
    return {
      msg: 'I am setting',
      name: "liangguojian",
      name1: "liangguojian1",
    }
  },
  methods:{

    login(){

      console.log("login");
       console.log("this" + this);
      this.$router.push({path: 'aaa.html',query: { plan: 'private' }}).catch(err => {err});
    },

    jump(){

      console.log("login");
       console.log("this" + this);
      this.$router.push({path: '/aaa.html',query: { plan: 'private' }}).catch(err => {err});
    },


  }
}
</script>