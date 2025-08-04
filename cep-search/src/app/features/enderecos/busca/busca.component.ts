import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-busca",
  templateUrl: "./busca.component.html",
  styleUrls: ["./busca.component.scss"],
})
export class BuscaComponent {
  @Output() buscarCEP = new EventEmitter<string>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      cep: ["", [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
    });
  }

  formatarCEP(event: any) {
    let value: string = event.target.value;

    value = value.replace(/\D/g, "");

    if (value.length > 8) {
      value = value.substring(0, 8);
    }

    if (value.length > 5) {
      value = value.substring(0, 5) + "-" + value.substring(5);
    }
    const formCEP = this.form.get("cep");
    console.log(formCEP);
    if (formCEP) formCEP.setValue(value);
  }

  onSubmit() {
    if (this.form.valid) {
      const cepSemHifen = this.form.value.cep.replace("-", "");
      this.buscarCEP.emit(cepSemHifen);
    }
  }
}
