import { writable } from "svelte/store";

export const dynamicTitle = writable('Stefan Dörger');
console.log(dynamicTitle)
