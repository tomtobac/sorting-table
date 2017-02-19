import { Company } from './../interfaces/company';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortingCompanies'
})
export class SortingCompaniesPipe implements PipeTransform {

  transform(companies: Company[], path: string[], order: number = 1): Company[] {

    // Check if is not null
    if (!companies || !path || !order) return companies;

    return companies.sort((a: Company, b: Company) => {
      // We go for each property followed by path
      path.forEach(property => {
        a = a[property];
        b = b[property];
      })

      // Order * (-1): We change our order
      return a > b ? order : order * (- 1);
    })
  }

}
