---
layout: post
title: "Easter holiday fun"
date: 2012-04-15 10:44:45
description: "Building MT5 on iPad2 Well, I&#8217;ve been trying to get this to work for ages (yes, utterly pointless I know) but the screengrab below is from an iPad 2 running Movable Type 5. If you&#8217;ve built MT before you&#8217;ll know&#8230;"
thumbnail: MT5_iPad2_MetroUI.png
alt: "MT5_iPad2_MetroUI.png"

tags: iPad, movable type, movabletype, mt5, Sharepoint
author: dug
---

<h2>Building <span class="caps">MT5 </span>on iPad2</h2>

<p>Well, I've been trying to get this to work for ages (yes, utterly pointless I know) but the screengrab below is from an iPad 2 running <a href="http://movabletype.org">Movable Type 5</a>. If you've built MT before you'll know this is a happy screen:-) </p>

<p>The box is built with <a href="http://www.lighttpd.net/">lightty</a> as the web server, <a href="http://www.sqlite.org/">sqlite</a> as the driven database and <a href="http://coredev.nl/cydia/dists/iphone/main/binary-iphoneos-arm/">Cydia Perl p5</a> </p>

<p><a href="http://donkeyontheedge.com/assets_c/2012/04/installationMT5-700.html" onclick="window.open('http://donkeyontheedge.com/assets_c/2012/04/installationMT5-700.html','popup','width=1024,height=768,scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=0,top=0'); return false"><img src="http://donkeyontheedge.com/assets_c/2012/04/installationMT5-thumb-580x435-700.png" width="640" foo="435" alt="installationMT5.png"  style="" /></a></p>

<p>So far the only thing I haven't been able to work out is how to map "choose file" httpd post file uploads to the iPad "choose file from Air Sharing, Keynote etc." so all the "choose file" functions don't work. Not surprisingly there's not a lot of Google-searchable content on the topic... </p>

<p>Will keep looking:-)</p>

<h2>Metro <span class="caps">UI,</span> Sharepoint, iPad etc</h2>

<p>As part of my thinking about tablet-based experiences, I've been playing with the <a href="http://en.wikipedia.org/wiki/Metro_(design_language)">Metro UI</a> at work. </p>

<p>It's a really interesting project whereby a design framework is influencing the culture of a major technology company and bringing the UI of its software products into a really interesting space. The Metro project is still relatively young but it is sufficiently mature for enterprise product and software people to begin thinking about how the framework might help them connect all their stuff. </p>

<p>Over Easter I put a skin together as an experiment to show what a hypothetical enterprise Sharepoint web <span class="caps">CMS </span>installation might look like on iPad using the Metro visual language as a way to tie the different channel experiences together:</p>

<p><a href="http://donkeyontheedge.com/assets_c/2012/04/MT5_iPad2_MetroUI-703.html" onclick="window.open('http://donkeyontheedge.com/assets_c/2012/04/MT5_iPad2_MetroUI-703.html','popup','width=1024,height=768,scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=0,top=0'); return false"><img src="http://donkeyontheedge.com/assets_c/2012/04/MT5_iPad2_MetroUI-thumb-580x435-703.png" width="640" foo="435" alt="MT5_iPad2_MetroUI.png"  style="" /></a></p>

<p>Sharepoint has many more features than Movable Type but there are enough cross-overs to make this experiment interesting. Here are the primary UI tweaks to date for any curious <span class="caps">MT5 </span>people out there:</p>

<ul>
<li>Break "scope" nav object into two separate components 1) a drop-down list to set operating context and 2) a large &lt;h1&gt; title to give you strong situational awareness (this last item feels like a big improvement on stock <span class="caps">MT5</span> UI</li>
<li>Move "create new" menu items into a Metro-style "app bar" or "Charms bar" (haven't decided which to go with yet). These are nice as they become contextual the bar icons update based on application context</li>
<li>Move top-bar universal links (view site, search, rebuild) to this same app bar</li>
<li>Kill left-hand-nav and reload as a horizontal-scroll experience across the top of the main editing area. This isn't working yet but I've grabbed the jQuery from <a href="http://naghsheh.info/Pivot/Pivot.htm">jqMetro</a> which works well and looks great on the iPad</li>
<li>Use the Metro "back" arrow to provide a universal hook back to the "user dashboard" - kind of a "hyperspace" button for when you get confused</li>
<li>Serve the Segoe UI font in the <span class="caps">CSS</span></li>
</ul>

<p>One the the interesting user experience bits I've come across as I hacked the <span class="caps">CMS </span>templates was the behavior of the main left-hand-nav elements. </p>

<p>When I started pulling the 6A UI apart, one of my first worries was how was I going to handle the secondary nav items in the main left-hand-nav (things like "new", "manage" etc). What I found was that almost all of these links were un-necessary and most functions were accessible by hitting the left-hand-nav primary items ("tags", "comments", "members" etc). I say almost because I did find a few dead-ends but most were covered by either the publishing context drop-down or in-page links.</p>

<p>Mostly still broken and lots still to do but a fun holiday project:-)</p>
