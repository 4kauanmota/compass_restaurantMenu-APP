class Menu {
  private Title: string;
  private ImageUrl: string;

  constructor(title: string, imageUrl: string) {
    this.Title = title;
    this.ImageUrl = imageUrl;
  }

  get title(): string {
    return this.Title;
  }
  get imageUrl(): string {
    return this.ImageUrl;
  }
}

export default Menu;