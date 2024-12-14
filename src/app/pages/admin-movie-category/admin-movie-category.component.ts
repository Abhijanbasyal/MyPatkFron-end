
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminMovieGenreComponent } from '../../components/admin-movie-genre/admin-movie-genre.component';

@Component({
  selector: 'app-admin-movie-category',
  standalone: true,
  imports: [CommonModule, FormsModule, AdminMovieGenreComponent],
  templateUrl: './admin-movie-category.component.html',
  styleUrl: './admin-movie-category.component.css'
})
export class AdminMovieCategoryComponent implements OnInit {
  categories: any[] = [];
  newCategoryName: string = '';
  editCategoryId: string | null = null;
  editCategoryName: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe(
      (data) => (this.categories = data),
      (error) => (this.errorMessage = 'Failed to load categories.')
    );
  }

  addCategory(): void {
    if (!this.newCategoryName.trim()) return;

    this.categoryService.addCategory({ name: this.newCategoryName }).subscribe(
      (data) => {
        this.successMessage = 'Category added successfully!';
        this.categories.push(data);
        this.newCategoryName = '';
      },
      (error) => (this.errorMessage = 'Failed to add category.')
    );
  }

  editCategory(category: any): void {
    this.editCategoryId = category._id;
    this.editCategoryName = category.name;
  }

  saveCategory(): void {
    if (!this.editCategoryName.trim() || !this.editCategoryId) return;

    this.categoryService.updateCategory(this.editCategoryId, { name: this.editCategoryName }).subscribe(
      (data) => {
        this.successMessage = 'Category updated successfully!';
        this.categories = this.categories.map((cat) =>
          cat._id === data._id ? data : cat
        );
        this.editCategoryId = null;
        this.editCategoryName = '';
      },
      (error) => (this.errorMessage = 'Failed to update category.')
    );
  }

  deleteCategory(id: string): void {
    if (!confirm('Are you sure you want to delete this category?')) return;

    this.categoryService.deleteCategory(id).subscribe(
      () => {
        this.successMessage = 'Category deleted successfully!';
        this.categories = this.categories.filter((cat) => cat._id !== id);
      },
      (error) => (this.errorMessage = 'Failed to delete category.')
    );
  }
}
