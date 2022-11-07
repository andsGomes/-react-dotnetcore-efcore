import React from 'react'

export const AtividadeForm = ({ addAtividade, atividades }) => {
  return (
    <>
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
            value={Math.max.apply(Math, atividades.map(item => item.id)) + 1} 
            desabled />
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
    </>
  )
}


