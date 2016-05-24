---
layout: page
title: "My top-5 blood-sugar-lowering foods"
---

# Foods that will help you lower your plasma glucose

{% assign foods = site.bestfoods | sort: 'Top5' %}
{% for food in foods %}

## {{ food.Name }} (rated {{ food.Top5 }} in my top-5)  

{{ food.Why }}

{% endfor %}

<p style="clear: both;">&nbsp;</p>

