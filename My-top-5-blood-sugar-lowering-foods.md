---
layout: page
title: "My top-5 blood-sugar-lowering foods"
---

<h1>Foods that will help you lower your plasma glucose</h1>

<ul style="list-style:none;padding-left:0;width:98%">
{% for bestfood in site.bestfoods %}
  <li style="width:98%"><a class='bestfood-title' href='#'>{{ bestfood.name }}</a><span style="display: inline-block;float: right;">// {{ bestfood.why }} / rated {{ bestfood.top5 }} in the Top-5</span></li>
{% endfor %}
</ul>

<p style="clear: both;">&nbsp;</p>



