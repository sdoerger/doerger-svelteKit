// ASSETS
// import iconVue from '$lib/assets/img/icons/vue.svg';
// import iconNuxt from '$lib/assets/img/icons/nuxt.svg';
// import iconTailwindcss from '$lib/assets/img/icons/tailwindcss.svg';
// import iconVite from '$lib/assets/img/icons/vitejs.svg';
// import iconNodejs from '$lib/assets/img/icons/nodejs.svg';
// import iconGit from '$lib/assets/img/icons/git.svg';
// import iconBootstrap from '$lib/assets/img/icons/bootstrap.svg';
// import iconLinux from '$lib/assets/img/icons/ubuntu.svg';
// import iconSvelte from '$lib/assets/img/icons/svelte.svg';
// import iconJavascript from '$lib/assets/img/icons/javascript.svg';
// import iconTypescript from '$lib/assets/img/icons/typescript.svg';
// import iconHtml from '$lib/assets/img/icons/html.svg';
// import iconCss from '$lib/assets/img/icons/css.svg';
// import iconSass from '$lib/assets/img/icons/sass.svg';
// import iconBash from '$lib/assets/img/icons/bash.svg';
// import iconMongodb from '$lib/assets/img/icons/mongodb.svg';
// import iconMysql from '$lib/assets/img/icons/mysql.svg';
// import iconMarkdown from '$lib/assets/img/icons/markdown.svg';
// import iconNpm from '$lib/assets/img/icons/npm.svg';
// import iconVsCode from '$lib/assets/img/icons/vscode.svg';
// import iconStrapi from '$lib/assets/img/icons/strapi.svg';
// import iconPug from '$lib/assets/img/icons/pug.svg';

import bash from '$lib/assets/img/icons/bash.svg';
import bootstrap from '$lib/assets/img/icons/bootstrap.svg';
import css from '$lib/assets/img/icons/css.svg';
import digitalocean from '$lib/assets/img/icons/digitalocean.svg';
import docker from '$lib/assets/img/icons/docker.svg';
import facebook from '$lib/assets/img/icons/facebook.svg';
import git from '$lib/assets/img/icons/git.svg';
import github from '$lib/assets/img/icons/github.svg';
import go from '$lib/assets/img/icons/go.svg';
import html from '$lib/assets/img/icons/html.svg';
import instagram from '$lib/assets/img/icons/instagram.svg';
import javascript from '$lib/assets/img/icons/javascript.svg';
import laravel from '$lib/assets/img/icons/laravel.svg';
import linkedin from '$lib/assets/img/icons/linkedin.svg';
import markdown from '$lib/assets/img/icons/markdown.svg';
import mongodb from '$lib/assets/img/icons/mongodb.svg';
import mysql from '$lib/assets/img/icons/mysql.svg';
import nest from '$lib/assets/img/icons/nest.svg';
import nodejs from '$lib/assets/img/icons/nodejs.svg';
import npm from '$lib/assets/img/icons/npm.svg';
import nuxt from '$lib/assets/img/icons/nuxt.svg';
import pug from '$lib/assets/img/icons/pug.svg';
import puppeteer from '$lib/assets/img/icons/puppeteer.svg';
import sass from '$lib/assets/img/icons/sass.svg';
import stencil from '$lib/assets/img/icons/stencil.svg';
import strapi from '$lib/assets/img/icons/strapi.svg';
import svelte from '$lib/assets/img/icons/svelte.svg';
import tailwindcss from '$lib/assets/img/icons/tailwindcss.svg';
import typescript from '$lib/assets/img/icons/typescript.svg';
import ubuntu from '$lib/assets/img/icons/ubuntu.svg';
import vitejs from '$lib/assets/img/icons/vitejs.svg';
import vscode from '$lib/assets/img/icons/vscode.svg';
import vue from '$lib/assets/img/icons/vue.svg';
import webcomponents from '$lib/assets/img/icons/webcomponents.svg';

export const useFrameworkIcons = {
	bash: bash,
	bootstrap: bootstrap,
	css: css,
	digitalocean: digitalocean,
	docker: docker,
	facebook: facebook,
	git: git,
	github: github,
	go: go,
	html: html,
	instagram: instagram,
	javascript: javascript,
	laravel: laravel,
	linkedin: linkedin,
	markdown: markdown,
	mongodb: mongodb,
	mysql: mysql,
	nest: nest,
	nodejs: nodejs,
	npm: npm,
	nuxt: nuxt,
	pug: pug,
	puppeteer: puppeteer,
	sass: sass,
	stencil: stencil,
	strapi: strapi,
	svelte: svelte,
	tailwindcss: tailwindcss,
	typescript: typescript,
	ubuntu: ubuntu,
	vitejs: vitejs,
	vscode: vscode,
	vue: vue,
	webcomponents: webcomponents
};

