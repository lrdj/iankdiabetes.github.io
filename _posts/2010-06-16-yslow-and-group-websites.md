---
layout: post
title: "YSlow and group websites"
date: 2010-06-16 10:24:33
description: "Hi, I was looking at the websites (currys, dixons and pcworld) performance through YSlow &amp; Alexa and noticed peformance isnt as optimised as it could be. Alexa rates pcworld page load as 3.089 seconds, which could be improved with some&#8230;"
thumbnail: defaultThumbnail.png
alt: ""

tags: performance, usability
author: darren
---

<p>Hi,</p>

<p>I was looking at the websites (currys, dixons and pcworld) performance through YSlow &amp; Alexa and noticed peformance isnt as optimised as it could be. Alexa rates pcworld page load as 3.089 seconds, which could be improved with some modifications to how the site is constructed.</p>

<p>Firstly, PCworld makes multiple <span class="caps">HTTP </span>requests (see below) which renders the page load to a crawl. As it stands slow page load is caused (at least in part) by the browser having to make multiple requests for files and images before completing the request</p>

<ul>
<li><em>This page has 16 external Javascript scripts. Try combining them into one.</em></li>
<li><em>This page has 3 external stylesheets. Try combining them into one.</em></li>
<li><em>This page has 34 external background images. Try combining them with <span class="caps">CSS </span>sprites.</em></li>
</ul>

<p>Concatenation of the css and js would improve this. Also js script includes should be at the bottom of the page as the <span class="caps">HTTP </span>requests wait for this to load before the page is loaded by the browser. Additionally creating css sprites for core UI elements should be investigated.</p>

<p>Another option for images or js/css files would be to use a <span class="caps">CDN </span>or seperate domains for resources, so that multiple <span class="caps">HTTP </span>requests can be made in parallel.</p>

<p>Perhaps a dev would be able to look at minifying js and css files to remove whitespace characters. </p>

<p>Why bother? It may seem not worth the while but these small optimisations of the websites would benefit the overall experience and load time when stacked up against all the other changes. Research shows that slow sites can effect <span class="caps">SEO.</span></p>

<p><a href="http://developer.yahoo.com/performance/rules.html">http://developer.yahoo.com</a></p>

<p>Just my tuppence worth, feel free to use as you wish</p>

<p>Darren</p>
