import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assiapp';
  data = {
  }
  moDate;
 constructor(){
  this.data = {
    name: "Bluetooth Speakers",
    title: "JBL Go Portable Wireless Bluetooth Speaker with Mic (Black)",
    sourceCategory: "Bluetooth Speakers",
    product_id: "ABCD1234",
    createdAt: new Date("2018-08-31T09:36:08.448Z"),
    reviewCount: "3013",
  }

 }

 ngOnInit(){






 }
 click = ()=>{
  console.log("clicked")
}
}
