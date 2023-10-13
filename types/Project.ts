import { PortableTextBlock } from "sanity";

export type Project = {
  description: ReactNode;
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
}