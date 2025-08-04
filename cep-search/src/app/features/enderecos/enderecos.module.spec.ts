import { EnderecosModule } from './enderecos.module';

describe('EnderecosModule', () => {
  let buscarEnderecosModule: EnderecosModule;

  beforeEach(() => {
    buscarEnderecosModule = new EnderecosModule();
  });

  it('should create an instance', () => {
    expect(buscarEnderecosModule).toBeTruthy();
  });
});
