
<h1>Clear Components</h1>
<br><br>

<h2>clr-alert-center</h2>
<blockquote><pre><code>
  &lt;clr-alert-center location="bottom">
    &lt;clr-alert slot="alert" kind="info" text="content goes here">&lt;/clr-alert>
    &lt;clr-alert slot="alert" kind="success" text="Success!">&lt;/clr-alert>
    &lt;clr-alert slot="alert" kind="warning" text="Warning!">&lt;/clr-alert>
    &lt;clr-alert slot="alert" kind="error" text="Error!">&lt;/clr-alert>
  &lt;/clr-alert-center>
  <br>
  </code></pre></blockquote>
<p>This component is meant to house the clr-alerts</p>
<br><br>

<h2>clr-alert</h2>
<blockquote><pre><code>
  &lt;clr-alert slot="alert" kind="info" text="content goes here">&lt;/clr-alert>
  <br>
</code></pre></blockquote>
<br><br>

<h2>clr-card</h2>
<blockquote><pre><code>
    &lt;clr-card title="Card Title Text" subtitle="this is sub title text" href="#" size="third">
      &lt;img slot="img" height="130px" src=" "/>
      &lt;div slot="card-body">content in this area will be shown</div>
      &lt;div slot="card-expand-body">Any content in this area is hidden until expanded.</div>
    &lt;/clr-card
    <br>
</code></pre></blockquote>
<br><br>

<h2>clr-carousel</h2>
<blockquote><pre><code>
  &lt;clr-carousel size="third">
    &lt;clr-slide slot="slide" bgURL="slide-bg-1.png" mainTitle="First Title" mainContent="this is the content of the first slide" imgURL="slide-img-1.png" bgRepeat="yes">&lt;/clr-slide>-img
    &lt;clr-slide slot="slide" bgURL="slide-bg-2.png" mainTitle="Second Title" mainContent="this is the content of the Second slide" imgURL="slide-img-2.png" bgRepeat="yes">&lt;/clr-slide>
  &lt;/clr-carousel>
  <br>
</code></pre></blockquote>
<br><br>

<h2>clr-drop-expand</h2>
<blockquote><pre><code>
  &lt;clr-drop-expand text="visible content of first expand" href="#">
    &lt;a slot="link" href="#one">One</a>
    &lt;clr-drop-expand slot="link" text="visible content of second expand" href="#">
      &lt;a slot="link" href="#two">One</a>
    &lt;/clr-drop-expand>
  &lt;/clr-drop-expand>
  <br>
</code></pre></blockquote>
<br><br>

<h2>clr-drop-link</h2>
<blockquote><pre><code>
  &lt;clr-drop-link slot="link" text="text for the link" href="#1" target="_blank">
    &lt;a slot="link" href="#one">One&lt;/a>
    &lt;a slot="link" href="#two">Two&lt;/a>
    &lt;a slot="link" href="#three">Three&lt;/a>
    &lt;clr-drop-link slot="link" text="text for the link" href="#2">
      &lt;a slot="link" href="#one">One<&lt;a>
      &lt;a slot="link" href="#two">Two&lt;/a>
    &lt;/clr-drop-link>
  &lt;/clr-drop-link>
  <br>
</code></pre></blockquote>
<br><br>

<h2>clr-footer</h2>
<blockquote><pre><code>
  <br>
</code></pre></blockquote>
<br><br>

<h2>clr-header</h2>
<blockquote><pre><code>
  <br>
</code></pre></blockquote>
<br><br>

<h2>clr-icon</h2>
<blockquote><pre><code>
  <br>
</code></pre></blockquote>
<br><br>

<h2>clr-icon-btn</h2>
<blockquote><pre><code>
  <br>
</code></pre></blockquote>
<br><br>

<h2>clr-left-drawer</h2>
<blockquote><pre><code>
  <br>
</code></pre></blockquote>
<br><br>

<h2>clr-nav</h2>
<blockquote><pre><code>
  <br>
</code></pre></blockquote>
<br><br>

<h2>clr-nav-btn</h2>
<blockquote><pre><code>
  <br>
</code></pre></blockquote>
<br><br>

<h2>clr-pill</h2>
<blockquote><pre><code>
  <br>
</code></pre></blockquote>
<br><br>

<h2>clr-pn-btn</h2>
<blockquote><pre><code>
  <br>
</code></pre></blockquote>
<br><br>

<h2>clr-popup-btn</h2>
<blockquote><pre><code>
  <br>
</code></pre></blockquote>
<br><br>

<h2>clr-side-menu</h2>
<blockquote><pre><code>
  <br>
</code></pre></blockquote>
<br><br>

<h2>clr-slide</h2>
<blockquote><pre><code>
  <br>
</code></pre></blockquote>
<br><br>

<h2>clr-wheel-ui</h2>
<blockquote><pre><code>
  <br>
</code></pre></blockquote>
<br><br>



















![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

