import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent {
  newUser: User;              //Definimos una nueva variable llamada newUser y le asignamos el tipo de dato User
  registryForm: FormGroup;    //Definimos una nueva variable llamada registryForm y le asignamos como tipo de dato FormGroup

  constructor(private authService: AuthService, formBuilder: FormBuilder) { //Definimos una nueva variable privada llamada authService y otra llamada formBuilder, ambas con tipo de dato AuthService y FormBuilder respectivamente
    this.newUser = new User();  //Inicializamos la variable newUser con un nuevo Usuario()

    //Inicializamos el formulario reactivo el cual incluye validaciones asociadas a los datos del modelo usuario
    this.registryForm = formBuilder.group({
      firstname: new FormControl(this.newUser.firstname, [Validators.required]),
      lastname: new FormControl(this.newUser.lastname, [Validators.required]),
      email: new FormControl(this.newUser.email, [Validators.required, Validators.email]),
      password: new FormControl(this.newUser.password, [Validators.required])
    });
  }

  send() {
    if (this.registryForm.valid) {//Verificamos que los datos del formulario son válidos
      this.authService.registryUser(this.newUser).subscribe(
        {
          next: (resp: any) => {
            this.newUser = new User();
          },
          error: (err: Error) => {
            console.log(err);
          }
        }
      );
    }
  }

}
