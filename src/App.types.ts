export interface RootState {
  searchNumber: number;
  leds: [LedsProps];
}

export interface LedsProps {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
  sixth: string;
  seventh: string;
}
