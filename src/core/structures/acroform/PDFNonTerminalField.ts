import { PDFArray, PDFDict, PDFName } from 'src/index';
import { PDFAcroField } from './internal';

class PDFNonTerminalField extends PDFAcroField {
  static fromDict(dict: PDFDict): PDFAcroField {
    return new PDFNonTerminalField(dict);
  }

  readonly dict!: PDFDict;

  protected constructor(dict: PDFDict) {
    super(dict);
  }

  Kids(): PDFArray {
    return this.dict.lookup(PDFName.of('Kids'), PDFArray);
  }
}

export default PDFNonTerminalField;