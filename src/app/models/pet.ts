export interface Pet {
    id: number;
    name: string;
    birthDate: string;
    weight: number;
    breed: string;
    color: string;
    vaccines: Vaccine[];
}

export interface Vaccine {
    id: number;
    name: string;
    date: string;
}