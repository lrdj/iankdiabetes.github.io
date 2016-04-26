---
layout: post
title: "Wordpress v. Movable Type"
date: 2008-07-24 13:37:26
description: "Disclamer --  We&#8217;ve had a bit of an ongoing debate on this one with Anil fanning the flames as he tries to support the MT cause. I should disclose that I&#8217;m a member of the Six Apart Professional Network and also&#8230;"
thumbnail: defaultThumbnail.png
alt: ""
category: 
tags: movable type, movabletype, mt, mt4, mtengine, wordpress
author: dug
---

<p><i><small>Disclamer: We've had a bit of an ongoing debate on this one with Anil <a href="http://www.techcrunch.com/2008/03/11/six-apart-takes-aim-at-wordpress-users-wordpress-pissed/">fanning the flames</a> as he tries to support the MT cause. I should disclose that I'm a member of the Six Apart Professional Network and also a 6A partner for the Paris office just so's you know...</small></i></p>

<p>While I'm a long-time Movable Type fan and user, I remember the first time time I installed Wordpress. What a treat, the thing was completely painless and took no time at all. I was way impressed and have been since. Added to functionality, the open-source community around Wordpress has spawned a huge templating and design resource with hundreds of very high-quality designs for the lay blogger to chose from. In fact, for many a year I considered switching to Wordpress and was only prevented by the thought of having to maintain security on a php installation and how I would handle any serious load should one of my client's projects really take off.</p>

<p>Now I've pretty much stopped worrying about this in much the same way as I've given up on the flash/no-flash, mac/pc, tomato/tomahhto arguments&mdash;they seem a bit pointless and on average both options/solutions have their merits.</p>

<p>I had an experience of doing some migration and configuring last night which brought to light some issues I hadn't yet come across in any Wordpress v. Movable Type discussions. I was trying to replicate behaviours from an MT installation into a series of WP ones and came across the following difficulties where Wordpress let me down:</p>

<ul>
<li>I couldn't perform a search and replace of strings across blogs and their pages, entries, comments and templates. To get the job done I had to edit template and entry data outside of the WP environment</li>
<li>I couldn't use my global templates. I use these to configure global variables that several blogs can then share (in particular, I use primarily to manage root path across different systems and to avoid multiblog-calling-itself errors)</li>
<li>I couldn't re-use my user configurations across blogs and if I wanted to set up an admin to cover more than one blog I couldn't re-gen their password</li>
<li>Cutting and pasting, or generally moving data between templates across blogs was very unproductive (ended up jumping between Firefox tabs)</li>
<li>There were two other things that got up my nose and I'll get them down here as soon as I remember them...</li>
</ul>

<p>Before the WPfanboys jump on me, <span class="caps">YES,</span> I understand there are workarounds, upgrades, plugins and other fixes to the above and of course I'm going to struggle working in an environment that isn't my first choice. I simply wanted to list these experiences as I hadn't seen them outlined anywhere else.</p>
