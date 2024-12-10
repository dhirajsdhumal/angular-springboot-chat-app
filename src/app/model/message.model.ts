import { User } from "./user.mdel";

export interface Message {
    id: number;
  content: string;
  sender: {
    id: number;
    name: string;
  };
  receiver: {
    id: number;
    name: string;
  };
  isRead: boolean;
  timestamp: string;
  }
  