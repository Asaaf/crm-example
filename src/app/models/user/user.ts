export class User {
    private _id?: number;
    private _firstname?: string;
    private _lastname?: string;
    private _email?: string;
    private _password?: string;

    constructor(_id?: number, _firstname?: string, _lastname?: string, _email?: string, _password?: string) {
        this._id = _id;
        this._firstname = _firstname;
        this._lastname = _lastname;
        this._email = _email;
        this._password = _password;
    }

    set id(_id: number | undefined) {
        this._id = _id;
    }

    get id(): number | undefined {
        return this._id;
    }

    set firstname(_firstname: string | undefined) {
        this._firstname = _firstname;
    }

    get firstname(): string | undefined {
        return this._firstname;
    }

    set lastname(_lastname: string | undefined) {
        this._lastname = _lastname;
    }

    get lastname(): string | undefined {
        return this._lastname;
    }

    set email(_email: string | undefined) {
        this._email = _email;
    }

    get email(): string | undefined {
        return this._email;
    }

    set password(_password: string | undefined) {
        this._password = _password;
    }

    get password(): string | undefined {
        return this._password;
    }
}
