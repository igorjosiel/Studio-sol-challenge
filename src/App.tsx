import { useEffect, useState } from "react";
import GlobalStyle from "./styles/globalStyles";
import { Header, Message, Footer, Display } from "./components";
import { ContainerScreen } from './App.styles';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from './App.types';
import { searchNumberAction } from "./redux/fetchActions/searchNumberAction";

function App() {
  const dispatch = useDispatch<any>();

  const [arrayActive, setArrayActive] = useState(
    {
      a: "active",
      b: "active",
      c: "active",
      d: "active",
      e: "active",
      f: "active",
      g: "not_active",
    },
  );

  useSelector((store: RootState) => store?.searchNumber);

  useEffect(() => {
    dispatch(searchNumberAction());
  }, []);

  return (
    <>
      <GlobalStyle />
      <ContainerScreen>
        <Header />
        <Message message="Teste" color="red" />
        <Display arrayActive={arrayActive} />
        <Footer />
      </ContainerScreen>
    </>
  );
}

export default App;
