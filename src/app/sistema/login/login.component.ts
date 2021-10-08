import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id='';
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
  }
  constructor(private router: Router, private route: ActivatedRoute){
    
  }
  goToRuta2(id: number){
    this.router.navigate(['/panelprincipal', id,]);
  }

}
