import { useEffect, useState } from "react";
import GlobalStyle from "./styles/globalStyles";
import { Header, Message, Footer, Display } from "./components";
import { ContainerScreen } from './App.styles';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from './App.types';
import { searchNumberAction } from "./redux/fetchActions/searchNumberAction";

function App() {
  const dispatch = useDispatch<any>();

  const [leds, setLeds] = useState(
    {
      first: "active",
      second: "active",
      third: "active",
      fourth: "active",
      fifth: "active",
      sixth: "active",
      seventh: "not_active",
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
        <Display leds={leds} />
        <Footer />
      </ContainerScreen>
    </>
  );
}

export default App;
