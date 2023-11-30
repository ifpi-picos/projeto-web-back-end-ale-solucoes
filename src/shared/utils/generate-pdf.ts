
import * as pdf from 'html-pdf';

export function generatePdf(data: any) {
  
  
  const html = `
  <!DOCTYPE html>
  <html lang="pt-br">
  <head>
    <title>Orçamento</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
  
  <table>
    <thead>
      <tr>
        <th colspan="2">
          <img src="logo.png" alt="Logo da empresa">
        </th>
        <th colspan="3">
          <h1>Orçamento</h1>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data</td>
        <td>2023-11-29</td>
        <td>Número do orçamento</td>
        <td>123456</td>
      </tr>
      <tr>
        <td>Cliente</td>
        <td>Fulano de Tal</td>
        <td>Documento</td>
        <td>123.456.789-00</td>
      </tr>
      <tr>
        <td>Forma de pagamento</td>
        <td>Dinheiro</td>
        <td>Condições de pagamento</td>
        <td>À vista</td>
      </tr>
      <tr>
        <th>Quantidade</th>
        <th>Nome do produto</th>
        <th>Unidade de medida</th>
        <th>Valor unitário</th>
        <th>Valor total</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Caneta</td>
        <td>Unidade</td>
        <td>R$ 5,00</td>
        <td>R$ 5,00</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Lápis</td>
        <td>Unidade</td>
        <td>R$ 3,00</td>
        <td>R$ 6,00</td>
      </tr>
      <tr>
        <td colspan="4">Valor total</td>
        <td>R$ 11,00</td>
      </tr>
      <tr>
        <td colspan="4">Desconto</td>
        <td>R$ 2,00</td>
      </tr>
      <tr>
        <td colspan="4">Valor do orçamento</td>
        <td>R$ 9,00</td>
      </tr>
    </tbody>
  </table>
  </body>
  </html>
  `;

  pdf.create(html).toFile(`./src/shared/files/budgets/${'data.budget_nameEEEEE'}.pdf`, function (err, res) {
    if (err) return console.log(err);
    console.log(res);
  });

  return true;



}

