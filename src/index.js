const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "Hello World!" });
});

/**
* GET - Buscan uma informação dentro do servidor 
* POST -Insenir uma informação no senvidon
* PUT - ALterar uma informação no servidor
* PATCH - Alteran uma informação especifica
* DELETE- Deletan uma informação no senvidon
*/


/**
* Route Params => Identificar um recurs editar/deletar/buscar
9. Query Params => Paginação / Filtro
* Body Params => Os objetos insenção/alteração (JSON
*/

app.get("/courses", (request, response) => {
    const query = request.query;
    console.log(query);
    return response.json([ "Curso 1", "Curso 2", "Curso 2", "Curso 3"]) ;
}); 

app.post("/courses", (request, response) => {
    const body = request.body;
    console.log(body);
    return response.json([ "Curso 1", "Curso 2", "Curso 3", "Curso 3", "Curso 4"]) ;
});

app.put("/courses/:id", (request, response) => {
    const {id} = request.params;
    console.log(id);
    return response.json([ "Curso 6", "Curso 2", "Curso 2", "Curso 3"]) ;
});

app.patch("/courses/:id", (request, response) => {
    return response.json([ "Curso 6", "Curso 7", "Curso 2", "Curso 3"]) ;
});

app.delete("/courses/:id", (request, response) => {
    return response.json([ "Curso 6", "Curso 7", "Curso 2"]) ;
});

app.listen(3333);

