export interface Registrasi {
    user_name:     string;
    telepon:       string;
    email:         string;
    nama_lengkap:  string;
    alamat:        string;
    tanggal_lahir: string;
    foto:          string;
    password:      string;
}

export interface Login {
    user_name:      string;
    password:       string;
    remember_me:    boolean;
}

export interface Data {
    aud:    string;
    exp:    number;
    iat:    number;
    iss:    string;
    user:   Registrasi;
}

export class UserData {
    info:       string;
    result:     Data;
}

export interface Update {
    nama_lengkap:  string;
    alamat:        string;
    tanggal_lahir: string;
    foto:          string;
    password:      string;
    token:         string;
}
