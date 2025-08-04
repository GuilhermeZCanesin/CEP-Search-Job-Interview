import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { Endereco } from "src/app/interfaces/enderecos.interface";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.scss"],
})
export class ListaComponent implements AfterViewInit {
  @Input() enderecos: Endereco[] = [];
  @Output() deletarEndereco = new EventEmitter<string>();
  displayedColumns: string[] = ["cep", "logradouro", "date", "acoes"];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {}

  ngOnChanges() {
    this.dataSource.data = this.enderecos;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deletar(id: string) {
    this.deletarEndereco.emit(id);
  }

  getColumnLabel(column: string): string {
    const labels: Record<string, string> = {
      cep: "CEP",
      logradouro: "Endereço",
      date: "Data",
      acoes: "",
    };
    return labels[column];
  }
}
