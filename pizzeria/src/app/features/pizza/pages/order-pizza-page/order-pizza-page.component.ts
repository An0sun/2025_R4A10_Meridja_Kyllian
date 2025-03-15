import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderLocalService } from '../../../../services/order.service';
import { PizzaService } from '../../../../services/pizza.service';
import { Pizza } from '../../../../models/pizza';

@Component({
  selector: 'app-order-pizza-page',
  standalone: true,
  templateUrl: './order-pizza-page.component.html',
  styleUrl: './order-pizza-page.component.css',
  imports: [CommonModule, ReactiveFormsModule],
})
export class OrderPizzaPageComponent {
  orderForm: FormGroup;
  pizzas: Pizza[] = [];
  sizes = ['Medium', 'Large', 'XXL'];
  paymentMethods = ['Espèces', 'Carte Bleue', 'Bitcoin'];

  private fb = inject(FormBuilder);
  private pizzaService = inject(PizzaService);
  private orderService = inject(OrderLocalService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  constructor() {
    this.pizzas = this.pizzaService.getPizzas();

    this.orderForm = this.fb.group({
      pizza: ['', Validators.required],
      size: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.prefillPizzaSelection();
  }

  private prefillPizzaSelection(): void {
    const selectedPizzaSlug = this.route.snapshot.queryParamMap.get('pizza');
    if (selectedPizzaSlug) {
      const foundPizza = this.pizzas.find(p => p.slug === selectedPizzaSlug);
      if (foundPizza) {
        this.orderForm.patchValue({ pizza: foundPizza.name });
      }
    }
  }

  submitOrder(): void {
    if (this.orderForm.invalid) {
      return;
    }

    this.orderService.create(this.orderForm.value).subscribe(() => {
      this.router.navigate(['/commandes']); // Redirection après la commande
    });
  }
}
