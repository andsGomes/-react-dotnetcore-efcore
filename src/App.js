import React from 'react'


let initialState = [
  {
    id: 1,
    descricao: 'Primeira Atividade'
  },
  {
    id: 2,
    descricao: 'Segunda Atividade'
  }
]


export const App = () => {

  const [atividades, setAtividades] = React.useState(initialState);

  function addAtividade(e) {

    e.preventDefault();

    const atividade = {
      id: document.getElementById('id').vvalue,
      descricao: document.getElementById('descricao').value
    }
    atividades.push(atividade);
  }

  return (
    <>
      <div className="container mt-4">
        <form>
          <input type="text" id="id" name="id" placeholder="id" />
          <input type="text" id="descricao" name="descricao" placeholder="descricao" />
          <button onClick={addAtividade}>+ Atividade</button>
        </form>
        <div className="mt-3">
          <ul className="list-group">
            {atividades.map(ativ => (
              <li className="list-group-item" key={ativ.id}>{ativ.id} - {ativ.descricao}</li>
            ))}


          </ul>
        </div>
      </div>

    </>
  )
}
