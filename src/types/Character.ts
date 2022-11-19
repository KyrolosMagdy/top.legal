export interface Record {
    id: number;
    name: string;
}

export interface Character extends Record {
    image: string;
    location: Record;
    origin: Record;
    status: string;
}