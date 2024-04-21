import { Password } from './password';

describe('Password', () => {
  it('should create an instance', () => {
    const password = new Password(1, 'work', 'outlook', 'testuser@mytest.com', 'TXlQYXNzd29yZEAxMjM=');
    expect(password).toBeTruthy();
  });

  it('should have correct properties', () => {
    const password = new Password(2, 'work', 'outlook', 'testuser@mytest.com', 'TXlQYXNzd29yZEAxMjM=');
    expect(password.category).toBe('work');
    expect(password.app).toBe('outlook');
    expect(password.userName).toBe('testuser@mytest.com');
    expect(password.encryptedPassword).toBe('TXlQYXNzd29yZEAxMjM=');
  });
});
