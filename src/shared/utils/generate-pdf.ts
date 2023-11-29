
import * as pdf from 'html-pdf';

export function generatePdf(data: any) {
  
  
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Orçamento</title>
    <style>
      * {
        margin: 110;
        padding: 110;
        box-sizing: border-box;
      }
      .container {
        width: 100%;
        height: 100vh;
        background-color: #f5f5f5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <h1>Olá, ${'AQUIIII'}</h1>
      <h2>Seu orçamento foi criado com sucesso!</h2>
      <h3>Segue em anexo o arquivo em PDF.</h3>
    </div>

  </body>

  </html>
  `;

  pdf.create(html).toFile(`./src/shared/files/budgets/${'data.budget_nameEEEEE'}.pdf`, function (err, res) {
    if (err) return console.log(err);
    console.log(res);
  });

  return true;



}

