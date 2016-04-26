---
layout: post
title: "The amazing shrinking javascript"
date: 2008-01-01 18:21:57
description: "OK, so I occasionally hack some bits of Javascript around to see if manipulating bits of the DOM can produce interesting, unusual or accessible interactions&#8230; These last couple of years I&#8217;ve started looking at frameworks and libraries which on the&#8230;"
thumbnail: defaultThumbnail.png
alt: ""
category: Techno-bollocks
tags: javascript, jquery, scripting, UI
author: dug
---

<p><span class="caps">OK, </span>so I occasionally hack some bits of Javascript around to see if manipulating bits of the <span class="caps">DOM </span>can produce interesting, unusual or accessible interactions... These last couple of years I've started looking at frameworks and libraries which on the whole make the job a lot nicer (from <a href="http://dojotoolkit.org/">Dojo</a> to <a href="http://www.prototypejs.org/">Prototype</a> via <a href="http://jquery.com/">jQuery</a> and <a href="http://mootools.net/">Mootools</a>).</p>

<p>So anyway, here's a nice example I was sent by one of the brainy bunch on the jQuery list. Here's the requirement I started writing with:</p>

<ol>
<li>walk the dom and perform an action on every form object input type=submit (every instance of a submit button on the page)</li>
<li>for each instance, calculate the length of the "value" attribute (the text in the submit button)</li>
<li>assign a class to each submit button on the basis of the size of the above value attribute</li>
</ol>

<p>That is one big-ass script with loops a gogo and a bunch of "if then else" constructs no? Well, this guy has done it in a script which is only 107 (one hundred and seven) characters long:</p>

<code>$('input:submit').each(function(){
var len=this.value.length;
$(this).addClass(len&lt;5?'S':len&gt;20?'L':'M');});</code>

<p>It's both confusing and wonderful and I'm still trying to understand exactly how the whole thing works but if you're interested in this sort of stuff here's the <a href="http://donkeyontheedge.com/jqtest/wizzud.html">example page</a></p>

<p>Ta very much Mr Wizzud:-)</p>
