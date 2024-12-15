import { defineConfig } from "vitepress";

export default defineConfig({
	// 中文本地化配置
	lang: "zh-CN",
	title: "info知识库",
	description: "使用 VitePress 创建的文档站点",

	themeConfig: {
		siteTitle:
			'<i class="iconfont icon-a-BasicInformationzhuanhuan" style="font-size: 1.2em; margin-right: 5px; background: linear-gradient(120deg, #3eaf7c, #6d9ee7); -webkit-background-clip: text; -webkit-text-fill-color: transparent;" > </i>info知识库',

		nav: [
			{ text: "首页", link: "/" },
			{
				text: "快速开始",
				items: [
					{
						text: "前端开发",
						link: "/docs-notes/frontend/frontend-start.md",
					},
				],
			},
		],
		sidebar: {
			"/docs-notes/frontend/html/": [
				{
					text: "HTML5指南",
					link: "/docs-notes/frontend/html/1.menu.md",
					collapsed: true,
					items: [],
				},
				{
					text: "HTML基础概念",
					collapsed: true,
					items: [
						{
							text: "HTML简介",
							link: "/docs-notes/frontend/html/Basic_Concepts/Introduction.md",
						},
					],
				},
				{
					text: "基础篇",
					collapsed: true,
					items: [
						{
							text: "HTML5文档结构",
							collapsed: true,
							items: [
								{
									text: "1 HTML5文档结构",
									link: "/docs-notes/frontend/html/Basis/1.structure/1.1.md",
								},
								{
									text: "2 语义化标签",
									link: "/docs-notes/frontend/html/Basis/1.structure/1.2.md",
								},
								{
									text: "3 页面布局基础",
									link: "/docs-notes/frontend/html/Basis/1.structure/1.3.md",
								},
							],
						},
						{
							text: "文本格式化",
							collapsed: true,
							items: [
								{
									text: "1 文本格式化",
									link: "/docs-notes/frontend/html/Basis/2.test/1.1.md",
								},
								{
									text: "2 序列标签",
									link: "/docs-notes/frontend/html/Basis/2.test/1.4.md",
								},
								{
									text: "3 链接和图片",
									link: "/docs-notes/frontend/html/Basis/2.test/1.2.md",
								},
								{
									text: "4 表格应用",
									link: "/docs-notes/frontend/html/Basis/2.test/1.3.md",
								},
							],
						},
						{
							text: "表单",
							collapsed: true,
							items: [
								{
									text: "1 表单基础",
									link: "/docs-notes/frontend/html/Basis/3.form/1.1.md",
								},
								{
									text: "2 新增表单元素",
									link: "/docs-notes/frontend/html/Basis/3.form/1.2.md",
								},
								{
									text: "3 表单验证",
									link: "/docs-notes/frontend/html/Basis/3.form/1.3.md",
								},
							],
						},
						{
							text: "多媒体",
							collapsed: true,
							items: [
								{
									text: "11 音频和视频",
									link: "/docs-notes/frontend/html/Advanced/audio/1.1.md",
								},
							],
						},
					],
				},
				{
					text: "进阶",
					collapsed: true,
					items: [
						{
							text: "Canvas 绘图基础", // 分组标题
							collapsed: true,
							items: [
								{
									text: "1 Canvas绘图",
									link: "/docs-notes/frontend/html/Advanced/draw/1.1.md",
								},
								{
									text: "2 Canvas绘制矩形",
									link: "/docs-notes/frontend/html/Advanced/draw/1.2.md",
								},
								{
									text: "3 Canvas绘制路径",
									link: "/docs-notes/frontend/html/Advanced/draw/1.3.md",
								},
								{
									text: "4 Canvas绘制圆形",
									link: "/docs-notes/frontend/html/Advanced/draw/1.4.md",
								},
								{
									text: "5 Canvas绘制渐变图形",
									link: "/docs-notes/frontend/html/Advanced/draw/1.5.md",
								},
								{
									text: "6 Canvas绘制变换图形",
									link: "/docs-notes/frontend/html/Advanced/draw/1.6.md",
								},
								{
									text: "7 Canvas绘制图形组合",
									link: "/docs-notes/frontend/html/Advanced/draw/1.7.md",
								},
								{
									text: "8 Canvas绘制图形阴影",
									link: "/docs-notes/frontend/html/Advanced/draw/1.8.md",
								},
								{
									text: "9 Canvas高级绘图",
									link: "/docs-notes/frontend/html/Advanced/draw/1.9.md",
								},
							],
						},
						{
							text: "Canvas 高级绘图", // 分组标题
							collapsed: true,
							items: [
								{
									text: "1 Canvas绘制图像",
									link: "/docs-notes/frontend/html/Advanced/drawImage/1.1.md",
								},
								{
									text: "2 Canvas绘制文字",
									link: "/docs-notes/frontend/html/Advanced/drawImage/1.2.md",
								},
							],
						},
						{
							text: "本地存储",
							collapsed: true,
							items: [
								{
									text: "1 本地存储",
									link: "/docs-notes/frontend/html/Advanced/localhostDatabase/1.1.md",
								},
							],
						},
					],
				},
			],
			"/docs-notes/frontend/css/": [
				{
					text: "CSS3 开发指南",
					link: "/docs-notes/frontend/css/1.menu.md",
					collapsed: true,
					items: [],
				},
				{
					text: "CSS3 概述 (Overview)",
					collapsed: true,
					items: [
						{
							text: "CSS和css3简介",
							link: "/docs-notes/frontend/css/Introduction/1.1.md",
						},
					],
				},
				{
					text: "CSS 基础篇",
					collapsed: true,
					items: [
						{
							text: "CSS选择器",
							collapsed: true,
							items: [
								{
									text: "css 选择器",
									link: "/docs-notes/frontend/css/selector/1.1.md",
								},
								{
									text: "css 组合选择器",
									link: "/docs-notes/frontend/css/selector/1.2.md",
								},
								{
									text: "css 伪类选择器",
									link: "/docs-notes/frontend/css/selector/1.3.md",
								},
								{
									text: "css 伪元素选择器",
									link: "/docs-notes/frontend/css/selector/1.4.md",
								},
								{
									text: "css 属性选择器",
									link: "/docs-notes/frontend/css/selector/1.5.md",
								},
								{
									text: "css 层叠和优先级与继承",
                                    link: "/docs-notes/frontend/css/selector/1.6.md",
								},
                            ],
                        },
                        {
                                text: "css 背景与边框",
                                collapsed: true,
                                items: [
                                    {
                                        text: "css 背景(background)",
                                        link: "/docs-notes/frontend/css/background/1.1.md"
                                    },
                                    {
                                        text: "css 边框(border)",
                                        link: "/docs-notes/frontend/css/background/1.2.md"
                                    }
                                ]
                        },
                        {
                            text: "css 盒模型",
                            collapsed: true,
                            items: [
                                {
                                    text: "盒模型",
                                    link: "/docs-notes/frontend/css/boxModel/1.1.md"
                                }
                            ]
                        },
                        {
                            text: "css 文本样式与字体", 
                            collapsed: true,
                            items: [
                                {
                                    text: "css 文本对齐",
                                    link: "/docs-notes/frontend/css/textAndFont/1.1.md"
                                },
                                {
                                    text: "css 文本装饰",
                                    link:"/docs-notes/frontend/css/textAndFont/1.2.md"
                                },
                                {
                                    text: "css 文本间距",
                                    link: "/docs-notes/frontend/css/textAndFont/1.3.md"
                                },
                                {
                                    text: "css 字体",
                                }
                            ]
                        }
					],
                },
                {
                    text:"CSS 进阶篇",
                    collapsed: true,
                    items: [
                        {
                            text: "css 布局与定位",
                            collapsed: true,
                            items: [
                                {
                                    text: "css 定位",
                                    link: "/docs-notes/frontend/css/Layout_Positioning/1.1.md"
                                },
                                {
                                    text: "cssFlex弹性布局",
                                    link: "/docs-notes/frontend/css/Layout_Positioning/1.2.md"
                                },
                                {
                                    text: "css Grid网格布局",
                                    link: "/docs-notes/frontend/css/Layout_Positioning/1.3.md"
                                }
                            ]
                            
                        }
                    ]
                }
			],
		},
		docFooter: {
			prev: "上一页",
			next: "下一页",
		},
		search: {
			provider: "local",
		},
	},
	
});
