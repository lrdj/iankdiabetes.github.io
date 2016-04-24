---
layout: post
title: "White-labelling with CSS"
date: 2004-08-24 13:34:38
description: "Met a nice man called Mark Panay at a company in Bristol last week and he kindly asked me to do some CSS for a white-label system he&#8217;s developed. It&#8217;s always fun to put the standards-based stuff to the test&#8230;"
thumbnail: defaultThumbnail.png
alt: ""


author: dug
---

<p>Met a nice man called Mark Panay at <a href="http://www.yrmedia.com/">a company in Bristol</a> last week and he kindly asked me to do some <span class="caps">CSS </span>for a white-label system he's developed.</p>

<p>It's always fun to put the standards-based stuff to the test on a real commercial system with real-world limitations and a stroppy client (actually, Mark couldn't have been more charming, but you know what I mean). Luckily, these guys had done a nice job of writing stripped-out semantic <span class="caps">XHTML.</span> The system has a few different parts and my only concern was that certain logical objects get redefined rather that simply re-used so the style sheet was a little longer than it needed to be. Browser spec requirement was Mozilla-like on PC and Mac, with <span class="caps">IE6 </span>on WinXP and Safari on <span class="caps">OSX.</span> Finally, the stylesheet had to override (if necessary) a 'base' stylesheet that was used to <code>display:none;</code> some parts of the document...</p>

<p>The system is now live over at http://www.twocultureclash.com except I don't think they've got their Futuresplash designer to update his 200 Megabyte .swf file so in the meantime, here's a Javascript <a href="javascript:window.open('http://www.yrmedia.com/theshop/shop.asp?sid=2f5a110002b4e72e3ffe3a5aeae72e74','','width=800,height=600,status=1')">popup window</a>. Try turning stylesheets on and off for extra edification or amusement (if you're a sad web-designery-type-person...)</p>

<p>I've always found <code>overflow:scroll</code> to be a source of considerable grief and have usually coded around it, but it seems to work quite well here... <em>queue irate comments from Opera users ;-)</em></p>
