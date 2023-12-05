import { TBudget } from "../../../shared/repositories/implements/budgets.types";
import { BudgetsRepository } from "../../../shared/repositories/budgets.repository";
import fs from "fs";
import PdfPrinter from "pdfmake";
import { TDocumentDefinitions } from "pdfmake/interfaces";

export class CreateBudgetService {
  constructor(private readonly budgetsRepository: BudgetsRepository) { }

  public async perform(budget: TBudget) {
    const body: any = [];
    for (let i = 0; i < budget.products.length; i++) {
  
      const value_total = budget.products[i].value * budget.products[i].quantity;

      body.push([budget.products[i].code, budget.products[i].product_name, budget.products[i].unit_of_measurement, budget.products[i].quantity, budget.products[i].value, value_total]);
      
    }
    const fonts = {
      Courier: {
        normal: 'Courier',
        bold: 'Courier-Bold',
        italics: 'Courier-Oblique',
        bolditalics: 'Courier-BoldOblique'
      },
      Helvetica: {
        normal: 'Helvetica',
        bold: 'Helvetica-Bold',
        italics: 'Helvetica-Oblique',
        bolditalics: 'Helvetica-BoldOblique'
      },
      Times: {
        normal: 'Times-Roman',
        bold: 'Times-Bold',
        italics: 'Times-Italic',
        bolditalics: 'Times-BoldItalic'
      },
      Symbol: {
        normal: 'Symbol'
      },
      ZapfDingbats: {
        normal: 'ZapfDingbats'
      }
    };
    const printer = new PdfPrinter(fonts);

    const docDefinition: TDocumentDefinitions = {
      defaultStyle: {
        font: 'Helvetica'
      },
      pageSize: 'A4',
      pageMargins: [20, 20, 20, 20],
      header: {
        columns: [
          {
            image: 'src/shared/files/logo.png',
            width: 150,
            height: 60,
            alignment: 'left',
            margin: [0, 0, 0, 0],
          },
          ],
      },
      content: [
        {
          columns: [
            {
              text: `Nome da Empresa: ${budget.company_name}\nCnpj: ${budget.company_document}\nEndereço: ${budget.company_street}, ${budget.company_number}, ${budget.company_neiborhood}, ${budget.company_city}, ${budget.company_state}, CEP ${budget.company_postal_code}`,
              alignment: 'left',
              marginTop: 75,
            },
            {
              text: `Nome da Cliente: ${budget.client_name}\nDocumento: ${budget.client_document}\nForma de Pagamento: ${budget.payment_method}`,
              alignment: 'right',
              marginTop: 75,
              marginBottom: 50,
            }
          ]
        },
        {
          style: {
            alignment: 'center',
          },
          table: {
            body: [[{text: 'Cod.', style:'columnsTitle'}, {text: 'Produto', style:'columnsTitle'}, {text: 'Unid. de Medida', style:'columnsTitle'}, {text: 'Quantidade', style:'columnsTitle'}, {text: 'Valor Unit.', style:'columnsTitle'}, {text: 'Valor Total', style:'columnsTitle'}], ...body],
          },
        },
        {
          'text': '\n\n\n',
        },
        {
          style: {
            alignment: 'right',
            marginTop: 15,
          },
          table: {
            body: [[{text: 'Subtotal', style: {fillColor: '#1475a2', color: '#fff'}}, `R$ ${budget.value_total.toFixed(2)}`], [{text: 'Desconto', style: {fillColor: '#1475a2', color: '#fff'}},`R$ ${(budget.value_total - budget.value_with_discount).toFixed(2)}`], [{text: 'Valor', style: {fillColor: '#1475a2', color: '#fff'}},`R$ ${budget.value_with_discount.toFixed(2)}`]],

          }
        }
        
      ],
      footer: {
        columns: [
          {
            text: 'Orçamento gerado por: orçametro.com.br',
            alignment: 'right',
            marginRight: 10,
          },
        ],
      },
      styles: {
        columnsTitle: {
          bold: true,
          alignment: 'center',
          fillColor: '#1475a2',
          color: '#fff',
        },
  },
};

const pdfDoc = printer.createPdfKitDocument(
  docDefinition
);
const chunks: any[] = [];

pdfDoc.on('data', (chunk) => {
  chunks.push(chunk);
});

pdfDoc.end();
pdfDoc.on('end', () => {
  const result = Buffer.concat(chunks);
  
}
);



const base64 = await new Promise((resolve, reject) => {
  pdfDoc.on('end', () => {
    const result = Buffer.concat(chunks).toString('base64');
    resolve(result);
  });
  pdfDoc.on('error', (err) => {
    reject(err);
  });
});

pdfDoc.pipe(fs.createWriteStream('document.pdf'));


const budgetCreated = await this.budgetsRepository.create(
  budget,
  base64 as string,
);


  return base64;
  }

}