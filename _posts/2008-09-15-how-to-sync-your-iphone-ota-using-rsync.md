---
layout: post
title: "How to sync your iPhone OTA using rsync"
date: 2008-09-15 09:32:29
description: "Well you can&#8217;t, or at least I can&#8217;t -- -( Instead, I have to tether my device to a master file system (my PowerBook) using a funny white stringy thing that need to keep in my bag (my usb cable). Both my&#8230;"
thumbnail: defaultThumbnail.png
alt: ""
category: Techno-bollocks
tags: iPhone, rsync
author: dug
---

<p>Well you can't, or at least I can't:-(</p>

<p>Instead, I have to tether my device to a master file system (my PowerBook) using a funny white stringy thing that need to keep in my bag (my usb cable).</p>

<p>Both my laptop and my phone are running FreeBSD, an advanced, Unix operating system the runs <a href="http://en.wikipedia.org/wiki/Rsync">rsync</a> (a native unix application all the more fabulous for its power and simplicity) out of the box. Both my laptop and my phone have advanced networking features with options to create or open sockets across a wide array of transports (IP over Firewire anybody?) so why doesn't this just work?</p>

<p>Rsync could run as a cron job and every 15 mins it would try and connect to a known host over the air (including connecting to the host via IP over the cloud, not just bluetooth or 802.11 lan) and voilà! A lovely synced up iPhone without the hassle.</p>

<p>I mean how hard could it be?</p>
