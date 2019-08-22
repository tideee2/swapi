import {PeopleModel} from './people.model';
import {FilmModel} from './film.model';
import {PlanetModel} from './planet.model';
import {SpeciesModel} from './species.model';
import {StarshipModel} from './starship.model';
import {VehicleModel} from './vehicle.model';

export interface SearchQueryModel {
  count: number;
  next: string;
  previous: string;
  results: ResultModel[];
}

export type ResultModel = PeopleModel | FilmModel | PlanetModel | SpeciesModel | StarshipModel | VehicleModel;
