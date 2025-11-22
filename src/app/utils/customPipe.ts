import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
  standalone: true,
})
export class CustomPipess implements PipeTransform {
  transform(value: string, ...args: any[]) {
    if (!value) return null;

    return value.substring(0, 1);
  }
}
