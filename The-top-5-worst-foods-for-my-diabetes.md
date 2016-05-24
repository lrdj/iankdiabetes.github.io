---
layout: page
show: "true"
title: "The top-5 worst foods for my diabetes"
---

# The foods I avoid: These will spike your plasma glucose and lay on fat like nobody's business!

{% assign foods = site.worstfoods | sort: 'Top5' %}
{% for food in foods %}

## {{ food.Name }} (rated {{ food.Top5 }} in my top-5 worst foods)  

{{ food.Why }}

{% endfor %}

<p style="clear: both;">&nbsp;</p>

