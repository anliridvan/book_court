export interface User {
    id: number;
    name: string;
    email: string;
    role: 'player' | 'admin';
    token?: string; // Optional, used for authentication
}