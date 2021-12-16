export interface FrientListDto {
    id: number;
    name: string;
}

export interface TextMsg {
    text: string;
}

export interface ChatWindowDto {
    id: number;
    name: string;
    inputText: string;
    messages?: TextMsg[];
}
