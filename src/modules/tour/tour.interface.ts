export interface ITour {
  name: string;
  durationHours: number;
  averageRating: number;
  price: number;
  coverImage: string;
  images: string[];
  startDate: Date;
  startLocation: string[];
  slug: string;
}
