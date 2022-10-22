
export interface Report {
    details: string;
    officeId: string;
    atmId: string;
    photoUrl: string;
    status: 'send' | 'open' | 'in progress' | 'complete'
}