export enum UserRole {
	USER = 'USER',
	ADMIN = 'ADMIN',
}

export type ReqUser = {
	id: string;
	email: string;
	name: string;
	role: UserRole;
	emailVerified: boolean;
};
