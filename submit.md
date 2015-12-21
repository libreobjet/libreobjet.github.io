---
title: Submit an object
layout: default
---
You can submit your design to the Libre Objet’s team by [email](mailto:hello@libreobjet.org).
Advanced users can fork the [project on GitHub](https://github.com/libreobjet/libreobjet.org), add an object and do a pull request. To be published on the website, be sure it matches the following requirements:

- Include all 3D (SKP, IGES, STL, STEP, DAE, OBJ) and/or 2D (DXF, SVG, EPS) sources files to build the object. We do prefer and encourage the use of standard open formats.
- A markdown file (preferably called project.md) that describes the object. See documentation below for an example.
- A step by step guide (preferably in PDF) describing how to build the object. An example can be found in the [Bouctje’s dowload archive](http://libreobjet.org/objects/bouctje/).
- A txt file containing the license. If you need help to choose a license, refer to the [dedicated page](http://libreobjet.org/licenses/)
- One or many decent image(s) of the object, with at least one photo of the object being built. There can be renders, drawings, artistic impressions, technical plans, etc. but we favor things that passed the built stage.

## Directory architecture
This is a suggested directory structure. We're trying to be as flexible as possible. The only thing really mandatory are a folder named according to the project and that contains source files, pictures and a markdown file with a description and some meta-data.

- name-of-the-project/ *The name of your project, no spaces, capital, neither special characters*
  - sources/ *Subfolder suggestion to keeps things tidy*
    - 3d/ *3D source files*
    - 2d/ *2D source files*
    - guide/ *Source files for the pdf guide*
    - LICENSE.txt *Contains the chosen license text*
  - images/ *Images, photographs and drawings*
    - thumb.png *One of your images must be named “thumb” or "cover", it will the featured image of your project*
  - project.md *The only .md file, see “Content of the .md file below”*
  - guide-fr.pdf *Language must be defined ex. guide-en.pdf*

## Content of the .md file

The .md file describes the object in details with a markdown syntax.
Copy paste the text below and fill in the gaps.
```
---
object_name: # Obviously, the object name
designer: #full name of the designer(s)
builder: #full name of builder(s) [Miguel Van Steenbrugge, Mr Builder, Another Builder]
category: Side Table & Bookstand
tags: # a list of tags
overall_size: # overall size of the object ex: 830 x 400 x 410 mm
creation_date: # Creation date in the form o YYYY-MM-DD
contributors: # list of contributors
derived_from: # Name of the object it was derived from (in case of remixes)
original_designer: # Name of the previous designers (in case of remixes)
realisation_place: # Location where teh object was created
required_hardware: # list of tools necessary for construction ex: [Drill, Screw Driver, Saw]
materials: # List of materials
license: # Name of the license
client: # Name(s) of the client
---
Write freely about the object. You might want to answer questions like: Why was it created? For what purpose? How is it best used or done? In case of derivatives, what is different from the previous versions? etc.

Write here using the [Markdown](https://en.wikipedia.org/wiki/Markdown) syntax, make links and lists.

Leave a blank line to begin a new paragraph.
```
