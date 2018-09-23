import { Component ,OnInit, ElementRef} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormControl,FormBuilder,FormGroup,Validators} from '@angular/forms';
import { myService } from '../myservice.service';
import { Router } from '@angular/router';


@Component({
  selector: ' app-login',
  templateUrl: './login.component.html',
styleUrls :['../app.component.css']
})
export class  LoginComponent  implements OnInit {
  toggleTrue :boolean = false;
  
myForm:FormGroup;
showStyle:false; 
users:any = [];
title:any = "";
description:any = "";
constructor(public myservice: myService,private fb :FormBuilder,private router :Router,public el :ElementRef){


}




  ngOnInit() {

      this.myservice.getUsers().subscribe(users=>{
           console.log(users);
           this.users= users
       })
     
    
    this.myForm = new FormGroup({
      name: new FormControl(''),
      password: new FormControl('')
     

    // });

    });


  }
   visible = false;
   toggle(event){
   


    this.visible = !this.visible;

  }
  getStyle(_id) {
    
    for(var i =0; i <this.users.length;i++){
  
      if(this.users[i]._id == _id){
        if(this.users[i].isFavourite==true){
          return 'yellow';
        }
        else{
          return 'black';
        }
      }
  }

}

updateModal(_id){

console.log(_id);

for(var i =0; i <this.users.length;i++){
  if(this.users[i]._id == _id){
    this.title = this.users[i].title;
    this.description = this.users[i].description;
  }
}
}
updateStyle(_id){
console.log(_id);
for(var i =0; i <this.users.length;i++){
  
  if(this.users[i]._id == _id){
    if(this.users[i].isFavourite == true){
      this.users[i].isFavourite = false;
    }
    else{
      this.users[i].isFavourite = true;
    }
    
  }

}
console.log(this.users);
}


  login(form: FormGroup){

    // this.myservice.getUsers().subscribe(users=>{
    //   console.log(users);
    //   this.users= users
    this.navigate();
    }
    navigate() {
      this.router.navigateByUrl('/dashboard');
    }
  }

