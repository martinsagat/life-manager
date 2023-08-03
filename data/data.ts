import { Recipe } from '../types'

export const recipes: Recipe[] = [
    {
        id: "1",
        name: 'Fruit Salad',
        isFavorite: false,
        ingredients: [{
            id: "1",
            name: 'apple',
        },
        {
            id: "5",
            name: 'pineapple',
        },
        {
            id: "4",
            name: 'banana',
        }]
    },
    {
        id: "2",
        name: 'Garden Salad',
        isFavorite: false,
        ingredients: [{
            id: "6",
            name: 'carrot',
        }]
    },
    {
        id: "3",
        name: 'Greek Salad',
        isFavorite: false,
        ingredients: [{
            id: "7",
            name: 'lettuce',
        },
        {
            id: "8",
            name: 'feta',
        },
        ]
    },
    {
        id: "4",
        name: 'Holland Salad',
        isFavorite: true,
        ingredients: [{
            id: "7",
            name: 'lettuce',
        },
        {
            id: "6",
            name: 'carrot',
        }]
    }
];