
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from '../principal/principal.component';
import { LoginComponent } from '../login/login.component';
import { AdmHomeComponent } from '../adm-home/adm-home.component';
import { FormsModule }   from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ProdutosTelaComponentTelaComponent } from '../tela/produtos-tela-tela/produtos-tela-tela.component';
import { PedidoTelaComponentTelaComponent } from '../tela/pedido-tela-tela/pedido-tela-tela.component';


const principalRotas: Routes = [
  { path : '' , component: LoginComponent  },
  { 
    path : 'home' , component: PrincipalComponent, 
    children : [
      	{path:'', component: AdmHomeComponent},
		{path:'produtos' , component: ProdutosTelaComponentTelaComponent },
		{path:'pedido' , component: PedidoTelaComponentTelaComponent },
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
		ProdutosTelaComponentTelaComponent,
		PedidoTelaComponentTelaComponent,
	],
	declarations: [
		LoginComponent,
		PrincipalComponent,
		AdmHomeComponent,
		SidebarComponent,
		ProdutosTelaComponentTelaComponent,
		PedidoTelaComponentTelaComponent,
	]
})
export class PrincipalRoutingModule { }
