import { writable } from 'svelte/store';

export const dynamicTitle = writable('');
export const updateSubTitle = (subTitle: string): void => {
	dynamicSubTitle.set(subTitle);
};

export const dynamicSubTitle = writable('');
export const updateTitle = (title: string): void => {
	dynamicTitle.set(title);
};

export const dynamicComponent = writable('IntroSVG');
export const updateComponent = (compoenentTitle: string): void => {
	dynamicComponent.set(compoenentTitle);
};
