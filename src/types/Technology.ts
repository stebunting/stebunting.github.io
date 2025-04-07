export interface Technology {
  name: string;
  description: string;
  members: Array<{
    name: string;
    imgUrl: string;
  }>;
}
