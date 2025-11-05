---
layout: default
title: "Home"
---

# Writing Studio

日々の自由研究。

## About Me
Waseda University, School of Law

## Research Keywords
- Philosophy of Technology  
- Social & Critical Theory  
- Digital Societies  
- Virtuality & Haptics

## Research Agenda
没入型テクノロジーが生み出す仮想空間の政治的、文化的可能性に関する研究
(Sociopolitical and cultural dimensions of virtual spaces in the age of immersive technology)

## Blog
最新の投稿一覧：
{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url | relative_url }})  
  <small>{{ post.date | date: "%Y-%m-%d" }}</small>
{% endfor %}

## External Links
- [Researchmap](https://researchmap.jp/9000017587069)
- [Studio](https://ytwhite4017.studio.site/)