class Menu {
  private Title: string;
  private ImageUrl: string;

  constructor(name: string, imageUrl: string) {
    this.Title = name;
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