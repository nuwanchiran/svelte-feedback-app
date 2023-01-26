import {writable} from 'svelte/store';

export interface Feedback {
  rating: number,
  text: string
}

export const FeedbackStore = writable( [{
  rating: 5,
  text: 'Need to improve audio quality',
},
{
  rating: 6,
  text: 'Do not like the color choice',
},
{
  rating: 9,
  text: 'Make the video shorter',
},] )