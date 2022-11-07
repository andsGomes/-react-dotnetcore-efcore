import React from 'react'
import { Atividade } from './components/Atividade';
import { AtividadeForm } from './components/AtividadeForm';


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
        <AtividadeForm
          addAtividade={addAtividade}
          atividades={atividades}
        />
        <div className="mt-3">
          {atividades.map(ativ => (
            <Atividade 
               ativ={ativ}
               prioridadeStyle={prioridadeStyle}
               prioridadelabel={prioridadelabel}
               deletarAtividade={deletarAtividade}
            />
          ))}
        </div>
      </div>

    </>
  )
}
