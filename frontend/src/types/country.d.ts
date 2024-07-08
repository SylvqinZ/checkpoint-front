export interface Continent {
  name: string;
}

export interface Country {
  id: string;
  name: string;
  emoji: string;
  code: string;
  continent: Continent;
}