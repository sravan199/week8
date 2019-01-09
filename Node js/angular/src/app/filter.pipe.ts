import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(receivedData: any, name?: any): any {

    if(name=="")return receivedData;
    else{
     return   receivedData.filter(function(term){
    
            //   let k=    term.theaters.filter(function(item){
            //  // console.log(item.theatersName + name);
            //   //console.log(item.theatersName.toLowerCase().includes(name.toLowerCase()));
            //           return  item.theatersName.toLowerCase().includes(name.toLowerCase())
            //      });


                 return     (term.original_title.toLowerCase().includes(name.toLowerCase())  )

      });
    }
  }
}
