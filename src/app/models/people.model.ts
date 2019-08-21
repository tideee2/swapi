export interface PeopleModel {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: [];
  species: [];
  vehicles: [];
  starships: [];
  url: string;
  created: string;
  edited: string;
}
export interface PeopleModelQuery {
  count: number;
  next: string;
  previous: string;
  results: PeopleModel[];
}
