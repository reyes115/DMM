# DMM
Desarrollo movil multiplataforma
<!DOCTYPE html>
<html lang="en">
<head id="header">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="http://localhost/tiendan/css/reset.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="http://localhost:8000/css/styles.css">
</head>
<body>

  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
                <a class="navbar-brand" href="Principal.html">
                    <img src="http://localhost:8000/img/logo1.png" width="150" alt="">
                </a>
            <!--<a class="navbar-brand" href="#">Navbar</a>-->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="navbar-nav ml-auto">
                    <a class="nav-link active link-menu" aria-colcount="page" href="http://localhost/tiendan/js/index.html">INICIO</a>
                    <a class="nav-link"  href="http://localhost/tiendan/js/producto.html">PRODUTO</a>
                    <a class="nav-link"  href="http://localhost/tiendan/js/contacto.html">CONTACTO</a>
                    <a class="nav-link"  href="http://localhost/tiendan/js/contacto.html">LOGIN 👤</a>
                    <a class="nav-link"  href="http://localhost/tiendan/js/contacto.html">SALIR 🚪</a>

                </div>           
            </div>
        </div>
    </nav>
</header>


      <section id="contacto">

        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-sm-3">
                </div>
                <div class="col-sm-6">
                  <form class="container">
                      <div class="mb-4">
                        <h1 >Ponte en contacto</h1>
                        <p>Nos interesa conocer tu opinión.sugerencias,quejas y responder a tus preguntas.</p>
                        <br>
                          <input type="Nombre" class="form-control" id="Nombre" placeholder="Nombre">
                          <br>
                          <input type="Correo" class="form-control" id="Correo" placeholder="Correo electrónico">
                          <br>
                          <input type="Asunto" class="form-control" id="Asunto" placeholder="Asunto">
                      </div>
                          <div class="mb-3">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Escribe aqui tu mensaje"></textarea>
                          </div>

                          <button type="button" class="btn btn-primary">Enviar</button>
                          <br>
                          <p></p>
                  </form>

                </div>
                <div class="col-sm-3">
                </div>
            </div>
        </div>

    </section>

    
      <footer id="footer">
          <div class="container">
              <div class="row justify-content-md-center">
                  <div class="col-md-4">
                      <p>SMARTWACH | Derechos reservados 2020</p>
                  </div>
              </div>
          </div>
      </footer>


  </body>
</html>
