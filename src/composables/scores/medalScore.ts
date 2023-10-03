import { useGameState } from "../gameState"
import { seed, useSeededRandom } from "../random";

export const scoresBySeed:Record<string, {
    bronze: string,
    silver: string,
    gold: string,
    author: string
}> = {
    "2023/10/02": {
        bronze: "02:30",
        silver: "01:10",
        gold: "00:42",
        author: "00:38.257",
    },
    "2023/10/03": {
        bronze: "02:15",
        silver: "01:00",
        gold: "00:40",
        author: "00:35.865",
    }
}

export const timeByBlocks = [
    4.8, // { block: block0, p: 1 }, 
    5.8, // { block: block1, p: 2 }, 
    1.9, // { block: block2, p: 1 }, 
    1.6, // { block: Block3, p: 1 }, 
    2.6, // { block: Block4, p: 4 }, 
    5.0, // { block: Block5, p: 3 }, 
    6.2, // { block: Block6, p: 1 }, 
    5.0, // { block: Block7, p: 2 }, 
];


export function useMedals() {
    const { timer } = useGameState();
    let medals = scoresBySeed[seed.value];
    const realTime = medals != null;
    if (!realTime) {
        // We pick the same sequence of block but pick the best time of it instead
        const { random } = useSeededRandom();
        function pickRandomElement() {
            return timeByBlocks[Math.floor(random() * timeByBlocks.length)];
        }
        let time = 3000;// we account start and finish time
        for (let i=0;i<10;i++) {
            const t = pickRandomElement();
            time += t*1000;
        }
        time *= 1.05; // we had 5% for more fair time
        medals = {
            bronze: new Date(time*4).toISOString().slice(14,23),
            silver: new Date(time*2).toISOString().slice(14,23),
            gold: new Date(time*1.07).toISOString().slice(14,23),
            author: new Date(time).toISOString().slice(14,23),
        }
    }
    return {
        medals,
        realTime
    }
}