
import { ComponenteTelaModule } from './componente-tela.module';

describe('ComponenteTelaModule', () => {
  let componenteTelaModule: ComponenteTelaModule;

  beforeEach(() => {
    componenteTelaModule = new ComponenteTelaModule();
  });

  it('should create an instance', () => {
    expect(componenteTelaModule).toBeTruthy();
  });
});

