// Requerimientos

const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});
app.engine(
    "handlebars",
    exphbs.engine({
        layoutsDir: __dirname + "/views",
        partialsDir: __dirname + "/views/componentes/",
    })
);
app.set("view engine", "handlebars");
app.use("/css", express.static(__dirname +
    "/node_modules/bootstrap/dist/css"));

app.use("/assets",express.static("assets"));
app.get("/", function (req, res) {
    res.render("main", { layout: "main" });
});

app.get("/Productos", function (req, res) {
    // Paso 2
    res.render("productos", {
        layout: "productos",
        productos: ["banana",
            "cebollas",
            "lechuga",
            "papas",
            "pimenton",
            "tomate"],
    });
});


// 1. Crear una ruta raíz que al ser consultada renderice una vista con un parcial “Dashboard” enviándole en el render
//un arreglo con los nombres de los productos. Se recomienda que estos coincidan con las imágenes de cada producto.


// 2. Incluir en la vista un parcial que contenga el menú del sitio web y sea renderizado antes del Dashboard.


// 3. Crear un parcial “producto” que contenga el template correspondiente a la
// presentación de cada producto en el Dashboard y reciba como parámetro el nombre  del producto.


// 4. Crear un parcial para la sección principal en donde se renderice un helper con el mensaje de bienvenida y se
//realice una iteración para renderizar un parcial “producto” pasándole como argumento el nombre de cada producto.


// 5. Consumir los códigos fuentes de Bootstrap y jQuery a través de rutas o middlewares
// creados en el servidor. Estas dependencias deben ser instaladas con NPM.
