
import { Aside } from './components/Aside';
import { NoteContent } from './components/NoteContent';

import { GlobalStyle } from './styles/global'

function App() {
  return (
    <div className="App">
      <h1>PostIt</h1>
      <Aside />
      <NoteContent />
      <GlobalStyle />
    </div>
  );
}

export default App;
