import { Music } from './music';

export interface MusicPayload {
    musicData: Music[];
    firstOccurence: number;
    totalOccurences: number;
    songWithOccurencesCount: number;
}