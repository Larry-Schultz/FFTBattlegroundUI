import { Music } from './music';

export interface MusicPayload {
    musicData: Music[];
    firstOccurence: number;
}
