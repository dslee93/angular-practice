import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(input: string, ...args: unknown[]): string {
    if(!input)
    return null;
    const words = input.split(" ");
    for(let i=0; i<words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    const newwords = words.join(" ");
    return newwords;
  }

}
