---
layout: page
show: "true"
indexthis: "true"
title: "The top-5 worst foods for my diabetes"
thumbnail: "badfoods-reuben.jpg"
thumbnailinpost: "yes"
alt: "This is a picture of a super-delicious swiss-cheese Reuben sandwich ordered at Katz's off Houston in NYC. It's delicious but not something I'd eat every day"
date: 2016-05-24
category: "nutrition"
excerpt: "This is a list of foods that a diabetic should avoid"
---

# The foods I avoid: These will spike your plasma glucose and lay on fat like nobody's business!

{% assign foods = site.worstfoods | sort: 'Top5' %}
{% for food in foods %}

## {{ food.Name }} (rated {{ food.Top5 }} in my top-5 worst foods)  

{{ food.Why }}

{% endfor %}

<p style="clear: both;">&nbsp;</p>
