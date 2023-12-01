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
        { text: 'This is a header', style: 'header' },
        'No styling here, this is a standard paragraph',
        { text: 'Another text', style: 'anotherStyle' },
        { text: 'Multiple styles applied', style: ['header', 'anotherStyle'] }
      ],

    }

    const pdfDoc = printer.createPdfKitDocument(
      docDefinition
    );
    const chunks: any[] = [];

    pdfDoc.on('data', (chunk) => {
      chunks.push(chunk);
    });
    
    pdfDoc.end();
    // pdfDoc.on('end', () => {
    //   const result = Buffer.concat(chunks).toString('base64');
    //   console.log(result)
    // }
    // );
    const base64 = await new Promise((resolve, reject) => {
      pdfDoc.on('end', () => {
        const result = Buffer.concat(chunks).toString('base64');
        resolve(result);
      });
      pdfDoc.on('error', (err) => {
        reject(err);
      });
    });

    // pdfDoc.pipe(fs.createWriteStream('document.pdf'));

    // const test= await generatePdf(budget);
    // const budgetCreated = await this.budgetsRepository.create(
    //   budget
    // );
    return base64;
  }

}