const express = require("express");
const cors = require("cors");

const { v4: uuid, validate: isUuid } = require('uuid') ;

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  // TODO
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  // TODO
  const {title, url, techs} = request.body;
  
  const repository = {
    id: uuid(),
    title: title,
    url: url,
    techs: techs,
    likes: 0
  };

  repositories.push(repository);

  return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
  // TODO
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
  const {id} = request.params;

  const findRepositoryIndex = repositories.findIndex(repository => 
    repository.id===id
  );

  if(findRepositoryIndex) {
    const repositorieDelete = findRepositoryIndex.splice();

    return response.json(repositorieDelete);
  }

  return response.status(401).json({
    message: "Repository not found."
  })

});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
