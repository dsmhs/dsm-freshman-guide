import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'DSM 신입생 가이드',
			sidebar: [
				{
					label: '시작하기',
					autogenerate: { directory: 'start' },
				},
				{
					label: 'Backend',
					collapsed: true,
					autogenerate: { directory: 'backend', collapsed: false },
				},
				{
					label: 'Frontend',
					collapsed: true,
					autogenerate: { directory: 'frontend', collapsed: true },
				},
				{
					label: 'iOS',
					collapsed: true,
					autogenerate: { directory: 'ios', collapsed: true },
				},
				{
					label: 'Android',
					collapsed: true,
					autogenerate: { directory: 'android', collapsed: true },
				},
				// {
				// 	label: 'DevOps',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'devops', collapsed: true },
				// },
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: true }),
	],
});
