


import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../services/staff.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-movies-staff',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-movies-staff.component.html',
  styleUrl: './admin-movies-staff.component.css'
})
export class AdminMoviesStaffComponent implements OnInit {
  staffList: any[] = [];
  newStaff = { name: '', role: '' };
  editStaffId: string | null = null;
  editStaff = { name: '', role: '' };
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private staffService: StaffService) {}

  ngOnInit(): void {
    this.loadStaff();
  }

  loadStaff(): void {
    this.staffService.getStaff().subscribe(
      (data) => (this.staffList = data),
      (error) => (this.errorMessage = 'Failed to load staff.')
    );
  }

  addStaff(): void {
    if (!this.newStaff.name.trim()) return;

    this.staffService.addStaff(this.newStaff).subscribe(
      (data) => {
        this.successMessage = 'Staff added successfully!';
        this.staffList.push(data);
        this.newStaff = { name: '', role: '' };
      },
      (error) => (this.errorMessage = 'Failed to add staff.')
    );
  }

  editStaffDetails(staff: any): void {
    this.editStaffId = staff._id;
    this.editStaff = { ...staff };
  }

  saveStaff(): void {
    if (!this.editStaff.name.trim() || !this.editStaffId) return;

    this.staffService.updateStaff(this.editStaffId, this.editStaff).subscribe(
      (data) => {
        this.successMessage = 'Staff updated successfully!';
        this.staffList = this.staffList.map((staff) =>
          staff._id === data._id ? data : staff
        );
        this.editStaffId = null;
        this.editStaff = { name: '', role: '' };
      },
      (error) => (this.errorMessage = 'Failed to update staff.')
    );
  }

  deleteStaff(id: string): void {
    if (!confirm('Are you sure you want to delete this staff member?')) return;

    this.staffService.deleteStaff(id).subscribe(
      () => {
        this.successMessage = 'Staff deleted successfully!';
        this.staffList = this.staffList.filter((staff) => staff._id !== id);
      },
      (error) => (this.errorMessage = 'Failed to delete staff.')
    );
  }
}
