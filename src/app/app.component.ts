import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';

import { FormsModule } from '@angular/forms';
import { ClienteService } from './servico/cliente.service';

@Component({
  selector: 'app-root',
  standalone: true,
  // Importante para injetar o serviço nesse 'modulo'
  providers: [ClienteService],
  imports: [CommonModule, RouterOutlet,FormsModule, HttpClientModule, PrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api-front';
}
