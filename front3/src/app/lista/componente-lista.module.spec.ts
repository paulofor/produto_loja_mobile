
import { ComponenteListaModule } from './componente-lista.module';

describe('ComponenteListaModule', () => {
  let componenteListaModule: ComponenteListaModule;

  beforeEach(() => {
    componenteListaModule = new ComponenteListaModule();
  });

  it('should create an instance', () => {
    expect(componenteListaModule).toBeTruthy();
  });
});

