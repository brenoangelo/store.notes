
import { Aside } from './components/Aside';
import { NoteContent } from './components/NoteContent';
import { ToastContainer } from 'react-toastify'

import { BsGithub } from 'react-icons/bs';

import { GlobalStyle } from './styles/global'

function App() {
  return (
    <div className="App">
      <h1>PostIt</h1>
      <Aside />
      <NoteContent />
      <GlobalStyle />
      <ToastContainer autoClose={3000}/>
      <a 
        id="github"
        href="https://github.com/brenoangelo" 
        target="_blank"
      >
        <BsGithub />
        Feito por <strong>Breno Angelo</strong>
      </a>
    </div>
  );
}

export default App;
