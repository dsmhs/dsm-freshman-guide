import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import rehypeMermaid from 'rehype-mermaid';
import { rehypeMermaidOptions } from './src/plugins/rehype-mermaid';

// https://astro.build/config
export default defineConfig({
	base: process.env.BASE_URL || '/dsm-freshman-guide/',
	markdown: {
		rehypePlugins: [[rehypeMermaid, rehypeMermaidOptions]],
	},
  image: {
    service: passthroughImageService(),
  },
	integrations: [
		starlight({
			title: 'DSM 신입생 가이드',
			favicon: './src/assets/favicon.ico',
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
	]
});
