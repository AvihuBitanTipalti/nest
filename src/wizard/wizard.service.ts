import { Injectable } from '@nestjs/common';

@Injectable()
export class WizardService {
  getGreeting(): string {
    return 'Hello Wizards 🧙';
  }
  getProtected(): string {
    return 'Welcome to the protected wizard area!';
  }
  getError(): Error {
    throw new Error('This is a simulated error for testing the error handler.');
  }
}
