import {Inject, Pipe, PipeTransform} from '@angular/core';
import {AGENCIES_TOKEN} from './agency.service';

@Pipe({
  name: 'agency'
})
export class AgencyPipe implements PipeTransform {

  constructor(
    @Inject(AGENCIES_TOKEN) private agencies: string[]
  ) {}

  transform(value: number): string {
    return this.agencies[value];
  }
}
