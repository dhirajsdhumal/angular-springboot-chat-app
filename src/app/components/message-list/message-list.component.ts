import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.mdel';
import { Message } from 'src/app/model/message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  users: any[] = []; // List of users in the inbox
  messages: any[] = []; // Messages between current user and selected user
  selectedUser: any = null; // Currently selected user for conversation
  newMessage: string = ''; // New message object
  currentUserId: number = 1; // Replace with the logged-in user's ID
  activeUser: any = null; // Selected user's data
 
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  // Load all users for the inbox
  loadUsers() {
    this.apiService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  // Select a user and load their messages
  selectUser(user: any): void {
    this.activeUser = user;  // Set active user
    console.log(this.activeUser); // Check that the activeUser is being set correctly
    this.apiService.getMessages(user.id).subscribe((response: any) => {
      this.messages = response; // Load the messages for this user
    });
  }

  // Load messages for the selected user
  loadMessages(userId: number) {
    this.apiService.getMessages(userId).subscribe((messages) => {
      this.messages = messages;
    });
  }

  // Send a new message
  sendMessage(): void {
    if (this.newMessage.trim() === '') return;

    const newMessage = {
      content: this.newMessage,
      senderId: this.currentUserId,
      receiverId: this.activeUser.id,
    };

    this.apiService.sendMessage(newMessage).subscribe((message) => {
      this.messages.push(message); // Add the new message to the list
      this.newMessage = ''; // Clear the input box
    });
  }
}