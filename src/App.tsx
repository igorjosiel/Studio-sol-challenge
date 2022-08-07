import { useEffect } from "react";
import GlobalStyle from "./styles/globalStyles";
import { Header } from "./components";
import { ContainerScreen } from './App.styles';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from './App.types';
import { searchNumberAction } from "./redux/fetchActions/searchNumberAction";

function App() {
  const dispatch = useDispatch<any>();

  useSelector((store: RootState) => store?.searchNumber);

  useEffect(() => {
    dispatch(searchNumberAction());
  }, []);

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
