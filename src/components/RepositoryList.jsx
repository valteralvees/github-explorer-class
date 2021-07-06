import { useState, useEffect } from "react";
const repositoryName = 'unform2';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'

//api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  },[]);

  return(
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository="unform2"/>
        <RepositoryItem/>
        <RepositoryItem/>
        <RepositoryItem/>
      </ul>
    </section>
  );
}