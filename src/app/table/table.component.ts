import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
users:any;

constructor(private userservice:UsersService,private httpclient:HttpClient){}
  ngOnInit(): void {
    this.userservice.getallusers().subscribe(res =>{
      this.users=res;
      console.warn(this.users);
      
    
    })
 
}
}
