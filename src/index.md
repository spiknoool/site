---
layout: base.njk
permalink: index.html
title: My Cool Blog
description: This blog is totally sweet, right?
featured_image: favicon.png
---
Thanks for visiting my super sweet blog! This is an introduction post of some kind.

[Here's a link in Markdown](https://time.is/).

<a href="https://time.is">You can also write it in HTML</a>.

--- 
<!-- This next part will show your top three most recent posts. You can change how readableDate looks in your .eleventy.js file-->
## Recent Blog Posts

<div id="recentpostlistdiv">
  <ul>
  {% assign top_posts = collections.posts | reverse %}
	{%- for post in top_posts limit:3 -%}
		<li><a href="{{ post.data.permalink }}">{{ post.data.date | readableDate }} » {{ post.data.title }}</a></li>
	{% endfor %}<li class="moreposts"><a href="archives.html">» Archives</a></li><li class="moreposts"><a href="rss.xml">» RSS feed</a></li></ul>
</div>