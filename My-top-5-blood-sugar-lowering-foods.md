---
layout: page
show: "true"
indexthis: "true"
title: "My top-5 blood-sugar-lowering foods"
thumbnail: "goodfoods-meat.jpg"
thumbnailinpost: "yes"
alt: "Yummy Christmas beef from the butchers down at Dart's Farm near Exeter in Devon"
date: 2016-05-24
category: "nutrition"
excerpt: "This is a list of foods that I eat a lot of as part of the drug-free management of my diabetes"
---

# Foods that will help you lower your plasma glucose

{% assign foods = site.bestfoods | sort: 'Top5' %}
{% for food in foods %}

## {{ food.Name }} (rated {{ food.Top5 }} in my top-5)  

{{ food.Why }}

{% endfor %}

<p style="clear: both;">&nbsp;</p>
