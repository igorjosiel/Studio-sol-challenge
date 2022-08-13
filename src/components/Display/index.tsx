import { ContainerSegments, ContainerButton, Segment, Button, RefreshIcon, } from "./styles";
import { DisplayProps } from "./types";
import { RootState } from "../../App.types";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { searchNumberAction } from "../../redux/fetchActions/searchNumberAction";

const ledsName: string[] = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
];

function Display({ leds }: DisplayProps) {
  const dispatch = useDispatch<any>();

  const { success, error } = useSelector<RootState, any>(
    (store) => store?.searchNumber
  );

  return (
    <>
      <ContainerSegments id="container_segments">
        {leds?.map((item: any, index) => (
          <div key={index}>
            {ledsName?.map((ledName, index) => {
              return (
                <Segment
                  key={index}
                  className={`
                    ${ledName}_segment
                    ${item[ledName]}
                    ${success && item[ledName] === "on" && "success"}
                    ${error && item[ledName] === "on" && "error"}`
                  }
                  data-testid={`${ledName}_segment`}
                />
              );
            })}
          </div>
        ))}
      </ContainerSegments>
      {success | error ?
        <ContainerButton onClick={() => dispatch(searchNumberAction())}>
          <Button as="div">
            <RefreshIcon size={20} />
            <p>NOVA PARTIDA</p>
          </Button>
        </ContainerButton>
        : <></>
      }
    </>
  );
}

export default Display;
