import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(input: string, ...args: unknown[]): string {
    if(!input)
    return null;
    return input.substr(0,50) + '...'
  }

}
