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
