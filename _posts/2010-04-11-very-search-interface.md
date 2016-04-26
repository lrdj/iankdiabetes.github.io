---
layout: post
title: "Very search interface"
date: 2010-04-11 10:08:58
description: "I recently tried out the @verynetwork web store to get a feel for what retailers are up to these days. This store is run by the same company that redeployed Woollies as a digital pure-play but doesn&#8217;t have the brand&#8230;"
thumbnail: defaultThumbnail.png
alt: ""

tags: error, fail, retail, search, trapping, ui, ux, validation, very
author: dug
---

<p>I recently tried out the <a href="http://twitter.com/verynetwork">@verynetwork</a> web store to get a feel for what retailers are up to these days. This store is run by the same company that redeployed <a href="http://www.woolworths.co.uk/">Woollies</a> as a digital pure-play but doesn't have the brand equity that Woolworths does. Incidentally, the fact they've launched a <a href="http://www.woolworthsparty.co.uk/">party-specific url</a> suggests they've done a lot to understand the needs of the average Woollies customer.</p>

<p>One thing I find intriguing about <a href="http://very.co.uk">very.co.uk</a> is they sell high-street fashion and electricals from the same interface. Nothing wrong with this, just that traditionally, we all felt the electricals customer expected a certain level of specialisation and expertise from her vendor.</p>

<p>Anyways, I just wanted to mention that my test went well and my new jumper arrived swiftly and was entirely as described including the sizing which is often a problem for me.</p>

<p>On the down side, as a test to see how Very went about selling tellies, I did a search from the home page (search bar in an unusual position, I'd be curious to see their test data on that) for a 32 inch Sonia Bravia and got the error message above.</p>

<p>My guess is that the client-side validation script was written by a <span class="caps">PHP </span>jockey (because <span class="caps">PHP </span>is vulnerable to <span class="caps">POST</span>ed code, often included in double-quotes). By trapping the double quote, the browser robbed the ecommerce system of an opportunity to parse my query and sell me a <span class="caps">TV. </span></p>

<p>I'd much prefer the browser to send the garbage to the server and let the server do the heavy lifting, that way I increase the chance of returning an engaging search result.</p>

<p>Come on Very, you've got it mostly right, why not let your customer search for a 48" chest or a 50" television or a 19" monitor?</p>
