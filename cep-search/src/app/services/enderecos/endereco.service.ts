import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Endereco } from "src/app/interfaces/enderecos.interface";
@Injectable({
  providedIn: "root",
})
export class EnderecoService {
  private viaCepUrl = "https://viacep.com.br/ws";
  private backendUrl = "http://localhost:3000/enderecos";

  constructor(private http: HttpClient) {}

  buscarCep(cep: string): Observable<Endereco> {
    return this.http.get<Endereco>(`${this.viaCepUrl}/${cep}/json/`);
  }

  salvarEndereco(endereco: Endereco): Observable<Endereco> {
    return this.http.post<Endereco>(this.backendUrl, endereco);
  }

  listarEnderecos(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.backendUrl);
  }

  deletarEndereco(id: number): Observable<any> {
    return this.http.delete(`${this.backendUrl}/${id}`);
  }
}
