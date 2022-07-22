<template>
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    
    <link rel="stylesheet"  type="text/css" href="style.css">
    
</head>
<body>
    <nav class="navbar navbar-expand-lg bg-info">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Eduapp</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navbarNav" class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Perfil</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Configuracion</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Salir</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="img">
        <img src="https://4.bp.blogspot.com/-Js496fql3IY/V-44b4hDdzI/AAAAAAAABNk/QoHu8dk9epYilxzwmL_7UzLXEpwq2DuawCLcB/s1600/people-316506_1280.jpg" class="img-fluid" alt="..."> 
      </div>
    
    <p class="lead">
        Usted tiene el control sobre lo que su hijo consume en nuestra web.
             Por ello usted registra a su hijo para darle los accesos del perfil del menor. Usted tiene el control sobre lo que su hijo consume 
             en nuestra web. Por ello usted registra a su hijo para darle los accesos del perfil del menor. Usted tiene el control sobre lo que su hijo 
             consume en nuestra web. Por ello usted registra a su hijo para darle los accesos del perfil del menor.Usted tiene el control sobre lo que
             su hijo consume en nuestra web. Por ello usted registra a su hijo para darle los accesos del perfil del menor.
    </p>
    <figure class="text-center">
        <blockquote class="blockquote">
          <p>Mis hijos</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          Aqui puedes ver los perfiles de tus hijos 
        </figcaption>
      </figure>

      <div class="container_hijos">
        <div class="card" style="width: 16rem;">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h1 class="display-6"> Jose salazar</h1>
              <p class="card-text">Usted tiene el control sobre lo que su hijo consume en nuestra web.</p>
            </div>
          </div>
          <div class="card" style="width: 16rem;">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h1 class="display-6">Marcos salazar</h1>
              <p class="card-text">Usted tiene el control sobre lo que su hijo consume en nuestra web. </p>
            </div>
          </div>
          <div class="btn-add">
            <button type="button" class="btn btn-outline-info">Agregar hijo</button>
          </div>
          
      </div>

      <section class="help-section">
        <div class="help-container">
          <div>
            <img class="help-img" src="https://www.svgrepo.com/show/326554/chatbox-outline.svg" alt="">
          </div>
          <p class="help-text">Necesitas ayuda?</p>
        </div>
      </section>

      <footer class="footer">
        <div class="footer-container">
          
          <div class="quick-links">
            <h5 class="quick-links-title">Quick links</h5>
            <ul class="list-unstyled quick-links">
              <li><a href=""><i class="fa fa-angle-double-right"></i>Home</a></li>
              <li><a href=""><i class="fa fa-angle-double-right"></i>About</a></li>
              <li><a href=""><i class="fa fa-angle-double-right"></i>FAQ</a></li>
              <li><a href=""><i class="fa fa-angle-double-right"></i>Get Started</a></li>
              <li><a href=""><i class="fa fa-angle-double-right"></i>Videos</a></li>
            </ul>
          </div>
          <div class="img-edu">
            <a href="#">
              <img src="" alt="">
            </a>
          </div>
              
        </div>
        </footer>


        









</body>
</template>





<style>
.navbar navbar-expand-lg bg-info{
    background-color: #f5f5f5;

}
.img-fluid{
    position: relative;
    left: 18vw;
    width: 60vw;
}
.img{
    
    padding-top: 50px;
    padding-bottom: 50px;
    margin: 20px;
}
.lead{
    margin: 50px;
    font-size: 15px;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 50px;
    padding-right: 50px;
}
.text-center{
    margin-top: 50px;
    font-size: 20px;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
}

.container_hijos{
    display: flex;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 30px;
    padding-right: 30px;
    flex-direction: row;
    background-color: #46e39f;
    border-radius: 30px;
    position : relative;
    left: 15vw;
    width: 60vw;
}
.card{
margin:20px;
}

.display-6{
    font-size: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
}

.btn-add{
    display: flex;
    height: 60px;
    align-content: flex-end;
    position : relative;
    left: 3vh;
    top: 15px;
    margin: 10px;
}

.help-container {
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 10px;
  }
  .help-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px black solid;
    background-color: #fff;
    cursor: pointer;
 
  }
  .help-text {
    /* font-size: 1.5rem; */
    font-weight: bold;
    border: 1px black solid;
    padding: 0.5rem;
    padding-left: 1rem;
    border-radius: 0 1rem 1rem 0;
    margin-left: 1rem;
    margin-bottom: 2px;
  }

  .footer {
    width: 100%;
    height: 20vw;
    background-color: #2b32b5;

  }
  .footer-container {
    position: relative;
    top: 0px;
    left: 40%;
    width: 40vw;
    height: 75%;
    display: flex

  }
  .quick-links {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .quick-links-title {
    width: 10vw;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    position: relative;
    bottom: 10vw;
    right: 50%;
  }

  @media only screen and (max-width: 800px) {
    .container_hijos{
        display: flex;
        padding-top: 50px;
        padding-bottom: 50px;
        padding-left: 10px;
        padding-right: 10px;
        flex-direction: column;
        background-color: #46e39f;
        border-radius: 30px;
    }
    .footer-container {
        position: relative;
        left: 20vh;
        top: 10px;
       height: 80%;
         width: 65%;
    }
    .quick-links {
        width: 100%;
        height: 100px;
        font-size: .7rem;
        padding: 10px;
       margin: 10px;
       display: flex;
       justify-content: space-between;
    }
    .quick-links-title {
      font-size: 1rem;
    }
  }



</style>