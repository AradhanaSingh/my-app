import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    // this is the name that will be used in HTML
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform
{
    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }
}