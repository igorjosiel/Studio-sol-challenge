import { ContainerSegments, Segment } from "./styles";
import { DisplayProps } from "./types";

function Display({ leds }: DisplayProps) {
  return (
    <>
      <ContainerSegments id="container_segments">
        {leds?.map((item, index) => (
          <div key={index}>
            <Segment
              className={`segment_a ${item.first}`}
              data-testid="segment_a"
            />
            <Segment
              className={`segment_b ${item.second}`}
              data-testid="segment_b"
            />
            <Segment
              className={`segment_c ${item.third}`}
              data-testid="segment_c"
            />
            <Segment
              className={`segment_d ${item.fourth}`}
              data-testid="segment_d"
            />
            <Segment
              className={`segment_e ${item.fifth}`}
              data-testid="segment_e"
            />
            <Segment
              className={`segment_f ${item.sixth}`}
              data-testid="segment_f"
            />
            <Segment
              className={`segment_g ${item.seventh}`}
              data-testid="segment_g"
            />
          </div>
        ))}
      </ContainerSegments>
    </>
  );
}

export default Display;
