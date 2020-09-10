import { Component, OnInit} from '@angular/core';

export class MyItems{
  Value: string;
  constructor(Value:string)
  {
    this.Value = Value;
  }
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 myItems: MyItems[] = new Array();

 IsForUpdate: boolean = false;
 newItem: any = {};
 updatedItem;

 constructor()
 {
   this.myItems.push(
     new MyItems("enter item"),
      new MyItems("enter item"),
       new MyItems("enter item"),
        new MyItems("enter item"),
         new MyItems("enter item")
   );
 }
 AddItem(){
   this.myItems.push(
     this.newItem
   );
   this.newItem = {};
 }

 EditItems(i){
   this.newItem.Value = this.myItems[i].Value;
   this.updatedItem = i;
   this.IsForUpdate = true;
 }
  UpdateItem(){
    let data = this.updatedItem;
    for ( let i = 0; i < this.myItems.length; i++){
      if (i == data){ this.myItems[i].Value = this.newItem.Value;}
    }
    this.IsForUpdate = false;
    this.newItem = {};
  }
  DeleteItem(i){
    this.myItems.splice(i,1);
  }
}
