---
layout: post
title: "Once again, Chrimble sets the record straight  -- -)"
date: 2002-11-17 00:42:04
description: "8266679"
thumbnail: defaultThumbnail.png
alt: ""


author: dug
---

<p>Hi Dug</p>

<p>Just read your latest blog entry, and I think you're needlessly worrying. In fact, I think that the faster processors get, the <strong>better</strong> it is for perl. Especially with version 6 coming out in the next year or two (they're aiming for a minimum of twice the speed on the same operations in the worst case).</p>

<p>But we're getting ahead of ourselves here. Perl isn't particularly memory intensive, yes, it likes <span class="caps">RAM </span>but it's not the be all and end all. It depends what you're doing. All programming languages are the same in that in most cases, you're IO bound. Doesn't matter if you're coding in assembler or Visual Basic when you're waiting for data to arrive before you can start to process it. The phenomenon is language independent, especially when you're dealing with a lot of data. As perl apps, generally, are wont to do.</p>

<p>If you're looking to run an analysis on a tiny amount of data that'll fit into the processor cache, then yes. Perl probably wouldn't be a good option. But in those instances, it's <strong>never</strong> been a good option, and it probably never will be. Code in assembler or C if you absolutely need raw performance on a small amount of data. Code in perl if you're processing lots of data, and you'd like to minimise the amount of time you actually spend developing the application in the first place.</p>

<p>At the end of the day, perl is a rapid application development (RAD) tool. A custom C program will always beat a perl program running on the same hardware. It's just that 95% of all computing applications (a) don't really need that kind of raw performance and (b) you want to spend as little time as possible developing your applications - after all, time is money.</p>

<p>At the end of the day, if programs are <em>waiting</em> for data more than they are actually <em>processing</em> that data, then it's good news for perl as it closes the gap between itself and the "performance" languages on the same task as it gets a chance to catch up during the waiting parts. 8)</p>

<p>An over-simplification, I know, but that's the gist of my argument in any case!</p>

<p>cheers,</p>

<p>Chris</p>
