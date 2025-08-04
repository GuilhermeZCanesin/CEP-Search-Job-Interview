import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Endereco } from "src/app/interfaces/enderecos.interface";
import { EnderecoService } from "src/app/services/enderecos/endereco.service";

@Component({
  selector: "app-enderecos",
  templateUrl: "./enderecos.component.html",
  styleUrls: ["./enderecos.component.scss"],
})
export class EnderecosComponent implements OnInit {
  enderecos: Endereco[] = [];
  constructor(
    private enderecosService: EnderecoService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.enderecosService.listarEnderecos().subscribe((enderecos) => {
      this.enderecos = enderecos;
    });
  }

  buscarCEP(cep: string) {
    this.enderecosService.buscarCep(cep).subscribe((endereco) => {
      this.enderecosService.salvarEndereco(endereco).subscribe(
        (savedEndereco) => {
          this.enderecos = [...this.enderecos, savedEndereco];
          this.snackBar.open("Busca salvo com sucesso!", "", {
            duration: 2000,
          });
        },
        (error) => {
          this.snackBar.open("Erro ao buscar/salvar busca!", "", {
            duration: 2000,
          });
        }
      );
    });
  }

  deletarEndereco(id: string) {
    this.enderecosService.deletarEndereco(Number(id)).subscribe(
      () => {
        this.snackBar.open("Busca removida com sucesso!", "", {
          duration: 2000,
        });
        this.enderecos = this.enderecos.filter(
          (endereco) => endereco.id !== id
        );
      },
      (error) => {
        this.snackBar.open("Erro ao remover busca!", "", {
          duration: 2000,
        });
      }
    );
  }
}
