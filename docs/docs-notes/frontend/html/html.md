
# HTML5 基础与进阶

## HTML 基础


- **引用**：`<blockquote>`  
```html
<blockquote>
  引用文本
</blockquote>
```
---
## 2.影音图片相关标签
- **图片标签**：`<img>`  `picture`
  - `img`用于嵌入图片，`src`：指定图片路径。`alt`：指定图片描述。`width` 和 `height`：指定图片的宽度和高度。
  - `picture`用于图片的响应式，可以指定多张图片，浏览器会根据屏幕大小选择合适的图片。
```html
<img src="image.jpg" alt="图片描述" width="100" height="100">
<picture>
  <source srcset="image-small.jpg" media="(max-width: 600px)">
  <source srcset="image-large.jpg" media="(min-width: 601px)">
  <img src="image.jpg" alt="图片描述" width="100" height="100">
</picture>
```
- **音频标签**：`<audio>`  
  -`<audio>` 用于在网页中嵌入音频文件。`src`：指定音频路径`controls`：显示音频播放器控制界面（如播放、暂停、音量等）。`autoplay`：自动播放。`loop`：循环播放。`type`：指定音频类型。
```html
<audio src="audio.mp3" controls autoplay loop type="audio/mp3"></audio>
```
- **视频标签**：`<video>`  
  -`<video>` 用于在网页中嵌入视频文件。`src`：指定视频路径`controls`：显示视频播放器控制界面（如播放、暂停、音量等）。`autoplay`：自动播放。`loop`：循环播放。`type`：指定视频类型。
```html
<video src="video.mp4" controls autoplay loop type="video/mp4"></video>
```
- **嵌入内容**：`<iframe>`  
  -`<iframe>` 用于在网页中嵌入其他网页。`src`：指定嵌入网页的路径。`width` 和 `height`：指定嵌入网页的宽度和高度。例如嵌入`YouTube`视频。
```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

```
---




---



## 6.布局标签
- **容器类标签**：
  - `<div>`：块级容器/无语义
  - `<span>`：行内容器/小范围样式调整
  ```html
  <div>块级容器</div>
  <span>行内容器</span>
  ```
- **HTML5 新增结构标签**： 
  - `<header>`：头部
  - `<footer>`：底部
  - `<article>`：文章
  - `<section>`：章节
  - `<nav>`：导航
  - `<aside>`：侧边栏
  - `<main>`：主要内容
  - `<figure>`：图像、图表等媒体内容
  - `<figcaption>`：媒体内容的标题
  - `<details>`：详细信息
  - `<summary>`：详细信息的标题
  ```html
  <header>
    <h1>我的语义化页面</h1>
  </header>

  <nav>
    <ul>
      <li><a href="#home">首页</a></li>
      <li><a href="#about">关于我们</a></li>
      <li><a href="#contact">联系我们</a></li>
    </ul>
  </nav>
  <main>
    <aside>
      <h2>侧边栏</h2>
      <p>这里可以放一些广告、链接或其他辅助信息。</p>
    </aside>

    <section>
      <article>
        <h2>文章标题</h2>
        <p>这是主要内容区域，可以用来显示文章或主要信息。</p>
        <figure>
          <img src="https://via.placeholder.com/300" alt="示例图片">
          <figcaption>图片说明：一张示例图片</figcaption>
        </figure>
        <details>
          <summary>更多信息</summary>
          <p>这是一些详细信息，只有点击标题时才会显示。</p>
        </details>
      </article>
    </section>
  </main>

  <footer>
    <p>版权所有 &copy; 2024</p>
  </footer>
    ```

---

## **7. 元信息标签**
- **HTML 文档的头部信息**：
  - 文档类型：`<!DOCTYPE html>`  
  - 字符集：`<meta charset="UTF-8">`  
  - 视口设置：`<meta name="viewport" content="width=device-width, initial-scale=1.0">`  
  - 搜索引擎：`<meta name="robots" content="index, follow">`  
  - 页面描述：`<meta name="description" content="页面描述">`  
  - 页面关键词：`<meta name="keywords" content="关键词1, 关键词2, 关键词3">`  
  - 页面作者：`<meta name="author" content="作者姓名">`  
  - 页面版权：`<meta name="copyright" content="版权信息">`  
  - 页面标题：`<title>`  
  ```html
  <!DOCTYPE html>
  <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="robots" content="index, follow">
      <meta name="description" content="页面描述">
      <meta name="keywords" content="关键词1, 关键词2, 关键词3">
      <meta name="author" content="作者姓名">
      <meta name="copyright" content="版权信息">
      <title>页面标题</title>
    </head>
  ```
---

### **8. 脚本与样式**
- **javascript引入**：  
  ```html
  <script>
      console.log("Hello, World!");
  </script>
  ```  
- **外部样式表**：  
  ```html
  <link rel="stylesheet" href="styles.css">
  ```  
- **内联样式**：  
  ```html
  <style>
      body {
          background-color: lightblue;
      }
  </style>
  ```
- **行内样式**：  
  ```html
  <p style="color: red;">这是一个红色的段落。</p>
  ```   
---

## **9. 特殊功能标签**
- **注释**：`<!-- 注释内容 -->`   
- **模板**：`<template>`  
  ```html
  <template id="my-template">
      <p>这是一个模板</p>
  </template>
  ```  
---

## **10. 其他常用标签**
- **进度条**：`<progress>`  
  ```html
  <progress value="70" max="100"></progress>
  ```
- **计量器**：`<meter>`  
  ```html
  <meter value="0.6">60%</meter>
  ```
- **细节与摘要**：`<details>` 和 `<summary>`  
  ```html
  <details>
      <summary>点击查看详细信息</summary>
      <p>这是详细内容。</p>
  </details>
  ```
- **时间标签**：`<time>`  
  ```html
  <time datetime="2024-11-26">今天</time>
  ```
- **高亮**：`<mark>`  
```html
<mark>高亮文本</mark>
```
- **代码**：`<code>`  
```html
<code>代码文本</code>
```
- **变量**：`<var>`  
```html
<var>变量文本</var>
```
- **缩写**：`<abbr>`  
```html
<abbr title="缩写文本">缩写文本</abbr>
```
---

