---
layout: post
title: "Thinking about Movabletype plugins"
date: 2006-08-25 16:18:54
description: "Well, I&#8217;ve been thinking about finding a low cost CMS that has both good static page management and nice blogging tools like Movabletype and have looked at a number of options. If it&#8217;s important to stay with static page publishing&#8230;"
thumbnail: defaultThumbnail.png
alt: ""


author: dug
---

<p>Well, I've been thinking about finding a low cost <span class="caps">CMS </span>that has both good static page management and nice blogging tools like <a href="http://www.sixapart.com/movabletype/">Movabletype</a> and have looked at a number of options. </p>

<p>If it's important to stay with static page publishing for scaling and server resource reasons and you believe <span class="caps">PHP </span>has too high a security maintenance overhead for your project, the options start to become quite limited.</p>

<p>In any case, we're still evaluating a couple of options but in the meantime I set about thinking about how one could customise the Movabletype interface in such a way as to integrate static page handling. I set myself a number of requirements:</p>

<ul>
<li>The system would have to allow users with no settings or template-editing priviledges to create static pages (ie I didn't want to go the index-template route)</li>
<li>If possible, the same user should be able to edit the heirarchical tree of pages using an interface she had already learned</li>
<li>The user would have a choice of templates to apply to the new page (these templates to be edited and created by an admin user using the standard template-editing tookit)</li>
<li>The user can choose between standard and index-list page types. The index list page type supports lists of authors, lists of file downloads etc.</li>
</ul>

<p>So I'm working on an idea. I've created a new data type, the 'static page'. In MT-speak, it is the same object as an entry, but with a few more properties. It has the following additional attributes:</p>

<ul>
<li>family relations (parent, child, sibling)</li>
<li>page template association</li>
<li>page type definition</li>
</ul>

<p>The idea behind describing pages this way is to make them similar to entries. This way users familiar with the concepts of creating new entries and associating categories to them might not freak out at the idea of creating new static pages and assigning a parent to them.</p>

<p>By the same token, if you're familiar with the behaviour of the "entries" function, you'll probably be happy with a "pages" function (one lists all entries, the other all static pages).</p>

<p>So I've got a new object, now how do I manipulate the hierarchical tree of page nodes? What interface do I use to manipulate the relationships between pages? </p>

<p>Well, here's a theory: you use the same interface Movabletype provides to manipulate hierarchical lists of categories. Now, hold on there, I know I've said before that I hate this interface and yes, I still think it's unfeasibly clunky and unintuitive (sorry Ben, no offence intended), but it exists! </p>

<p>This means I can grab much of the source code and javascript and, more importantly, the poor users who have struggled to learn the category interface won't have to learn a new one, they can just use their existing skills to manipulate these new features.</p>

<p>Here's how the "manage static pages" screen might look (click for a bigger version) <i>sorry about the crap graphic quality, had to do this in a hurry, will correct details on images asap</i>:</p>

<p><a href="http://www.donkeyontheedge.com/i/manage_static_pages.gif"><img alt="manage_static_pages.gif" src="http://www.donkeyontheedge.com/i/manage_static_pages-thumb.gif" width="364" height="302" /></a></p>

<p>And here are some close-ups of the new attributes being selected. In this case, the user is creating a new page about leaflets in the "publications" section. The page is a child of "publications" and becomes a sibling of "essays" and "white papers":</p>

<p><a href="http://www.donkeyontheedge.com/i/select_parent.gif"><img alt="select_parent.gif" src="http://www.donkeyontheedge.com/i/select_parent-thumb.gif" width="364" height="140" /></a></p>

<p>The page type is selected (in this case a standard page):</p>

<p><img alt="select_page_type.gif" src="http://www.donkeyontheedge.com/i/select_page_type.gif" width="251" height="126" /></p>

<p>And finally, the user chooses her pre-prepared templates to associate with the new page. In this example, an admin has created a template expressly for the new publications section:</p>

<p><img alt="page_template_selection.gif" src="http://www.donkeyontheedge.com/i/page_template_selection.gif" width="290" height="209" /></p>

<p>The "adding a static page" screen would look very similar to the existing "new entry" screen, also reusing as much code as possible:</p>

<p><a href="http://www.donkeyontheedge.com/i/adding_static_page.gif"><img alt="adding_static_page.gif" src="http://www.donkeyontheedge.com/i/adding_static_page-thumb.gif" width="364" height="407" /></a></p>

<p>Has anyone out there been working on anything similar? Feel free to chime in.</p>

<p><small><i>Tags: <a href="http://technorati.com/tag/movabletype" rel="tag">movabletype</a>, <a href="http://technorati.com/tag/Movable+Type" rel="tag">Movable Type</a>, <a href="http://technorati.com/tag/Movable-Type" rel="tag">Movable-Type</a>, <a href="http://technorati.com/tag/Blog" rel="tag">Blog</a>, <a href="http://technorati.com/tag/Blogs" rel="tag">Blogs</a>, <a href="http://technorati.com/tag/Plugin" rel="tag">Plugin</a>, <a href="http://technorati.com/tag/Plugins" rel="tag">Plugins</a></i></small></p>
