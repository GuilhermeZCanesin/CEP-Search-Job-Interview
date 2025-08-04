import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EnderecosRoutingModule } from "./enderecos-routing.module";
import { EnderecosComponent } from "./enderecos.component";
import { BuscaComponent } from "./busca/busca.component";
import { ListaComponent } from "./lista/lista.component";
import { MaterialModule } from "src/app/shared/material/material.module";

@NgModule({
  imports: [CommonModule, EnderecosRoutingModule, MaterialModule],
  declarations: [EnderecosComponent, BuscaComponent, ListaComponent],
})
export class EnderecosModule {}