export const useSkills: [] = [
	{
		type: 'language',
		label: 'JavaScript',
		icon: 'javascript',
		level: '3',
		link: '',
		visibleToType: true
	},
	{
		type: 'language',
		label: 'TypeScript',
		icon: 'typescript',
		level: '2',
		link: '',
		visibleToType: true
	},
	{
		type: 'language',
		label: 'HTML',
		icon: 'html',
		level: '3',
		link: '',
		visibleToType: true
	},
	{
		type: 'language',
		label: 'CSS',
		icon: 'css',
		level: '3',
		link: '',
		visibleToType: true
	},
	{
		type: 'technology',
		label: 'SASS',
		icon: 'sass',
		level: '2',
		link: '',
		visibleToType: true
	},
	{
		type: 'language',
		label: 'Bash',
		icon: 'bash',
		level: '1',
		link: '',
		visibleToType: true
	},
	{
		type: 'technology',
		label: 'MongoDB',
		icon: 'mongodb',
		level: '1',
		link: '',
		visibleToType: true
	},
	{
		type: 'technology',
		label: 'MySql',
		icon: 'mysql',
		level: '1',
		link: '',
		visibleToType: true
	},
	{
		type: 'library',
		label: 'Vue.js (2+3)',
		icon: 'vue',
		level: '3',
		link: '',
		visibleToType: true
	},
	{
		type: 'technology',
		label: 'Nuxt.js',
		icon: 'nuxt',
		level: '2',
		link: '',
		visibleToType: true
	},
	{
		type: 'library',
		label: 'TailwindCSS',
		icon: 'tailwindcss',
		level: '2',
		link: '',
		visibleToType: true
	},
	{
		type: 'technology',
		label: 'Svelte',
		icon: 'svelte',
		level: '1',
		link: '',
		visibleToType: true
	},
	{
		type: 'library',
		label: 'Node.js',
		icon: 'nodejs',
		level: '2',
		link: '',
		visibleToType: true
	},
	{
		type: 'library',
		label: 'Git (+ GitLab)',
		icon: 'git',
		level: '2',
		link: '',
		visibleToType: true
	},
	{
		type: 'library',
		label: 'Bootstrap',
		icon: 'bootstrap',
		level: '3',
		link: '',
		visibleToType: true
	},
	{
		type: 'library',
		label: 'Linux',
		icon: 'ubuntu',
		level: '2',
		link: '',
		visibleToType: true
	},
	{
		type: 'library',
		label: 'Vite',
		icon: 'vitejs',
		level: '1',
		link: '',
		visibleToType: true
	},
	{
		type: 'library',
		label: 'Pinia',
		icon: 'pinia',
		level: '1',
		link: '',
		visibleToType: false
	},
	{
		type: 'library',
		label: 'Vuex',
		icon: 'vuex',
		level: '1',
		link: '',
		visibleToType: false
	},
	{
		type: 'library',
		label: 'WebPack',
		icon: 'webpack',
		level: '1',
		link: '',
		visibleToType: false
	},
	{
		type: 'library',
		label: 'Astro',
		icon: 'astro',
		level: '1',
		link: '',
		visibleToType: false
	},
	{
		type: 'language',
		label: 'Markdown',
		icon: 'markdown',
		level: '1',
		link: '',
		visibleToType: true
	},
	{
		type: 'library',
		label: 'Strapi',
		icon: 'strapi',
		level: '1',
		link: '',
		visibleToType: false
	},
	{
		type: 'library',
		label: 'Visual Studio Code',
		icon: 'vscode',
		level: '1',
		link: '',
		visibleToType: true
	},
	{
		type: 'library',
		label: 'NPM',
		icon: 'npm',
		level: '1',
		link: '',
		visibleToType: true
	},
	{
		type: 'technology',
		label: 'Pug',
		icon: 'pug',
		level: '1',
		link: '',
		visibleToType: true
	},
	{
		type: 'technology',
		label: 'Go',
		icon: 'go',
		level: '2',
		link: '',
		visibleToType: true
	},
	{
		type: 'technology',
		label: 'Nest.js',
		icon: 'nest',
		level: '1',
		link: '',
		visibleToType: true
	},
	{
		type: 'technology',
		label: 'Docker',
		icon: 'docker',
		level: '1',
		link: '',
		visibleToType: true
	},
	{
		type: 'technology',
		label: 'Stencil.js',
		icon: 'stencil',
		level: '2',
		link: '',
		visibleToType: true
	},
	{
		type: 'technology',
		label: 'Web Components',
		icon: 'webcomponents',
		level: '2',
		link: '',
		visibleToType: true
	},
	{
		type: 'technology',
		label: 'Playwright',
		icon: 'puppeteer',
		level: '2',
		link: '',
		visibleToType: true
	},
	{
		type: 'technology',
		label: 'Laravel',
		icon: 'laravel',
		level: '2',
		link: '',
		visibleToType: true
	},
	{
		type: 'technology',
		label: 'DigitalOcean',
		icon: 'digitalocean',
		level: '1',
		link: '',
		visibleToType: true
	},
	{
		type: 'technology',
		label: 'GitHub',
		icon: 'github',
		level: '3',
		link: '',
		visibleToType: true
	}
];
