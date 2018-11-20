
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from '../principal/principal.component';
import { LoginComponent } from '../login/login.component';
import { AdmHomeComponent } from '../adm-home/adm-home.component';
import { FormsModule }   from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ProdutosTelaComponent } from '../tela/produtos-tela/produtos-tela.component';
import { PedidoTelaComponent } from '../tela/pedido-tela/pedido-tela.component';


const principalRotas: Routes = [
  { path : '' , component: LoginComponent  },
  { 
    path : 'home' , component: PrincipalComponent, 
    children : [
      	{path:'', component: AdmHomeComponent},
		{path:'produtos' , component: ProdutosTelaComponent },
		{path:'pedido' , component: PedidoTelaComponent },
    ]
  }
]


@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(principalRotas),
		FormsModule
	],
	exports: [
		RouterModule,
		ProdutosTelaComponent,
		PedidoTelaComponent,
	],
	declarations: [
		LoginComponent,
		PrincipalComponent,
		AdmHomeComponent,
		SidebarComponent,
		ProdutosTelaComponent,
		PedidoTelaComponent,
	]
})
export class PrincipalRoutingModule { }
