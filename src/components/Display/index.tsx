import { ContainerSegments, Segment } from "./styles";
import { DisplayProps } from "./types";

function Display({ leds }: DisplayProps) {
    return (
        <>
            <ContainerSegments id="container_segments">
                <Segment
                    className={`segment_a ${leds.first}`}
                    data-testid="segment_a"
                />
                <Segment
                    className={`segment_b ${leds.second}`}
                    data-testid="segment_b"
                />
                <Segment
                    className={`segment_c ${leds.third}`}
                    data-testid="segment_c"
                />
                <Segment
                    className={`segment_d ${leds.fourth}`}
                    data-testid="segment_d"
                />
                <Segment
                    className={`segment_e ${leds.fifth}`}
                    data-testid="segment_e"
                />
                <Segment
                    className={`segment_f ${leds.sixth}`}
                    data-testid="segment_f"
                />
                <Segment
                    className={`segment_g ${leds.seventh}`}
                    data-testid="segment_g"
                />
            </ContainerSegments>
        </>
    );
}

export default Display;