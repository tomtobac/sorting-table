import { Company } from './../interfaces/company';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortingCompanies'
})
export class SortingCompaniesPipe implements PipeTransform {

  transform(companies: Company[], ...args): Company[] {

    // ES6 - Array destructing
    const [ path, order ] = args;
   
    // Check if is not null
    if (!companies || !path || !order) return companies;

    return companies.sort( (a: Company, b: Company) => this.sortingCompanies(a, b, path, order) )
  }
  
  private sortingCompanies(prev: Company, curr: Company, path: string[], order: number): number { 
    
    // We go for each property followed by path
    path.forEach( property => {
      prev = prev[property];
      curr = curr[property];
    })
  
    // Order * (-1): We change our order
    return prev > curr ? order : order * (- 1);
  }

}
