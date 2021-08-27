<template>
    <div class="container">
      <div class="cards">
        <div class="card">
          <div class="imgBox">
            <img src="../assets/food.png">
            <img src="../assets/food.png">
          </div>
          <div class="details">
            <div class="content">
              <h3>Online Shopping <br> <span>Functionalities</span></h3>
              <ul>
                <li>Main activities and responsibilities</li>
                <li> User register and login</li>
                <li> Admin CRUD</li>
                <li> User can add products to bag</li>
                <li> User can see the details of the product</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="imgBox">
            <img src="../assets/rent.jpg">
            <img src="../assets/rent.jpg">
          </div>
          <div class="details">
            <div class="content">
              <h3>Rent a Car <br> <span>Functionalities</span></h3>
              <ul>
                <li>Main activities and responsibilities</li>
                <li> User register and login</li>
                <li> Admin CRUD</li>
                <li> User can add products to bag</li>
                <li> User can see the details of the product</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="imgBox">
            <img src="../assets/gamming.png">
            <img src="../assets/gamming.png">
          </div>
          <div class="details">
            <div class="content">
              <h3>Events Management System <br> <span>Functionalities</span></h3>
              <ul>
                <li>Main activities and responsibilities</li>
                <li> User register and login</li>
                <li> Admin CRUD</li>
                <li> User can add products to bag</li>
                <li> User can see the details of the product</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="imgBox">
            <img src="../assets/traveler1.jpg">
            <img src="../assets/traveler1.jpg">
          </div>
          <div class="details">
            <div class="content">
              <h3>Online Booking Tickets <br> <span>Functionalities</span></h3>
              <ul>
                <li>Main activities and responsibilities</li>
                <li> User register and login</li>
                <li> Admin CRUD</li>
                <li> User can add products to bag</li>
                <li> User can see the details of the product</li>
              </ul>
            </div>
          </div>
        </div>



        <div class="card">
          <div class="imgBox">
            <img src="../assets/msh.jpg">
            <img src="../assets/msh.jpg">
          </div>
          <div class="details">
            <div class="content">
              <h3>Sign up form with Authentication <br> <span>Functionalities</span></h3>
              <ul>
                <li>Main activities and responsibilities</li>
                <li> User register and login</li>
                <li> Admin CRUD</li>
                <li> User can add products to bag</li>
                <li> User can see the details of the product</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="imgBox">
            <img src="../assets/cc.png">
            <img src="../assets/cc.png">
          </div>
          <div class="details">
            <div class="content">
              <h3>Cardio Exercise <br> <span>Functionalities</span></h3>
              <ul>
                <li>Main activities and responsibilities</li>
                <li> User register and login</li>
                <li> Admin CRUD</li>
                <li> User can add products to bag</li>
                <li> User can see the details of the product</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="imgBox">
            <img src="../assets/foto1.jpg">
            <img src="../assets/foto1.jpg">
          </div>
          <div class="details">
            <div class="content">
              <h3>Real Estate <br> <span>Functionalities</span></h3>
              <ul>
                <li>Main activities and responsibilities</li>
                <li> User register and login</li>
                <li> Admin CRUD</li>
                <li> User can add products to bag</li>
                <li> User can see the details of the product</li>
              </ul>
            </div>
          </div>
        </div>


      </div>



    </div>
    
</template>

<script>
 /* eslint-disable */
export default {
  name: 'Work',
  
  beforeMount(){
      const sound = ( new Audio( require('../../public/sounds/test2.wav')).play());
  }
}
</script>

<style scoped>
*{

    box-sizing: border-box;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url(../assets/done.jpg);
  flex-wrap: wrap;
}
.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  /*min-height: 100vh;*/
  /*background: #010615;*/
  flex-wrap: wrap;
  /*margin-top: 50px;*/
  margin-left: 100px;
  row-gap: 40px;
}

.card {
  position: relative;
  width: 250px;
  height: 280px;
  background: #fff;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  box-shadow: 10px 20px 40px rgba(14, 14, 14, 0.25);
  box-shadow: 25px 25px 100px rgba(10, 10, 10, 0.2);
  transition: 1s;
  margin-right:150px;

}
.card:hover {
  transform: translateX(50%);
}
.card .details {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;

}

.card .details .content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.card .details .content h3 {
  text-align: center;
  font-weight: 700;
  line-height: 1em;
}

.card .details .content h3 span {
  color: #e21212;
  font-size: 0.8em;
  padding: 10px;

}
.card .details .content ul {
  padding-top: 10px;
  padding-left: 20px;
  font-size: 14px;
}

.card .imgBox {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  transform-origin: left;
  transform-style: preserve-3d;
  background: #000;
  transition: 1s;
  box-shadow: 10px 20px 40px rgba(14, 14, 14, 0.25);
}
.card:hover .imgBox {
  transform: rotateY(-180deg);
}

.card .imgBox img {
  position: absolute;
  top: 0 ;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-style: preserve-3d;
  backface-visibility: hidden ;


}

.card .imgBox img:nth-child(2) {
  transform: rotateY(180deg);
}
</style>