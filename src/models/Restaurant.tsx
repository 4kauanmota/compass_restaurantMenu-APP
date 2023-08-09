import Menu from "./Menu";

class Restaurant {
  private Id: number;
  private Name: string;
  private Description: string;
  private CoverImageUrl: string;
  private Rating: number;
  private Menu: Array<Menu>;

  constructor(id: number, name: string, description: string, coverImageUrl: string, rating: number, menu: Array<Menu>) {
    this.Id = id;
    this.Name = name;
    this.Description = description;
    this.CoverImageUrl = coverImageUrl;
    this.Rating = rating;
    this.Menu = menu
  }

  get id(): number {
    return this.Id;
  }
  get name(): string {
    return this.Name;
  }
  get description(): string {
    return this.Description;
  }
  get coverImageUrl(): string {
    return this.CoverImageUrl;
  }
  get rating(): number {
    return this.Rating;
  }
  get menu(): Array<Menu> {
    return this.Menu;
  }
}

export default Restaurant;
