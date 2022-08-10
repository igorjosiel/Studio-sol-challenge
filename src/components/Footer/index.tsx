import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "../index";
import { Container } from "./styles";
import switchLed from "../../utils/switchLeds";
import { changeLedsAction } from "../../redux/fetchActions/searchNumberAction";
import { RootState } from "../../App.types";

function Footer() {
  const [guessNumber, setGuessNumber] = useState("");

  const dispatch = useDispatch<any>();

  const { success, error } = useSelector<RootState, any>(
    (store) => store?.searchNumber
  );

  const changeGuessNumber = (value: string) => {
    if (value.includes("e") || value.includes(".")) return;

    setGuessNumber(value);
  };

  const handleGuessNumber = () => {
    if (!guessNumber) return;

    const changedLeds = switchLed(guessNumber);
    dispatch(changeLedsAction(changedLeds, guessNumber));

    setGuessNumber("");
  };

  return (
    <Container>
      <Input
        name={"guessNumber"}
        value={guessNumber}
        onChange={changeGuessNumber}
        placeholder={"Digite o palpite"}
        type={"number"}
        height={"15px"}
        max={3}
      />
      <Button
        text="Enviar"
        height="45px"
        onClick={handleGuessNumber}
        cursor={success | error ? 'auto' : 'pointer'}
        boxShadow={success | error ? '' : '1px 1px 4px 1px #888888'}
        background={success | error ? '#DDDDDD' : 'linear-gradient(180deg, #ef6c00 0%, #c0661c 100%)'}
        disabled={success | error ? true : false}
      />
    </Container>
  );
}

export default Footer;
