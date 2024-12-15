---
layout: doc
title: 前端开发


---

<style>
/* 更新卡片样式，添加更现代的设计 */
li{
    list-style: none;
}
.custom-block {
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid var(--vp-c-divider-light);
}


.custom-block:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  border-color: var(--vp-c-brand-light);
}

/* 优化标题样式 */
.custom-block h3 {
  font-size: 1.3em;
  color: var(--vp-c-brand);
  margin-bottom: 20px;
  border-bottom: 2px solid var(--vp-c-divider-light);
  padding-bottom: 12px;
  position: relative;
}

.custom-block h3:after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 40px;
  height: 2px;
  background: var(--vp-c-brand);
}

/* 优化列表项样式 */
.custom-block ul li {
  margin: 12px 0;
  padding-left: 24px;
  position: relative;
  line-height: 1.6;
}

.custom-block ul li:before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--vp-c-brand);
  transition: transform 0.2s;
}

.custom-block ul li:hover:before {
  transform: translateX(4px);
}

/* 添加学习路线新样式 */
.learning-path {
  background: linear-gradient(145deg, var(--vp-c-bg-soft), var(--vp-c-bg));
  padding: 30px;
  border-radius: 16px;
  margin: 32px 0;
  border: 1px solid var(--vp-c-divider-light);
}

.learning-path .step {
  display: flex;
  align-items: flex-start;
  margin: 24px 0;
  padding: 16px;
  border-radius: 12px;
  background: var(--vp-c-bg);
  transition: all 0.3s ease;
}

.learning-path .step:hover {
  transform: translateX(8px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.learning-path .step-number {
  font-size: 24px;
  font-weight: bold;
  color: var(--vp-c-brand);
  margin-right: 16px;
  background: var(--vp-c-bg-soft);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  flex-shrink: 0;
}

.learning-path .step-content {
  flex: 1;
}

.learning-path .step-title {
  font-size: 1.2em;
  font-weight: bold;
  color: var(--vp-c-text-1);
  margin-bottom: 8px;
}

.learning-path .step-details {
  margin: 0;
  padding-left: 20px;
}

.learning-path .step-details li {
  margin: 8px 0;
  color: var(--vp-c-text-2);
}

/* 优化资源链接样式 */
.resources a {
  display: inline-block;
  color: var(--vp-c-brand);
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
  margin: 4px 0;
}

.resources a:hover {
  color: var(--vp-c-brand-light);
  background: var(--vp-c-bg-soft);
}

/* 优化网格布局 */
.vp-doc {
  background: var(--vp-c-bg);
  padding: 32px;
  border-radius: 20px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.03);
}
</style>

# 前端开发指南


## 📚 学习路线

<div class="learning-path">
  <div class="step">
    <div class="step-number">1</div>
    <div class="step-content">
      <div class="step-title">基础阶段</div>
      <ul class="step-details">
        <li>
            <a href="/docs-notes/frontend/html/1.menu">HTML5 指南</a>
        </li>
        <li>
            <a href="/docs-notes/frontend/css/1.menu">CSS3 指南</a>
        </li>
        <li>JavaScript 核心概念</li>
        <li>ES6+ 新特性</li>
      </ul>
    </div>
  </div>


  <div class="step">
    <div class="step-number">2</div>
    <div class="step-content">
      <div class="step-title">框架学习</div>
      <ul class="step-details">
        <li>Vue/React 选型</li>
        <li>组件化开发</li>
        <li>状态管理</li>
        <li>路由管理</li>
      </ul>
    </div>
  </div>


  <div class="step">
    <div class="step-number">3</div>
    <div class="step-content">
      <div class="step-title">工程化实践</div>
      <ul class="step-details">
        <li>构建工具使用</li>
        <li>自动化测试</li>
        <li>CI/CD 流程</li>
        <li>性能优化</li>
      </ul>
    </div>
  </div>


  <div class="step">
    <div class="step-number">4</div>
    <div class="step-content">
      <div class="step-title">高级主题</div>
      <ul class="step-details">
        <li>TypeScript</li>
        <li>微前端</li>
        <li>SSR/SSG</li>
        <li>WebAssembly</li>
      </ul>
    </div>
  </div>

</div>

## 🎯 推荐资源

<div class="resources">


- [MDN Web Docs](https://developer.mozilla.org/)
- [Vue.js 官方文档](https://vuejs.org/)
- [React 官方文档](https://reactjs.org/)
- [TypeScript 官方文档](https://www.typescriptlang.org/)

</div>