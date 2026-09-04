import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-site-alex',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './site-alex.component.html',
  styleUrl: './site-alex.component.css'
})
export class SiteAlexComponent {

  // =========================================================
  // MENU MOBILE
  // =========================================================

  menuAberto = false;


  // =========================================================
  // FORMULÁRIO
  // =========================================================

  enviando = false;

  mensagemStatus = '';

  envioSucesso = false;


  // =========================================================
  // ANO ATUAL
  // =========================================================

  currentYear = new Date().getFullYear();


  // =========================================================
  // EMAILJS
  // =========================================================
  //
  // Ainda vamos configurar esses valores.
  //

  private readonly emailJsServiceId = 'SEU_SERVICE_ID';

  private readonly emailJsTemplateId = 'SEU_TEMPLATE_ID';

  private readonly emailJsPublicKey = 'SUA_PUBLIC_KEY';


  // =========================================================
  // MENU MOBILE
  // =========================================================

  abrirMenu(): void {
    this.menuAberto = true;
  }


  fecharMenu(): void {
    this.menuAberto = false;
  }


  // =========================================================
  // ENVIO DO FORMULÁRIO
  // =========================================================

  enviarFormulario(form: NgForm): void {

    if (this.enviando) {
      return;
    }

    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.enviando = true;
    this.mensagemStatus = '';
    this.envioSucesso = false;

    const formElement = form.form as unknown as HTMLFormElement;

    emailjs.sendForm(
      this.emailJsServiceId,
      this.emailJsTemplateId,
      formElement,
      {
        publicKey: this.emailJsPublicKey
      }
    )
      .then(() => {

        this.enviando = false;

        this.envioSucesso = true;

        this.mensagemStatus =
          'Mensagem enviada com sucesso! Em breve entrarei em contato.';

        form.resetForm();

      })
      .catch((error) => {

        console.error(
          'Erro ao enviar formulário:',
          error
        );

        this.enviando = false;

        this.envioSucesso = false;

        this.mensagemStatus =
          'Não foi possível enviar a mensagem. Tente novamente mais tarde.';

      });
  }

}
