import { Component } from '@angular/core';

@Component({
  selector: 'app-phonecontactlist',
  templateUrl: './phonecontactlist.component.html',
  styleUrl: './phonecontactlist.component.css'
})
export class PhonecontactlistComponent {
  name: string = '';
  phone: string = '';
  contactList: { name: string; phone: string }[] = [
    { name: 'Alice', phone: '123-456-7890' },
    { name: 'Bob', phone: '987-654-3210' }
  ];

  addContact() {
    if (this.name.trim() && this.phone.trim()) {
      this.contactList.push({ name: this.name.trim(), phone: this.phone.trim() });
      this.name = '';
      this.phone = '';
    }
  }

}
