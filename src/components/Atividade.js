import React from 'react'

export const Atividade = ({ativ, prioridadeStyle, prioridadelabel, deletarAtividade}) => {
  return (
    <><div className={"card mb-3 shadow-sm p-1 border-" + prioridadeStyle(ativ.prioridade)}
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
    </div></>
  )
}

