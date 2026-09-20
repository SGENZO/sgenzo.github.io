---
permalink: /
layout: academic
title: "Computational Physics & Machine Learning"
excerpt: "Enze Hou is a postdoctoral researcher at SUTD working on machine learning for multi-scale modeling, quantum many-body physics, and ultrafast dynamics."
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---

<section class="intro" aria-labelledby="intro-title">
  <div class="intro__text">
    <p class="eyebrow">Computational physics &amp; machine learning</p>
    <h1 id="intro-title">Enze Hou</h1>
    <p class="intro__role">Postdoctoral researcher <span aria-hidden="true">/</span> SUTD</p>
    <p class="intro__description">I study machine learning methods for multi-scale modeling, with a focus on <strong>quantum many-body physics</strong> and <strong>ultrafast dynamics</strong>.</p>
    <p class="intro__affiliation">I am a postdoctoral researcher at the <a href="https://www.sutd.edu.sg/">Singapore University of Technology and Design (SUTD)</a>. I received my PhD in Fundamental Mathematics in June 2026 from the <a href="http://www.iapcm.ac.cn">Institute of Applied Physics and Computational Mathematics</a>, advised by <a href="http://www.wanghan-iapcm.com">Prof. Han Wang</a> at the National Key Laboratory of Computational Physics.</p>
    <div class="intro__actions">
      <a class="button button--primary" href="mailto:{{ site.author.email }}">Get in touch <span aria-hidden="true">↗</span></a>
      <a class="button button--secondary" href="{{ '/assets/CV.pdf' | relative_url }}">Curriculum vitae <span class="button__note">PDF</span></a>
    </div>
    <ul class="profile-links" aria-label="Academic and code profiles">
      <li><a href="{{ site.author.googlescholar }}">Google Scholar <span aria-hidden="true">↗</span></a></li>
      <li><a href="{{ site.author.orcid }}">ORCID <span aria-hidden="true">↗</span></a></li>
      <li><a href="https://github.com/{{ site.author.github }}">GitHub <span aria-hidden="true">↗</span></a></li>
    </ul>
  </div>
  <figure class="intro__portrait">
    <img src="{{ site.author.avatar | prepend: '/images/' | relative_url }}" alt="Portrait of Enze Hou" width="3233" height="4157" fetchpriority="high">
    <figcaption><span class="location-dot" aria-hidden="true"></span>{{ site.author.employer }} &middot; {{ site.author.location }}</figcaption>
  </figure>
</section>

<section id="research" class="home-section" aria-labelledby="research-title">
  <div class="section-heading">
    <h2 id="research-title">Research interests</h2>
    <span class="section-heading__note">Methods &amp; applications</span>
  </div>
  <div class="research-grid">
    <article class="research-area">
      <span class="research-area__number" aria-hidden="true">01</span>
      <h3>Quantum dynamics</h3>
      <p>Neural-network approaches to the time-dependent Schrödinger equation and quantum many-body dynamics.</p>
    </article>
    <article class="research-area">
      <span class="research-area__number" aria-hidden="true">02</span>
      <h3>Machine learning potentials</h3>
      <p>Atomistic modeling of the dynamic mechanical response of materials under extreme conditions.</p>
    </article>
    <article class="research-area">
      <span class="research-area__number" aria-hidden="true">03</span>
      <h3>Scientific computing</h3>
      <p>Multi-scale modeling, Monte Carlo methods, and uncertainty quantification.</p>
    </article>
  </div>
</section>

<section class="home-section" aria-labelledby="publications-title">
  <div class="section-heading">
    <h2 id="publications-title">Recent publications</h2>
    <a class="text-link" href="{{ '/publications/' | relative_url }}">All publications <span aria-hidden="true">↗</span></a>
  </div>
  {% include publication-list.html limit=3 %}
</section>
