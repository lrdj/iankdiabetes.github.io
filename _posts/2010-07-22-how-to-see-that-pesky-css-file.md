---
layout: post
title: "How to see that pesky CSS file."
date: 2010-07-22 15:00:22
description: "One issue that we have found is waiting for CSS files to cache through. Clearcache wont clear this but here is a way around it for Firefox only but you will be able to see the page upadated. In firebug&#8230;"
thumbnail: defaultThumbnail.png
alt: ""


author: tim
---

<p>One issue that we have found is waiting for <span class="caps">CSS </span>files to cache through.  Clearcache wont clear this but here is a way around it for Firefox only but you will be able to see the page upadated. </p>

<p>In firebug simply find the css file in the header. <br />
<link media="screen, projection" type="text/css" href="http://currys2010.pan.e-merchant.com/css/themes/Delivery.css?staticVersion=1" rel="stylesheet"></p>

<p>and change the staticVersion number...Delivery.css?staticVersion=123</p>

<p>And there you go you can see the <span class="caps">CSS </span>file.  </p>

<p>Thanks</p>

<p>Tim</p>
