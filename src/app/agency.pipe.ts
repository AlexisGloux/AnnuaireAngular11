import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agency'
})
export class AgencyPipe implements PipeTransform {

  transform(value: number): string {
    if (value === 0) { return 'Troyes'; }
    if (value === 1) { return 'Compiègne'; }
    if (value === 2) { return 'Belfort'; }
    return null;
  }

}
