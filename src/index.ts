import { type BlogsState } from './slices/blogSlice';

export interface ChipProps {
  title: string;
}

export interface SectionHeadingsProps {
  number: string;
  title: string;
}

export interface ProjectData {
  title: string;
  image: string;
  description: string;
  gitLink: string;
  techs: string[];
  alt: string;
  imageExtraClasses?: string;
  url:string;
}

export interface ProjectProps {
  project: ProjectData;
  isReversed: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  form?: string;
}

export type SubmitStatus = "success" | "error" | "validation_error" | null;

export interface Product {
  id: string;
  title: string;
  description: string;
  sticker: string;
  price: number;
}

export interface CartItem extends Product {
  cartQty: number;
}

export interface ProductFormProps {
  product: Product;
}

export interface CartState {
  entities: { [key: string]: CartItem };
  cartTotalAmount: number;
  cartTotalQty: number;
}

export interface RootState {
  cart: CartState;
}


// StickerStore types

// ArticleHandler types
export interface Blog {
  id: string;
  date: string;
  title: string;
  content: string;
  user: string;
  image: string;
  reactions: {
    thumbsUp: number;
    hooray: number;
    heart: number;
    rocket: number;
    eyes: number;
  };
}

export interface User {
  id: string;
  fullname: string;
}

export interface ShowAuthorProps {
  userId: string;
}

export interface Reactions {
  thumbsUp: number;
  hooray: number;
  heart: number;
  rocket: number;
  eyes: number;
}

export interface NewBlogPayload {
  id: string;
  date: string;
  title: string;
  content: string;
  image: string;
  user: string;
  reactions: Reactions;
}

export interface BlogProps {
  blog: Blog;
}

export interface NewUserPayload {
  id: string;
  fullname: string;
  image: string;
}

export type EntityError = string | null | undefined;

export type ReactionName = keyof Blog["reactions"]

export interface RootState {
  cart: CartState;
  blogs: BlogsState;
}
