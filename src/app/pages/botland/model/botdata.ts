import { BotParamData } from './botparamdata';

export interface BotData {
    name: string;
    classname: string;
    canPrimary: boolean;
    description: string;
    params: BotParamData[];
}