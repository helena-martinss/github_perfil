import { useState } from 'react';
import Perfil from './components/Perfil';
import ReposList from './components/ReposList';

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [usuarioBuscado, setUsuarioBuscado] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');


  return (
    <>
      <div className="container-input">
        <h2>Digite seu nome de usuário do GitHub:</h2>
        <div className='container-input-botao'>
          <input 
            type="text"
            onBlur={(e) => {
              setNomeUsuario(e.target.value);
            }}
          />
          <button
            onClick={() => {
              if (nomeUsuario.length > 4) {
                setUsuarioBuscado(nomeUsuario);
                setMensagemErro('');
              } else {
                setUsuarioBuscado('');
                setMensagemErro('O nome de usuário precisa ter mais de 4 caracteres');
              }
            }}
          >
            Buscar
          </button>
        </div>
        {mensagemErro && <h4>{mensagemErro}</h4>}
      </div>

      {usuarioBuscado && (
        <>
          <Perfil nomeUsuario={usuarioBuscado} />
          <ReposList nomeUsuario={usuarioBuscado} />
        </>
      )}
    </>
  )
}

export default App
