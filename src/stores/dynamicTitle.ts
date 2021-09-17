import { writable } from "svelte/store";

export const dynamicTitle = writable('');
export const dynamicSubTitle = writable('');

export const updateTitle = (title) => {
	dynamicTitle.set(title)
}

export const updateSubTitle = (subTitle) => {
	dynamicSubTitle.set(subTitle)
}