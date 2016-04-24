---
layout: post
title: "A look at the Zopa logon interface"
date: 2007-05-11 12:50:24
description: "I closed my Zopa account yesterday and requested the paypal funds I had invested be returned to my Paypal account. The folk on the phone were helpful and courteous but I can&#8217;t help feeling a bit amazed by the experience&#8230;"
thumbnail: defaultThumbnail.png
alt: ""
category: 
tags: usability, zopa
author: dug
---

<p>I closed my Zopa account yesterday and requested the paypal funds I had invested be returned to my Paypal account. The folk on the phone were helpful and courteous but I can't help feeling a bit amazed by the experience (Zopa is supposed to be a great site, so perhaps my expectations were inflated).</p>

<p>I'm reluctant to pointlessly hurl vitriol at the company because on balance, while the experience ultimately sucked, there were some very good bits as well as bad to the service.</p>

<h2>The good news:</h2>

<ul>
<li>Brilliant idea, cuts out the middle-men</li>
<li>UK-based telephone support</li>
<li>Friendly staff</li>
<li>Beautiful design</li>
<li>Secure (https) email system</li>
</ul>

<h2>The bad:</h2>

<ul>
<li>The risk-to-interest rate ratio</li>
<li>An email support loop that didn't resolve my difficulty</li>
<li>The interface experience</li>
</ul>

<p>It's this last problem that pushed this Zopa customer over the edge. It's interesting to see how superficially minor problems in the user interface can have such a large impact.</p>

<p>The interface really is very beautiful, but it degrades quickly once you start clicking around. To be fair, I wasn't able to explore the whole service, and in particular I never got to the 'magic moment' of actually lending or borrowing funds (I did try). But the journey I did manage was a rough one. The problems seem to arise from the site's scripts. </p>

<p>Two items caused me to fail my tasks. The first is a javascript validator that prevented me from successfully choosing and saving my security details (this should be really easy to fix) and the second is a series of redirects and cookie-setting choices that mean I didn't get feedback as to where I was in the lending process (I got as far as getting cash to lend into the system but never managed to set up a loan).</p>

<p>The Javascript thing makes an interesting example of how things can go wrong. </p>

<h2>Here's what happened (if you can't read the text, click on the images for a larger version):</h2>

<p>Step one--I tried to complete the logon form like this:</p>

<p><a href="http://www.donkeyontheedge.com/i/zopa/dug_falby_logon_00.png"><img alt="dug_falby_logon_00.png" src="http://www.donkeyontheedge.com/i/zopa/dug_falby_logon_00-thumb.png" width="370" height="236" style="border:1px solid #ccc;margin-bottom:2em;" /></a></p>

<p>Which returned this screen:</p>

<p><a href="http://www.donkeyontheedge.com/i/zopa/dug_falby_logon_01.png"><img alt="dug_falby_logon_01.png" src="http://www.donkeyontheedge.com/i/zopa/dug_falby_logon_01-thumb.png" width="370" height="284" style="border:1px solid #ccc;margin-bottom:2em;" /></a></p>

<p>Now I always assume I've done something wrong when a form comes back like this so I also tried this:</p>

<p><a href="http://www.donkeyontheedge.com/i/zopa/dug_falby_logon_015.png"><img alt="dug_falby_logon_015.png" src="http://www.donkeyontheedge.com/i/zopa/dug_falby_logon_015-thumb.png" width="370" height="27" style="border:1px solid #ccc;margin-bottom:2em;" /></a></p>

<p>and this:</p>

<p><a href="http://www.donkeyontheedge.com/i/zopa/dug_falby_logon_02.png"><img alt="dug_falby_logon_02.png" src="http://www.donkeyontheedge.com/i/zopa/dug_falby_logon_02-thumb.png" width="370" height="27" style="border:1px solid #ccc;margin-bottom:2em;" /></a></p>

<p>and this:</p>

<p><a href="http://www.donkeyontheedge.com/i/zopa/dug_falby_logon_05.png"><img alt="dug_falby_logon_05.png" src="http://www.donkeyontheedge.com/i/zopa/dug_falby_logon_05-thumb.png" width="370" height="27" style="border:1px solid #ccc;margin-bottom:2em;" /></a></p>

<p>and even, after taking a long look at the "dd/MM/yyyy" prompt:</p>

<p><a href="http://www.donkeyontheedge.com/i/zopa/dug_falby_logon_055.png"><img alt="dug_falby_logon_055.png" src="http://www.donkeyontheedge.com/i/zopa/dug_falby_logon_055-thumb.png" width="370" height="27" style="border:1px solid #ccc;margin-bottom:2em;" /></a></p>

<p>All of these returned the message: </p>

<p><em>Oops, please check that the memorable date is correctly formatted and between the years 1753 and 9999</em></p>

<p>(I did finally get in by typing the numerical equivalent of asdfasdf which of course meant I couldn't retype the date when later prompted for it)</p>

<h2>Some possible solutions?</h2>

<p>Option one, the bare minimum. Change the text of the error message so that it contains an imperative. It should read "do this and achieve that" not "this might be wrong".</p>

<p><a href="http://www.donkeyontheedge.com/i/zopa/better01.png"><img alt="better01.png" src="http://www.donkeyontheedge.com/i/zopa/better01-thumb.png" width="370" height="260" style="border:1px solid #ccc;margin-bottom:2em;" /></a></p>

<p>Option two, if the date range is so important (remember the original error that specified a range from 1753 to 9999) then don't allow the user to input an out of range date. Give them a select statement which only contains valid years.</p>

<p><a href="http://www.donkeyontheedge.com/i/zopa/better02.png"><img alt="better02.png" src="http://www.donkeyontheedge.com/i/zopa/better02-thumb.png" width="370" height="236" style="border:1px solid #ccc;margin-bottom:2em;" /></a></p>

<p>Option three, make the error message specific to what is wrong and suggest a correct alternative. Offer links to fix the problem.</p>

<p><a href="http://www.donkeyontheedge.com/i/zopa/better03.png"><img alt="better03.png" src="http://www.donkeyontheedge.com/i/zopa/better03-thumb.png" width="370" height="303" style="border:1px solid #ccc;margin-bottom:2em;" /></a></p>

<p>Finally, as I was about to hang up from my last call with the nice folk in customer support, I was told that the system didn't work in Firefox and that I needed to use Internet Explorer. Yes, she actually, really, did said that...</p>
