document.getElementById("search-button").addEventListener("click", function() {
    var username = document.getElementById("search-input").value;
  
    if (username !== "") {
      fetch("https://api.github.com/users/" + username + "/repos")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          showRepositories(data);
        })
        .catch(function(error) {
          console.log("Error: " + error);
        });
    }
  });
  
  function showRepositories(repositories) {
    var repositoriesList = document.getElementById("repositories-list");
    repositoriesList.innerHTML = "";
  
    repositories.forEach(function(repository) {
      var repositoryItem = document.createElement("li");
      repositoryItem.classList.add("repository-item");
  
      var repositoryName = document.createElement("h3");
      repositoryName.textContent = repository.name;
  
      var repositoryDescription = document.createElement("p");
      repositoryDescription.textContent = repository.description;
  
      repositoryItem.appendChild(repositoryName);
      repositoryItem.appendChild(repositoryDescription);
      repositoriesList.appendChild(repositoryItem);
    });
  }
  