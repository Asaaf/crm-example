import { Component } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent {
  newUser: User = new User();

  constructor(private authService: AuthService) {
  }

  send() {
    this.authService.registryUser(this.newUser).subscribe(
      (next)=>{
        alert(next);
      }
    );
  }

}
