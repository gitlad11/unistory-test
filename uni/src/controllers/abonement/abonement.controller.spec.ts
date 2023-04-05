import { Test, TestingModule } from '@nestjs/testing';
import { AbonementController } from './abonement.controller';

describe('AbonementController', () => {
  let controller: AbonementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbonementController],
    }).compile();

    controller = module.get<AbonementController>(AbonementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
