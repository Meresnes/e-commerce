export enum Categories {
  Clothes = "Clothes",
  Electronics = "Electronics",
  Furniture = "Furniture",
  Shoes = "Shoes",
  Others = "a new hey xd",
  Empty = "",
}

export const categoryNormalizer = (category: Categories) => {
  switch (category) {
    case Categories.Clothes:
      return 1;
    case Categories.Electronics:
      return 2;
    case Categories.Furniture:
      return 3;
    case Categories.Shoes:
      return 4;
    case Categories.Others:
      return 5;
    default:
      return 1;
  }
};
