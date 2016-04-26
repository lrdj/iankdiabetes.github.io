---
layout: post
title: "MT4 user permissions"
date: 2008-04-11 10:40:56
description: " A little confused by the implementations of permissions in MT41 &#8212; Are these &#8216;permission tokens&#8217;, fragments of data that exist independently of the user-object? I mean I get it that --  user + blog + role = permission but how&#8230;"
thumbnail: defaultThumbnail.png
alt: ""
category: 
tags: 6A, movable type, movabletype, mt, Six Apart
author: dug
---

<p><a href="http://www.donkeyontheedge.com/i/mt41_permissions.png"><img alt="mt41_permissions.png" src="http://www.donkeyontheedge.com/i/mt41_permissions-thumb.png" width="370" height="144" /></a></p>

<p>A little confused by the implementations of permissions in <a href="http://movabletype.org/"><span class="caps">MT41</span></a> -- Are these 'permission tokens', fragments of data that exist independently of the user-object? I mean I get it that:</p>

<p>user + blog + role = permission</p>

<p>but how does this interface (or datastructure?) express nested permissions? Or in other words, shouldn't the "moderator" role for user = James be superceded by his "administrator" role? </p>

<p>New stuff from <a href="http://www.sixapart.com/">6A</a> is usually rock solid so I'm guessing there's a valid reason for the above...</p>
