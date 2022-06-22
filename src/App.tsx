import { Event } from "./pages/Event"


function App(){
  return (
    <div>
      <Event />
    </div>
  )
}

export default App
//cms content management system
// Traz tanto o painel de ADMIN tanto quanto a parte visual do front-end (temas)
//Headless CMS (GRAPHCMS): painel de ADMIN(dados fornecidos através de uma API REST ou GraphQL)
//React que consome essa API do CMS

//query / mutation

//query = buscar dados
//mutation = criar, alterar ou deletar dados
//html css de tudo e depois funcionalidade