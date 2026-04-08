export interface Wand {
    wood: string;
    core:string;
    length: number | null;
}

export interface CharacterModel {
    id: string;
    name: string;
    species: string;
    house: string;
    wizard: string;
    ancestry: string;
    actor: string;
    image: string;
    wand: string;
}