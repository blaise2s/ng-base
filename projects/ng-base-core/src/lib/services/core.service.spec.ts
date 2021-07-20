import { CoreService } from './core.service';

describe('CoreService', () => {
  let service: CoreService;

  beforeEach(() => {
    service = new CoreService();
    spyOn(console, 'log');
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should say hello', () => {
    service.sayHello('world');
    expect(console.log).toHaveBeenCalledTimes(1);
  });
});
