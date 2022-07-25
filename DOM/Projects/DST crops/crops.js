const SEASONS = {
    SPRING: 'spring',
    SUMMER: 'summer',
    AUTUMN: 'autumn',
    WINTER: 'winter'
}

const CROPS = {
    asparagus: {
        url: './assets/crops/Asparagus.webp',
        seasons: [SEASONS.WINTER, SEASONS.SPRING],
        water: 1,
        fertilizer: {
            consumes_growth_formula: -1,
            restores_compost: 2,
            restores_manure: -1
        }
    },
    carrot: {
        url: './assets/crops/Carrot.webp',
        seasons: [SEASONS.AUTUMN, SEASONS.WINTER, SEASONS.SPRING],
        water: 1,
        fertilizer: {
            consumes_growth_formula: 2,
            restores_compost: -1,
            restores_manure: -1
        }
    },
    corn: {
        url: './assets/crops/Corn.webp',
        seasons: [SEASONS.AUTUMN, SEASONS.SPRING, SEASONS.SUMMER],
        water: 1,
        fertilizer: {
            consumes_growth_formula: -1,
            restores_compost: 2,
            restores_manure: -1
        }
    },
    dragon_fruit:{
        url: './assets/crops/Dragon_Fruit.webp',
        seasons: [SEASONS.SPRING, SEASONS.SUMMER],
        water: 2,
        fertilizer: {
            consumes_growth_formula: -2,
            restores_compost: -2,
            restores_manure: 4
        }
    },
    durian:{
        url: './assets/crops/Durian.webp',
        seasons: [SEASONS.SPRING],
        water: 1,
        fertilizer: {
            consumes_growth_formula: -2,
            restores_compost: 4,
            restores_manure: -2
        }
    },
    eggplant:{
        url: './assets/crops/Eggplant.webp',
        seasons: [SEASONS.AUTUMN, SEASONS.SPRING],
        water: 2,
        fertilizer: {
            consumes_growth_formula: -1,
            restores_compost: -1,
            restores_manure: 2
        }
    },
    garlic:{
        url: './assets/crops/Garlic.webp',
        seasons: [SEASONS.AUTUMN, SEASONS.WINTER, SEASONS.SPRING, SEASONS.SUMMER],
        water: 1,
        fertilizer: {
            consumes_growth_formula: -2,
            restores_compost: 4,
            restores_manure: -2
        }
    },
    onion:{
        url: './assets/crops/Onion.webp',
        seasons: [SEASONS.AUTUMN, SEASONS.SUMMER, SEASONS.SPRING],
        water: 2,
        fertilizer: {
            consumes_growth_formula: 4,
            restores_compost: -2,
            restores_manure: -2
        }
    },
    pepper:{
        url: './assets/crops/Pepper.webp',
        seasons: [SEASONS.AUTUMN, SEASONS.SUMMER],
        water: 1,
        fertilizer: {
            consumes_growth_formula: -2,
            restores_compost: -2,
            restores_manure: 4
        }
    },
    pomegranate:{
        url: './assets/crops/Pomegranate.webp',
        seasons: [SEASONS.SUMMER, SEASONS.SPRING],
        water: 2,
        fertilizer: {
            consumes_growth_formula: 4,
            restores_compost: -2,
            restores_manure: -2
        }
    },
    potato:{
        url: './assets/crops/Potato.webp',
        seasons: [SEASONS.AUTUMN, SEASONS.WINTER, SEASONS.SPRING],
        water: 1,
        fertilizer: {
            consumes_growth_formula: -1,
            restores_compost: -1,
            restores_manure: 2
        }
    },
    pumpkin:{
        url: './assets/crops/Pumpkin.webp',
        seasons: [SEASONS.AUTUMN, SEASONS.WINTER],
        water: 2,
        fertilizer: {
            consumes_growth_formula: 2,
            restores_compost: -1,
            restores_manure: -1
        }
    },
    tomato:{
        url: './assets/crops/Tomato.webp',
        seasons: [SEASONS.AUTUMN, SEASONS.SPRING, SEASONS.SUMMER],
        water: 3,
        fertilizer: {
            consumes_growth_formula: 1,
            restores_compost: 1,
            restores_manure: -2
        }
    },
    watermelon:{
        url: './assets/crops/Watermelon.webp',
        seasons: [SEASONS.AUTUMN, SEASONS.SUMMER],
        water: 3,
        fertilizer: {
            consumes_growth_formula: -2,
            restores_compost: 1,
            restores_manure: 1
        }
    }
}

export { CROPS, SEASONS };