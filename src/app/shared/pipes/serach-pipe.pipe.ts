import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serachPipe'
})
export class SerachPipePipe implements PipeTransform {

  transform(value: any, term: String, args?: any): any {
    return value.filter((x:any) => x.login.toLowerCase().startsWith(term.toLowerCase()))
  }

}
