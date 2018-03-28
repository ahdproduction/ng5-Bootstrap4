// export class Marketitem {
//     constructor (
//         public Id: number,
//         public name: string,
//         public img: string,
//         public price: number,
//         public isHidden: boolean,
//     ) { }
// }


// export class Rating {
//     public Source?: string;
//     public Value?: string;
// }

export class Marketitem {
    constructor (
        title: string,
        year: number,
        director?: string,
        cast?: string,
        genre?: string,
        notes?: string,
    ) { }
}
