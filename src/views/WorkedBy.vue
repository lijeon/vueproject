<template>
  <div class="workedBy">
    <div class="box">
      <div class="imgBx">
        <img src="../assets/axh.jpg">
      </div>
      <div class="content">
        <h2>Arlinda Xhemaili <br><span>Frontend Developer</span></h2>
      </div>
    
    </div>
     
    <div class="box">
      <div class="imgBx">
        <img src="../assets/pz.jpg">
      </div>
      <div class="content">
      <!-- <a :href="downloadUrl" download="ArlindaXhemaili-CV.pdf" style="color:#FF0000;text-decoration:underline">Qisishmne</a> -->
        <h2>Pleurat Zejnullahu <br><span>Frontend Developer   <button @click="onClick()">DownLoad</button></span></h2>
      </div>
      
    </div>


    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      // downloadUrl: `${process.env.BASE_URL}public/ArlindaXhemaili-CV.pdf`,// Template download file address
      // url:  `${process.env.BASE_URL}/ArlindaXhemaili-CV.pdf`,
      // item: {
      //   label: 'ArlindaXhemaili-CV.pdf',
      //   url : `${process.env.BASE_URL}public/ArlindaXhemaili-CV.pdf`
      // }
    }
  },
  methods: {
    onClick() {
        axios({
              url: 'http://localhost:8000/public/ArlindaXhemaili-CV.pdf',
              method: 'GET',
              responseType: 'blob',
          }).then((response) => {
                var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                var fileLink = document.createElement('a');

                fileLink.href = fileURL;
                fileLink.setAttribute('download', 'file.pdf');
                document.body.appendChild(fileLink);

                fileLink.click();
          });
    }
      
  }
}
</script>

<style scoped>
.workedBy {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  min-height: 100vh;
  background: #010615;
  opacity: 0.99;
  gap: 50px;
}

.box{
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
  transition: 0.5s;
  background: #060c21;

}
.box:hover {
  height: 400px;
}

.box .imgBx{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;

}
.box .imgBx img {
  max-width: 100%;
  opacity: 0.1;
  transition: 0.5s;
  /* width: 300px;
  height: 300px; */

}

.box:hover .imgBx img {
  opacity: 1;

}

.box::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: #fff;
  z-index: -1;

}

.box::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: #fff;
  z-index: -1;
  filter: blur(40px)
  
}

.box::before, .box::after {
  background: linear-gradient(235deg,#7700ff,#010615,#00bcd4);
}

.box:nth-child(2)::before, .box:nth-child(2)::after {
  background: linear-gradient(235deg,#ff005e,#010615,#fbff00);
}

.box .content {
  position: absolute;
  bottom: 0 !important;
  left: 10px;
  right: 10px;
  height: 90px;
  background: #060c21;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.5s;
  text-align: center;
}

.box:hover .content {
  opacity: 1;
}

.box .content h2 {
  font-size: 20px !important;
  color: #fff;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 1px;

}

.box .content h2 span {
  font-size: 14px !important;
  color: #fff;
  font-weight: 200;
  letter-spacing: 2px;

}
</style>