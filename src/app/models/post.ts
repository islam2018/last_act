export class Post {
  title: string;
  content: string;
  loveits: number;
  created_at: string;
  constructor(title, content, loveits, created_at) {
    this.title = title;
    this.content = content;
    this.loveits = loveits;
    this.created_at = created_at;
  }
}
