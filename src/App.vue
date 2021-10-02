<template>
  <div id="app">

    <Header />
   
    <Home />

  </div>
</template>

<script>
import './Styles/global.css';

import Header from './components/Header';
import Home from './pages/Home.vue';






export default {
  name: 'App',
  components: {
    Header,
    Home
  }
}
</script>

