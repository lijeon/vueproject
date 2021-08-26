<template>

    <header>
       <a href="#" class="logo"><i class="fa fa-github"></i></a>
       <!-- <div id="toggle" @click="toggle()" >

       </div> -->
       <div id="nav">
         
         <ul>
           <li><router-link to="/">Home</router-link></li>
           <li><router-link to="/about">About</router-link></li>
           <li><router-link to="/skills">Skills</router-link></li>
           <li><router-link to="/work">Work</router-link></li>
           <li><router-link to="/worked-by">worked By</router-link></li>
         </ul>

       
       
      </div>
    </header>
  
  <!-- <router-view/> -->

   <router-view v-slot = "{ Component }">
    <transition name="route" mode="out-in"> 
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>


<style>
html,body{
  font-family: 'Montserrat', sans-serif;

}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/*  */
/* #nav ul li {
  padding: 20px;
  
  text-align: end;
} */

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {



   color: #fff;
   text-shadow:
       /* 0 0 0px #fff,
       0 0 10px #fff,
       0 0 0px #fff, */
       0 0 10px rgb(162, 0, 255),
       0 0 20px rgb(153, 0, 255),
       0 0 40px #0fa,
       0 0 80px #0fa,
       0 0 120px #0fa;
} 



.route-enter-form {
  opacity: 0;
  transform: translateX(50px);
}

.route-enter-active {
  transition: all 0.7s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-50px)
}

.route-leave-active {
  transition: all 0.5s ease-in;
}
</style>
