import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { myService } from '../myservice.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
user:any ;
users:any = [];
  constructor(private route: ActivatedRoute,public myservice: myService) {

   }

  ngOnInit() {

    this.route.params.subscribe( params => {
      let id = params.id;
      console.log(id);
      this.myservice.getUsers().subscribe(users=>{
        console.log(users);
        this.users = users;
        for(var i = 0;i<this.users.length;i++){
          if(users[i]._id == id){
            
            this.user=users[i];
            
          }
        }
      })
    
    } );

    
  }

}
