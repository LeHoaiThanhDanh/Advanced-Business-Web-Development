import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../catalogservice';

@Component({
  selector: 'app-ex14catelog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Exercise14.html',
  styleUrls: ['./Exercise14.css']
})
export class Ex14catelog implements OnInit {
  categories: any[] = [];

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.categories = this.catalogService.getCategories();
  }
}