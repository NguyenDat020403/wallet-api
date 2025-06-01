export interface CreatePostDto {
  title: string;
  content: string;
}
export interface UpdatePostDto extends CreatePostDto {
  post_id: string;
}
export interface LikePostDto {
  post_id: string;
}
