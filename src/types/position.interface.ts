export interface IPositionsData {
  positions: IPosition[];
  success: boolean;
}

export interface IPosition {
  id: number;
  name: string;
}