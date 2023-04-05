import { Test, TestingModule } from '@nestjs/testing';
import { AbonementService } from '../controllers/abonement/abonement.servicent.service';

describe('AbonementService', () => {
  let service: AbonementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbonementService],
    }).compile();

    service = module.get<AbonementService>(AbonementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
