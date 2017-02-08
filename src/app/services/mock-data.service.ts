import { Injectable } from '@angular/core';

interface Company {
  company: string,
  domain: string,
  info: {
    country: string,
    cash: number
  }
}

@Injectable()
export class MockDataService {

  constructor() { }

  getHeros(): Company[] {
    return [
      {
        "company": "Tekfly",
        "domain": "umn.edu",
        "info": {
          "country": "Colombia",
          "cash": 9825902
        }
      },
      {
        "company": "Innotype",
        "domain": "live.com",
        "info": {
          "country": "China",
          "cash": 9033735
        }
      },
      {
        "company": "Skyba",
        "domain": "ustream.tv",
        "info": {
          "country": "Albania",
          "cash": 9215169
        }
      },
      {
        "company": "Yodoo",
        "domain": "bravesites.com",
        "info": {
          "country": "Malaysia",
          "cash": 12374853
        }
      },
      {
        "company": "Oyoyo",
        "domain": "example.com",
        "info": {
          "country": "China",
          "cash": 14298521
        }
      },
      {
        "company": "Quinu",
        "domain": "seesaa.net",
        "info": {
          "country": "China",
          "cash": 14423687
        }
      },
      {
        "company": "Vipe",
        "domain": "ycombinator.com",
        "info": {
          "country": "Burkina Faso",
          "cash": 5020906
        }
      },
      {
        "company": "BlogXS",
        "domain": "nyu.edu",
        "info": {
          "country": "Philippines",
          "cash": 10395478
        }
      },
      {
        "company": "Blogtag",
        "domain": "mashable.com",
        "info": {
          "country": "Brazil",
          "cash": 9884385
        }
      },
      {
        "company": "Feedbug",
        "domain": "a8.net",
        "info": {
          "country": "Peru",
          "cash": 9159272
        }
      }
    ]
  }

}
