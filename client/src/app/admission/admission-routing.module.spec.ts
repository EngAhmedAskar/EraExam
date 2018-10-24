import { AdmissionRoutingModule } from './admission-routing.module';

describe('AdmissionRoutingModule', () => {
  let admissionRoutingModule: AdmissionRoutingModule;

  beforeEach(() => {
    admissionRoutingModule = new AdmissionRoutingModule();
  });

  it('should create an instance', () => {
    expect(admissionRoutingModule).toBeTruthy();
  });
});
