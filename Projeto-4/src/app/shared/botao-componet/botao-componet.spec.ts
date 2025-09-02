import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoComponet } from './botao-componet';

describe('BotaoComponet', () => {
  let component: BotaoComponet;
  let fixture: ComponentFixture<BotaoComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotaoComponet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoComponet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
