import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetalleVentaComponent } from './list-detalle-venta.component';

describe('ListDetalleVentaComponent', () => {
  let component: ListDetalleVentaComponent;
  let fixture: ComponentFixture<ListDetalleVentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDetalleVentaComponent]
    });
    fixture = TestBed.createComponent(ListDetalleVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
