---
layout: post
title: "FOWA 2007 day two - Simon Willison on OpenID"
date: 2007-02-21 13:12:12
description: " (This is a Textile rendition of my OmniOutliner file) Not a niche Web authentication sucks Use same password Which account did i use? Email addresses better But which one? What about out of date addresses Too many usernames Too&#8230;"
thumbnail: defaultThumbnail.png
alt: ""
category: Techno-bollocks
tags: FOWA, FOWALondon07, openid, simonwillison
author: dug
---

<p><a href="http://www.flickr.com/photos/bozo/397550126/" title="Photo Sharing"><img src="http://farm1.static.flickr.com/153/397550126_021e212a38_m.jpg" width="240" height="180" alt="Web authentication sucks!" /></a></p>

<p>(This is a <a href="http://www.textism.com/tools/textile/">Textile</a> rendition of my OmniOutliner file)</p>

<ul>
<li>Not a niche</li>
<li>Web authentication sucks<ul>
<li>Use same password</li>
<li>Which account did i use?</li>
<li>Email addresses better<ul>
<li>But which one?</li>
<li>What about out of date addresses</li>
</ul>
</li>
<li>Too many usernames</li>
<li>Too many passwords</li>
<li>Too many forms</li>
</ul>
</li>
<li>Single sign-on will save us<ul>
<li><span class="caps">MSN</span> Passport<ul>
<li>But would you trust these men with your identity?</li>
</ul>
</li>
<li>TypeKey<ul>
<li>Ben and Mena - I trust them now, but what if they turn evil?</li>
</ul>
</li>
</ul>
</li>
<li>OpenID<ul>
<li>Decentralised single sign-on</li>
<li>Identity is a <span class="caps">URI</span><ul>
<li>Shows zoomr.com<ul>
<li>types in url --&gt; redirects to livejournal --&gt; log in to live journal --&gt; grant ID validation --&gt; back to zoomr and login with one string!</li>
</ul>
</li>
<li>But...<ul>
<li>openID attributes (not tokens but still breakable?)</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>Is this decentralised?<ul>
<li>How do we own our own identity?<ul>
<li>I run my own id server (shows link tag)<ul>
<li>jyte.com</li>
</ul>
</li>
<li>Who provides openID?<ul>
<li>bunch of folk (6A, etc)</li>
</ul>
</li>
<li>Other ways to authenticate<ul>
<li>dyndns</li>
<li>jabber</li>
<li>rsa keyfobs</li>
<li>secure certificates</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>One obvious reason to support openID<ul>
<li>Build some OpenID shit now!</li>
<li>Hey, hundreds of early adopters need to create loads of accounts. Give them OpenID</li>
</ul>
</li>
<li>OpenID is an example, of dumb networks<ul>
<li>the intelligence is on the edges</li>
<li>OpenID conforms to the same model</li>
</ul>
</li>
<li>What can we build?<ul>
<li>Shared profile information</li>
<li>Use OpenID to extend the lifetime of cookies</li>
<li>blog / wiki antispam because it saves readers from creating yet another account</li>
<li>Pre-approved accounts</li>
<li>Corp <span class="caps">SSO</span><ul>
<li><span class="caps">OID </span>server behind the firewall</li>
</ul>
</li>
<li>OpenID and microformats<ul>
<li>hCard</li>
<li><span class="caps">XFN</span><ul>
<li>You can import a user's contact by introspecting their OpenID</li>
</ul>
</li>
</ul>
</li>
<li>OpenID site specific hacks<ul>
<li>Login with 'X' id to grab the services you need</li>
</ul>
</li>
<li>Social whitelisting<ul>
<li>Share the whitelist with your friends</li>
<li>Publish the list of <span class="caps">OID</span>s that you trust to comment</li>
</ul>
</li>
<li>Jyte<ul>
<li>Lightweight trust networks<ul>
<li>Comment on 'id claims'</li>
<li>Jyte group export (sort of like social whitelist)</li>
<li>Manage an invite only group using Jyte then hook that into another site's authentication mechanism</li>
</ul>
</li>
</ul>
</li>
<li>Decentralised social network</li>
</ul>
</li>
<li>What sucks about OpenID<ul>
<li>Phishing<ul>
<li>Example of "more kittens" website with man in middle attack<ul>
<li>redirect to evil kitten</li>
</ul>
</li>
<li>Possible solutions<ul>
<li>Card space</li>
</ul>
</li>
<li>We can defeat phishing with competition</li>
<li>Problem can be solved at the edges</li>
</ul>
</li>
<li>What happens in the <span class="caps">OID </span>server crashes?<ul>
<li>One for the applications<ul>
<li>Cascade through multiple OpenIDs with their account</li>
</ul>
</li>
</ul>
</li>
<li>Privacy<ul>
<li>I don't want my boss to know that I'm a furry<ul>
<li>Use multiple OpenIDs<ul>
<li>Pro ID</li>
<li>Furry ID</li>
<li>Gaming etc ID</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>OpenID is hard to explain<ul>
<li>Ready for early adopters</li>
<li>Need to develop this to be able to explain it</li>
</ul>
</li>
</ul>
</li>
<li>(Mentions Tom Coates twice!)</li>
</ul>
