import { useEffect } from "react";
import GlobalStyle from "./styles/globalStyles";
import { Header, Message, Footer, Display } from "./components";
import { ContainerScreen } from './App.styles';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./App.types";
import { searchNumberAction } from "./redux/fetchActions/searchNumberAction";

function App() {
  const dispatch = useDispatch<any>();

  const {
    searchedNumber,
    leds,
    message,
    colorMessage,
  } = useSelector<RootState, any>((store) => store?.searchNumber);

  useEffect(() => {
    dispatch(searchNumberAction());
  }, []);

  return (
    <>
      <GlobalStyle />
      <ContainerScreen>
        <Header />
        <Message message={message} color={colorMessage} />
        <Display leds={leds} />
        <Footer />
      </ContainerScreen>
    </>
  );
}

export default App;
