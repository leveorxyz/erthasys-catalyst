export interface ClassDistribution {
  Building: string;
  Land: string;
  Road: string;
  Unlabeled: string;
  Vegetation: string;
  Water: string;
}

export interface SegmentResponse {
  class_distribution: ClassDistribution;
  prediction: string;
  success: boolean;
}

export interface Created {
  seconds: number;
  nanoseconds: number;
}
export interface ProgramData {
  instanceGoals: string;
  pollutant: string;
  initialAmount: string;
  targetAmount: string;
  file: string;
  created: Created;
}

export interface Program {
  id: string;
  data: ProgramData;
}
