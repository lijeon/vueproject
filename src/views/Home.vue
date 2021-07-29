<template>
  <div class="home">
   <section class="banner" id="sec" :class="{active : isActive }">
     <!-- <header>
       <a href="#" class="logo">Logo</a>
       <div id="toggle" @click="toggle()" >

       </div>
     </header> -->

     <div class="content" style="width:50%">
       <h2>Hello World, <br>I'm <span>Jungkook</span></h2>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae dolor non veritatis facilis nobis. Modi sunt error, architecto ex, molestias accusantium nam pariatur nemo dolore sed eius? Impedit, voluptas iste!</p>
     </div>
     <ul class="sci">
      <li><a href="#"><img src="../assets/facebook.png"></a></li>
      <li><a href="#"><img src="../assets/twitter.png"></a></li>
      <li><a href="#"><img src="../assets/linkedin.png"></a></li>
     </ul>
   </section>
   
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      isActive: false,
      activeNav: false,
    }
  },
  components: {

  },
  methods: {
    toggle() {
      // let sec = document.getElementById('sec');
      // sec.classList.toggle('active')
      this.isActive = !this.isActive;

    },

  }
}
</script>

<style scoped>
/* .home {
  background: linear-gradient(90deg,rgba(11, 0, 19, 0.918), rgba(7, 6, 6, 0.959) );
} */
.content {
    max-width: 600px;
}

.content h2{
    color: #fff;
    font-size: 2.5em;

}

.content h2 span {
    color: #40c3ff;
    font-size: 1.2em;

    
   color: #fff;
   text-shadow:
       0 0 0px #fff,
       0 0 10px #fff,
       0 0 0px #fff,
       0 0 42px rgb(162, 0, 255),
       0 0 0px rgb(0, 183, 255),
       0 0 0px rgb(0, 183, 255),
       0 0 0px rgb(0, 183, 255),
       0 0 0px rgb(0, 183, 255);
}

.content p {
    font-size: 1.2em;
    color: #fff;
    font-weight: 300;
}

.content a{
    position: relative;
    display: inline-block;
    margin-top: 20px;
    background: #fff;
    color: #000;
    padding: 10px 30px;
    text-decoration: none;
    font-size: 1.2em;
    font-weight: 500;
}

.sci{
    position: absolute;
    display: flex;
    flex-direction: column;
    right: 100px;

}

.sci li{
    list-style: none;
}

.sci li a{
    position: relative;
    display: grid;
    place-items: center;
    width: 50px;
    height: 50px;
    text-decoration: none;
    border: 1px solid #fff;
    margin: 10px 0 0;
}

.sci li a:hover{
    background: #fff;
}

.sci li a img {
    max-width: 20px;
    filter: invert(1);
    mix-blend-mode: difference;
}

@media (max-width: 767px){
    header {
        padding: 20px 50px;
    }

    .banner {
        padding: 100px 50px 150px;
    }

    .banner h2 {
        font-size: 1.8em;
    }

    .banner .content p, .banner .content a {
        font-size: 1em;

    }
    
    .banner.active {
        transform: translateX(-250px);
    }

    #navigation {
        width: 250px;
    }

    #navigation ul li a {
        font-size: 1.5em;
        margin: 5px 0;
    }
    .sci {
        position: absolute;
        bottom: 50px;
        right: initial;
        flex-direction: row;
    }

    .sci li {   
        margin: initial;
        margin-right: 10px;
    }
}



</style>
