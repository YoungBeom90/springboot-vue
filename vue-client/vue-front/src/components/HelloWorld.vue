<template>
    <div>
      <Header />
      <div id="container">
        <Sidebar />
        <FileContainer />
      </div>
    </div>
</template>

<script>
import Sidebar from './layout/Sidebar.vue';
import FileContainer from './contents/FileContainer.vue';
import '../css/fileList.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../css/style.css';

import '../js/jquery-3.3.1.min.js';

export default {
  name: 'HelloWorld',
  components: {
    Sidebar,
    FileContainer
  },
  mounted() {
    console.log("beforeMount");
    $("#container").css("height", window.innerHeight);
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
