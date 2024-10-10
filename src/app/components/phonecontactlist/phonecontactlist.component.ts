import { Component } from '@angular/core';
import { PhonecontactlistService } from '../services/phonecontactlist.service';
import { Contact } from '../interface/phonecontactlist';

@Component({
  selector: 'app-phonecontactlist',
  templateUrl: './phonecontactlist.component.html',
  styleUrls: ['./phonecontactlist.component.css']
})
export class PhonecontactlistComponent {
  name: string = '';
  phone: string = '';
  contactList: Contact[] = [];
  nextId: number = 1;

  constructor(private contactService: PhonecontactlistService) {
    this.contactList = this.contactService.getContacts();
  }

  addContact() {
    if (this.name.trim() && this.phone.trim()) {
      const newContact: Contact = { id: this.nextId++, name: this.name.trim(), phone: this.phone.trim() };
      this.contactService.addContact(newContact);
      this.updateContactList();
      this.name = '';
      this.phone = '';
    }
  }

  removeContact(id: number) {
    this.contactService.removeContact(id);
    this.updateContactList();
  }

  private updateContactList() {
    this.contactList = this.contactService.getContacts();
  }
}
