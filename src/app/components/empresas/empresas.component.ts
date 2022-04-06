import { Component, OnInit } from '@angular/core';
import { Empresas } from 'src/app/models/empresas.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { EmpresasService } from 'src/app/services/empresas.service';


@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
  providers: [EmpresasService, UsuarioService ]
})

export class EmpresasComponent implements OnInit {
  public token;

  //EMPRESAS
  public empresasModelGet: Empresas ;
  public empresasModelPost:Empresas ;


  constructor(private _empresasService: EmpresasService) {
    this.empresasModelPost = new Empresas('','','','','')
  }

  ngOnInit(): void {
    this.getEmpresas();

  }

  getEmpresas (){
    this._empresasService.ObtenerUsuarios ().subscribe(
       (response) => {
         this.empresasModelGet = response.Empresas;
         console.log(response.Empresas);

       },
       (error)=>{
         console.log(<any>error)
       }
    )}


  postEmpresas (){
     this._empresasService.RegistrarEmpresas(this.empresasModelPost).subscribe(
         (response)=>{
            console.log(response);
            this.getEmpresas()
         },
         (error)=>{
            console.log(<any>error);
         }
     )}

}
