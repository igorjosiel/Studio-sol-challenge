import GlobalStyle from "./styles/globalStyles";
import { Header } from "./components";
import { ContainerScreen } from './App.styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <ContainerScreen>
        <Header />
        <div style={{ height: '75%', backgroundColor: 'blue' }}>asas</div>
      </ContainerScreen>
    </>
  );
}

export default App;
