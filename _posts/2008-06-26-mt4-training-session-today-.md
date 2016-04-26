---
layout: post
title: "MT4 training session today -- -)"
date: 2008-06-26 11:21:57
description: " 9 minutes and 22 seconds to rebuild Donkey. That feels pretty slow and this is on 4.2 release-candidate 2. The same site on MT3.36 on the same box with the same DBserver rebuilds in 7 minutes 28 seconds. My&#8230;"
thumbnail: defaultThumbnail.png
alt: ""
category: 
tags: mt, mt4, mtengine, Six Apart
author: dug
---

<p><img alt="9_minutes_22_seconds.gif" src="http://www.donkeyontheedge.com/i/9_minutes_22_seconds.gif" width="370" height="313" /></p>

<p><em>9 minutes and 22 seconds</em> to rebuild Donkey. That feels pretty slow <em>and</em> this is on 4.2 release-candidate 2. The same site on <span class="caps">MT3.36 </span>on the same box with the same DBserver rebuilds in 7 minutes 28 seconds.</p>

<p>My guess is that I should bin all the templates and rebuild from scratch. As it stands today, I migrated the 3.36 database that the site currently lives in over to 4.2rc2 lock stock and barrell without doing any pruning beforehand. Next experiment will be recreating the site from scratch.</p>

<p>So it's a good thing Maarten is running a training session on template optimisation today :-)</p>

<p>(I should add that the migration from 3.36 to 4.2 is completely painless and largely automatic. The issue on the table with 4.2 is what the Six Apart site describes as "raw performance" hence my test above)</p>
