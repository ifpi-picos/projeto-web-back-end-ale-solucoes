import { TBudget } from "../../../shared/repositories/implements/budgets.types";
import { BudgetsRepository } from "../../../shared/repositories/budgets.repository";
import fs from "fs";
import PdfPrinter from "pdfmake";
import { TDocumentDefinitions } from "pdfmake/interfaces";

export class CreateBudgetService {
  constructor(private readonly budgetsRepository: BudgetsRepository) { }

  public async perform(budget: TBudget) {
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
      content: [
        { text: 'Orçamento', style: 'header' },
        { text: `Nº do Orçamento: ${123}` },
        { text: `Cliente: ${123}` },
        {
          text: `Data: <span class="math-inline">\{new Date\(\)\.toLocaleDateString\(\)\}\` \},
\{ text\: \`\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\` \},
\{ text\: \`Produto\`, style\: 'header' \},
\{ text\: \`Quantidade\`, style\: 'header' \},
\{ text\: \`Valor Unitário\`, style\: 'header' \},
\{ text\: \`Valor Total\`, style\: 'header' \},
\{ text\: \`\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\` \},
\.\.\.budget\.products\.map\(\(product\) \=\> \(\{
text\: product\.name,
\}\)\),
\.\.\.budget\.products\.map\(\(product\) \=\> \(\{
text\: product\.quantity\.toString\(\),
\}\)\),
\.\.\.budget\.products\.map\(\(product\) \=\> \(\{
text\: product\.price\.toString\(\),
alignment\: 'right'
\}\)\),
\.\.\.budget\.products\.map\(\(product\) \=\> \(\{
text\: \(product\.quantity \* product\.price\)\.toFixed\(2\),
alignment\: 'right'
\}\)\),
\{ text\: \`\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\` \},
\{ text\: \`Subtotal\: R</span> <span class="math-inline">\{budget\.products\.reduce\(\(sum, product\) \=\> sum \+ product\.price \* product\.quantity, 0\)\.toFixed\(2\)\}\`, style\: 'subheader' \},
\{ text\: \`Desconto\: R</span> <span class="math-inline">\{budget\.discount\.toFixed\(2\)\}\`, style\: 'subheader' \},
\{ text\: \`Total\: R</span> ${123}`, style: 'header'
        },

        { text: `---------------------------------------------------------------------------------------` },

        { text: `Assinatura do Cliente`, style: 'left' },
        { text: `Assinatura da Empresa`, style: 'right'},

        { text: `Orçamento gerado por orçamento.com.br`, style: 'right' },
      ],
      styles: {
        header: {
          fontSize: 14,
          bold: true
        },
        subheader: {
          fontSize: 12
        },
        left: {
          alignment: 'left'       
        },
        right: {
          alignment: 'right'       
        },
  }
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

pdfDoc.pipe(fs.createWriteStream('document.pdf', { encoding: 'base64' }));

// const test= await generatePdf(budget);
// const budgetCreated = await this.budgetsRepository.create(
//   budget
// );
return base64;
  }

}