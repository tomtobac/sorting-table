import { Company } from './../interfaces/company';
import { Injectable } from '@angular/core';

@Injectable()
export class MockDataService {

  // In real world this should be comming from an Api 
  getCompanies(): Company[] {
    return [
      new Company('Tekfly', 'umn.edu', { country: 'Colombia', cash: 9825902 }),
      new Company('Innotype', 'live.com', { country: 'Colombia', cash: 9825902 }),
      new Company('Skyba', 'ustream.tv', { country: 'Albania', cash: 9215169 }),
      new Company('Yodoo', 'bravesites.com', { country: 'Malaysia', cash: 12374853 }),
      new Company('Oyoyo', 'example.com', { country: 'China', cash: 14298521 })
    ]
  }

}
