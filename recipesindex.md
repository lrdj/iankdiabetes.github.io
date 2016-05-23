---
layout: page
title: Recipe index page
---

<h1>Currently recipes include the following items</h1>

<ul style="list-style:none;padding-left:0;width:98%">
{% for recipes in site.recipes limit:50 %}
  <li style="width:98%"><a class='post-title' href='{{ recipe.url }}'>{{ recipe.title }}</a><span style="display: inline-block;float: right;">// {{ recipe.date | date_to_long_string }} / by {{ recipe.author }}</span></li>
{% endfor %}
</ul>

<p style="clear: both;">&nbsp;</p>



