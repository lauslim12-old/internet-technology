export interface isiUKM {
    id: string;
    kode: string;
    nama: string;
    anggota: number;
    foto: string;
    deskripsi: string;
    created_at: string;
    updated_at: string;
}

export interface UKM {
    info: string;
    result: {
        count: number,
        ukm: isiUKM
    };
}

export interface DetailUKM {
    result: isiUKM;
}

export interface isiUKMFavorite {
    id: string;
    user_name: string;
    type: string;
    id_kode_nim_isbn_favorited: string;
    created_at: string;
    updated_at: string;
}

export interface UKMFavorite {
    info: string;
    result: isiUKMFavorite;
}

export interface UKMDelete {
    type: string;
    id_kode_nim_isbn_favorited: string;
    token: string;
}

export interface UKMUpdate {
    nama: string;
    anggota: string;
    foto: string;
    deskripsi: string;
    jam_mulai: string;
    jam_selesai: string;
}

export interface UKMTambah {
    kode: string;
    nama: string;
    anggota: string;
    foto: string;
    deskripsi: string;
    jam_mulai: string;
    jam_selesai: string;
    token: string;
}