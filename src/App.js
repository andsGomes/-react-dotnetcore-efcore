import React from 'react'


let initialState = [
  {
    id: 1,
    prioridade: '1',
    titulo: 'Primeira Atividade',
    descricao: 'Primeira Atividade'
  },
  {
    id: 2,
    prioridade: '3',
    titulo: 'Segunda Atividade',
    descricao: 'Segunda Atividade'
  }
]


export const App = () => {

  const [atividades, setAtividades] = React.useState(initialState);

  function addAtividade(e) {

    e.preventDefault();

    const atividade = {
      id: document.getElementById('id').value,
      prioridade: document.getElementById('prioridade').value,
      titulo: document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value
    }

    setAtividades([...atividades, { ...atividade }]);
  }

  function prioridadelabel(param) {
    switch (param) {
      case '1':
        return 'Baixa';
      case '2':
        return 'Normal';
      case '3':
        return 'Alta';
      default:
        return 'Não Definido'

    }
  }


  function prioridadeStyle(param, icone) {
    switch (param) {
      case '1':
        return icone ? 'smile' : 'success';
      case '2':
        return icone ? 'meh' : 'dark';
      case '3':
        return icone ? 'frown' : 'warning';
      default:
        return 'Não Definido'
    }
  }

  function deletarAtividade(id) {
    const atividadeFiltradas = atividades.filter(atividade => atividade.id !== id);
    setAtividades([...atividadeFiltradas]);
  }



  return (
    <>
      <div className="container mt-4">
        <form className=" row g-3 ">
          <div className="col-md-6">
            <label htmlFor="id" className="form-label">Id</label>
            <input
              className="form-control form-control-sm"
              type="text"
              id="id"
              name="id"
              placeholder="id"
              readOnly
              value={Math.max.apply(Math, atividades.map(item => item.id)) + 1} />
          </div>
          <div className="col-md-6">
            <label htmlFor="prioridade" className="form-label">Prioridade</label>
            <select name="prioridade" id="prioridade" className="form-select form-select-sm">
              <option defaultValue="0">Selecione</option>
              <option value="1">Baixa</option>
              <option value="2">Normal</option>
              <option value="3">Alta</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="titulo" className="form-label">Titulo</label>
            <input className="form-control form-control-sm" type="text" id="titulo" name="titulo" placeholder="titulo" />
          </div>
          <div className="col-md-6">
            <label htmlFor="descricao" className="form-label">Descricao</label>
            <input className="form-control form-control-sm" type="text" id="descricao" name="descricao" placeholder="descricao" />
          </div>
          <div className="col-md-12">
            <button className="btn btn-outline-secondary btn-sm" onClick={addAtividade}>+ Atividade</button>
          </div>
          <div className="col-md-12 text-secondary">
            <hr />
          </div>
        </form>
        <div className="mt-3">
          {atividades.map(ativ => (
            <div className={"card mb-3 shadow-sm p-1 border-" + prioridadeStyle(ativ.prioridade)}
              key={ativ.id}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">
                    <span className="badge rounded text-bg-secondary me-1">{ativ.id}</span> - {ativ.titulo}
                  </h5>
                  <h6>Prioridade :
                    <span className={"ms-1 text-" + prioridadeStyle(ativ.prioridade)}>
                      <i className={"ms-2 me-2 far fa-" + prioridadeStyle(ativ.prioridade, true)}></i>
                      {prioridadelabel(ativ.prioridade)}
                    </span>
                  </h6>
                </div>
                <p className="card-text">{ativ.descricao}</p>
                <div className="d-flex justify-content-end pt-2 border-top">
                  <button
                    className="btn btn-outline-primary btn-sm me-1"
                    style={
                      {
                        "--bs-btn-padding-x": "1.5rem",
                        "--bs-btn-padding-y": ".25rem",
                        "--bs-btn-font-size": ".75rem"
                      }
                    }>
                    <i className="fas fa-pen me-2"></i>
                    Editar
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm "
                    style={
                      {
                        "--bs-btn-padding-x": "1.5rem",
                        "--bs-btn-padding-y": ".25rem",
                        "--bs-btn-font-size": ".75rem"
                      }
                    }
                    onClick={() => deletarAtividade(ativ.id)}>
                    <i className="fas fa-trash me-2"></i>
                    Deletar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}
