<template>
  <div class="home">
   <section class="banner" id="sec" :class="{active : isActive }">
     <header>
       <a href="#" class="logo">Logo</a>
       <div id="toggle" @click="toggle()" >

       </div>
     </header>

     <div class="content">
       <h2>Hello World, <br>I'm <span>Jungkook</span></h2>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae dolor non veritatis facilis nobis. Modi sunt error, architecto ex, molestias accusantium nam pariatur nemo dolore sed eius? Impedit, voluptas iste!</p>
     </div>
     <ul class="sci">
      <li><a href="#"><img src="facebook.png"></a></li>
      <li><a href="#"><img src="twitter.png"></a></li>
      <li><a href="#"><img src="linkedin.png"></a></li>
     </ul>
   </section>
    <div id="navigation">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      isActive: false,
    }
  },
  components: {

  },
  methods: {
    toggle() {
      // let sec = document.getElementById('sec');
      // sec.classList.toggle('active')
      this.isActive = !this.isActive;
    }
  }
}
</script>
