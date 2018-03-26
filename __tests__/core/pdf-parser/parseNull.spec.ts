import { PDFNull } from 'core/pdf-objects';
import parseNull from 'core/pdf-parser/parseNull';
import { charCodes, typedArrayFor } from 'utils';

describe(`parseNull`, () => {
  it(`parses a single PDF Null object from its input array`, () => {
    const input = typedArrayFor('nullnull(foo)');
    const res = parseNull(input);
    expect(res).toEqual([PDFNull.instance, typedArrayFor('null(foo)')]);
  });

  it(`returns null when the leading input is not a PDF Null`, () => {
    const input = typedArrayFor('(foo)null');
    const res = parseNull(input);
    expect(res).toBeNull();
  });

  it(`invokes the "onParseNull" parseHandler with the parsed PDFNull object`, () => {
    const parseHandlers = {
      onParseNull: jest.fn(),
    };
    const input = typedArrayFor('null');
    const res = parseNull(input, parseHandlers);
    expect(parseHandlers.onParseNull).toHaveBeenCalledWith(PDFNull.instance);
  });
});