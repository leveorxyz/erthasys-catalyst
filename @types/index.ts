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
  milestones: string;
  instanceGoals: string;
  created: Created;
  file: string;
  rewards: string;
}

export interface Program {
  id: string;
  data: ProgramData;
}
