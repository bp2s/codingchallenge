import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
        { id: 11, name: 'Persil' },
        { id: 12, name: 'Ciboulette' },
        { id: 13, name: 'Carotte' },
        { id: 14, name: 'Coriandre' },
        { id: 15, name: 'Courgette' },
        { id: 16, name: 'menthe' },
        { id: 17, name: 'Tomate' },
        { id: 18, name: 'Salade' },
        { id: 19, name: 'Poivron' },
        { id: 20, name: 'Navet' }
    ];
    return {products};
  }
}