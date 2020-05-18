const app = require('./config/server');
const rotaNoticias = require('./app/routes/noticias');
const rotaFormularioInclusaoNoticia = require('./app/routes/admin');
const rotaHome = require('./app/routes/home');

// rotaHome(app);
// rotaNoticias(app);
// rotaFormularioInclusaoNoticia(app);

app.listen(3000, function(){
    console.log("Servidor Rodando com Express.")
});