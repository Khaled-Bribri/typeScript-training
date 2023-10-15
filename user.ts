import { Address } from './address';
import { Photo } from './quest-ts-to-java/quest-ts-to-java/photo';

export class User {
    birthdate: Date;
    size: number;
    photos: Photo[];
    address: Address; 
}