---

---
// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('category')
  this.field('tags')
  this.ref('id')
});
{% assign count = 0 %}{% for post in site.posts limit:300 %}
index.add({
  title: {{post.title | jsonify}},
  category: {{post.category | jsonify}},
  content: {{post.content | strip_html | jsonify}},
  tags: {{post.tags | jsonify}},
  id: {{count}}
});{% assign count = count | plus: 1 %}{% endfor %}
{% for page in site.pages limit:300 %}{% if page.indexthis == "true" %}index.add({
  title: {{page.title | jsonify}},
  category: {{page.category | jsonify}},
  content: {{page.content | strip_html | jsonify}},
  tags: {{page.tags | jsonify}},
  id: {{count}}
});{% assign count = count | plus: 1 %}
{% endif %}{% endfor %}console.log( jQuery.type(index) );


// builds reference data
var store = [{% for post in site.posts limit:300 %}{
  "title": {{post.title | jsonify}},
  "link": {{ post.url | jsonify }},
  "image": {{ post.thumbnail | prepend: site.thumbURL | jsonify }},
  "date": {{ post.date | date: '%B %-d, %Y' | jsonify }},
  "category": {{ post.category | jsonify }},
  "excerpt": {{ post.content | strip_html | truncatewords: 20 | jsonify }}
}{% unless forloop.last %},{% endunless %}{% endfor %},{% for page in site.pages limit:300 %}{% if page.indexthis == "true" %}{
  "title": {{page.title | jsonify}},
  "link": {{ page.url | jsonify }},
  "image": {{ page.thumbnail | prepend: site.thumbURL | jsonify }},
  "date": {{ page.date | date: '%B %-d, %Y' | jsonify }},
  "category": {{ page.category | jsonify }},
  "excerpt": {{ page.content | strip_html | truncatewords: 20 | jsonify }}
}{% unless forloop.last %},{% endunless %}{% endif %}{% endfor %}]


// builds search
$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    // Get query
    var query = $(this).val();
    // Search for it
    var result = index.search(query);
    // Show results
    resultdiv.empty();
    // Add status
    resultdiv.prepend('<p class="">Found '+result.length+' result(s)</p>');
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = '<div class="result"><img src="'+store[ref].image+'" alt="'+store[ref].title+'" class="result-img"><div class="result-body"><a href="'+store[ref].link+'" class="post-title">'+store[ref].title+'</a><div class="post-date small">'+store[ref].category+' &times; '+store[ref].date+'</div><p>'+store[ref].excerpt+'</p></div>';
      resultdiv.append(searchitem);
    }
  });
});
