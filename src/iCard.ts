//creating a new interface for the Promise results 
export interface ICard {
  name: string;
  manaCost: string;
  cmc: number;
  colors: Array<string>;
  colorIdentitiy: Array<string>;
  type: string;
  supertypes: Array<string>;
  types: Array<string>;
  subtypes: Array<string>;
  rarity: string;
  set: string;
  setName: string;
  text: string;
  flavor: string;
  artist: string;
  number: string;
  power: string;
  toughness: string;
  layout: string;
  rulings: Array<object>;
  printings: Array<string>;
  legalities: Array<object>;
  id: string;
}