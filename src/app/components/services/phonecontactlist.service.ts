import { Injectable } from '@angular/core';
import { Contact } from '../interface/phonecontactlist';

@Injectable({
  providedIn: 'root'
})
export class PhonecontactlistService {
  private contactList: Contact[] = [];

  getContacts(): Contact[] {
    return this.contactList;
  }

  addContact(contact: Contact): void {
    this.contactList.push(contact);
  }

  removeContact(id: number): void {
    this.contactList = this.contactList.filter(contact => contact.id !== id);
  }
}
