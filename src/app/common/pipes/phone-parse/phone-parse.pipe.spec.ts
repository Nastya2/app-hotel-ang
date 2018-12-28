import { PhoneParsePipe } from './phone-parse.pipe';

describe('PhoneParsePipe', () => {
  it('create an instance', () => {
    const pipe = new PhoneParsePipe();
    expect(pipe).toBeTruthy();
  });
});
