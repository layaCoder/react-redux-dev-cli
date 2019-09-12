export class User {
    login: boolean;
    _id: string;
    name: string;
    avatarUrl: string;
    constructor(_id?: string, login?: boolean, name?: string, avatarUrl?: string) {
        this._id = _id || '';
        this.login = login || false;
        this.name = name || '';
        this.avatarUrl = avatarUrl || '';
    }
}