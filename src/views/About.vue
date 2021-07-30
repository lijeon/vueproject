<template>
  <div class="about">
    <h3>Please hover on videos to learn more :)</h3>
    <div class="container">
      <div class="box">
        <div class="videoBox">
          <video src='../assets/student.mp4' muted autoplay loop></video>
        </div>
        <div class="contentBx">
          <div class="content">
            <h2>Student</h2>
            <p>I am a student in Computer Science and Engineering at UBT</p>
          </div>
        </div>
      </div>

      <div class="box">
        <div class="videoBox">
          <video src='../assets/graduate.mp4' muted autoplay loop></video>
        </div>
        <div class="contentBx">
          <div class="content">
            <h2>Graduand</h2>
            <p>Soon, I will have Bachelor's degree</p>
          </div>
        </div>
      </div>

      <div class="box">
        <div class="videoBox">
          <video src='../assets/work.mp4' muted autoplay loop></video>
        </div>
        <div class="contentBx">
          <div class="content">
            <h2>Work</h2>
            <p>I work as a full time frontend developer in Hotelkey, Inc.</p>
          </div>
        </div>
      </div>

      <div class="box">
        <div class="videoBox">
         <video src='../assets/hobby.mp4' muted autoplay loop></video>
        </div>
        <div class="contentBx">
          <div class="content">
            <h2>Hobbys and Interests</h2>
            <p>Painting, Photogrpahy, Sports, Writting, Reading, Walking</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

.about {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  min-height: 100vh;
  background: #010615;
  opacity: 0.99; 
  gap: 50px;
}

.about h3 {
  color: #af0c9954;
 font-family: 'Dancing Script', cursive;
/* font-family: 'Indie Flower', cursive; */
  font-size: 24px;
     text-shadow:
       0 0 0px #fff,
       0 0 10px #fff,
       0 0 0px #fff,
       0 0 42px rgb(162, 0, 255),
       0 0 0px rgb(0, 183, 255),
       0 0 0px rgb(0, 183, 255),
       0 0 0px rgb(0, 183, 255),
       0 0 0px rgb(0, 183, 255);
       font-weight: 200;
}
.container {
  position: relative;
  display: flex;
  align-items: center;
  width:1500px;
}

.container .box {
  position: relative;
  width: 400px;
  height: 320px;
  background: #000;


}

.container .box .videoBox {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.container .box .videoBox video{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.container .box .contentBx {
  position: absolute;
  top: 40px;
  bottom: 40px;
  right: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s;
  transform-origin: right;
  transform: scaleX(0);
}

.container .box:hover .contentBx {
  transition: transform 0.5s;
  transform-origin: left;
  transform: scaleX(1);
}

.container .box .contentBx .content{
  position: relative;
  padding: 20px 60px;
  opacity: 0;
}

.container .box:hover .contentBx .content{
  opacity: 1;
  transition: 0.5s;
  transition-delay: 0.5s;
}

.container .box .contentBx .content h2{
  color: #fff;
  font-weight: 500;
  margin-bottom: 10px;
}

.container .box .contentBx .content p{
  color: #fff;
  font-weight: 300;
 
}
</style>