class Restaurant {
  private Id: number;
  private Name: string;
  private Description: string;
  private CoverImageUrl: string;
  private Rating: number;

  constructor(id: number, name: string, description: string, coverImageUrl: string, rating: number) {
    this.Id = id;
    this.Name = name;
    this.Description = description;
    this.CoverImageUrl = coverImageUrl;
    this.Rating = rating;
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
}
