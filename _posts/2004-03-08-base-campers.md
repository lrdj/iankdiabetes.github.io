---
layout: post
title: "Base campers"
date: 2004-03-08 16:05:45
description: "13874689"
thumbnail: defaultThumbnail.png
alt: ""


author: dug
---

<p>So I've been using <a href="http://www.basecamphq.com/">Basecamp</a> as the project extranet for the Lecture List. It's just fantastic to see a web-based tool so well implemented, it's a beauty, it's fast, it just works very very well :-)</p>

<p>One of the interface details is "fade" pannels--areas that are bright yellow on pageload, but very quickly fade to white. </p>

<p>The idea is sound--let's say you've just added a comment to a long list of comments. Once you click on "add my comment" the page reloads and in the process you/05/"loose your place" visually on the returned page. The "fade" pannel takes your eye right back to where you were adding something. A simple device, but very cool:-)</p>

<p>I implemented a similar fade-to-white effect as a page transition on the <a href="http://www.pumpernickle.net/">Pumpernickle</a> site. At the time I was in the thick of another Flash-or-no-Flash argument (*yawn*) on a bulletin board and I sort of wrote it to prove to someone that you could make smooth, beautiful transitions without plugings.</p>

<p>Anyway, I'm no programmer, but I got something dirty together and it's served well over the last few years. </p>

<p>I was curious to see how <a href="http://www.37signals.com">37Signals</a> had solved the interval-time and colour-step array problems (I ended up with two arrays--one for decreasing time steps and one for colours).</p>

<p>I just wanted to say "wow". We are soooo not worthy;-) The 37S javascript file is absolutely tiny, the system uses only one array, the function that does the job is four lines of code and it's called recursively (of course). </p>

<p>If I was starting off in this industry I'd want a job in Chicago :-)</p>
