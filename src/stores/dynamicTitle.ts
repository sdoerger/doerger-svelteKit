import { writable } from 'svelte/store';

export const dynamicTitle = writable('');
export const updateSubTitle = (subTitle) => {
	dynamicSubTitle.set(subTitle);
};

export const dynamicSubTitle = writable('');
export const updateTitle = (title) => {
	dynamicTitle.set(title);
};

export const dynamicComponent = writable('Intro-Section-Custom');
export const updateComponent = (subTitle) => {
	dynamicSubTitle.set(subTitle);
};
