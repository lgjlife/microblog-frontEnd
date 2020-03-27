<template>
  <div id="index">
    <layout/>
    
  </div>
</template>

<script>

import layout from "@/pages/layout"

export default {
  name: 'index',
  data () {
    return {
      msg: 'I am index',
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


  },
  components: {
        layout
  }
}
</script>