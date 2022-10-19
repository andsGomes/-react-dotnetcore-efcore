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
      id: document.getElementById('id').value,
      descricao: document.getElementById('descricao').value
    }

    setAtividades([...atividades, { ...atividade }]);
  }

  return (
    <>
      <div className="container mt-4">
        <form className=" row g-3 ">
          <div className="col-md-6">
            <label htmlFor="id" className="form-label">Id</label>
            <input className="form-control form-control-sm" type="text" id="id" name="id" placeholder="id" />
          </div>
          <div className="col-md-6">
            <label htmlFor="descricao" className="form-label">Descricao</label>
            <input className="form-control form-control-sm" type="text" id="descricao" name="descricao" placeholder="descricao" />
          </div>
          <div className="col-md-12">
            <button className="btn btn-outline-secondary btn-sm" onClick={addAtividade}>+ Atividade</button>
          </div>
          <div className="col-md-12 text-secondary">
            <hr/>
          </div>
        </form>
        <div className="mt-3">
          {atividades.map(ativ => (
            <div className="card mb-3 shadow-sm p-1" key={ativ.id}>
              <div className="card-body">
                <h5 className="card-title">
                  <span className="badge rounded text-bg-secondary">{ativ.id}</span> - {ativ.descricao}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted"></h6>
                <p className="card-text"></p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}
