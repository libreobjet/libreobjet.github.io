---
title: Submit an object
layout: default
---
You can submit your design to the Libre Objet’s team by [email](mailto:hello@libreobjet.org).
Advanced users can fork the [project on GitHub](https://github.com/libreobjet/libreobjet.org), add an object and do a pull request. To be published on the website, be sure it matches the following requirements:

- Include all 3D (IGES, STL, DAE, OBJ, BLEND, STEP, SKP, 3DS, MAYA,…) and/or 2D (DXF, SVG, EPS, ODG, DWG, AI,…) source files to build the object. We do prefer and encourage the use of open standards file formats.
- A markdown file (preferably called project.md) that describes the object. See documentation below for an example.
- A step by step guide (preferably in PDF) describing how to build the object. An example can be found in the [Bouctje’s download archive](http://libreobjet.org/objects/bouctje/).
- A plain text file containing the license (and aptly named license.txt). If you need help to choose a license, refer to the [dedicated page](http://libreobjet.org/licenses/)
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
  - guide-fr.pdf *If the guide is written in a particular language, it must be defined in the file name. Ex: guide-en.pdf*

## Content of the .md file

The `project.md` file describes the object in details with a markdown syntax.
Copy paste the text below and fill in the gaps where it is necessary.
Leave blank if it's not relevant for your project.
```
---
object_name: # The unique object name
designer: # Full name(s) of the designer(s)
builder: # Full name(s) of builder(s) [Miguel Van Steenbrugge, Mr Builder, Another Builder]
category: # Category of the object. See other objects for inspiration
tags: # A list of tags
overall_size: # Overall size of the object ex: 830 x 400 x 410 mm
creation_date: # Creation date in the form of YYYY-MM-DD
contributors: # List of contributors
derived_from: # Name of the object(s) it was derived from (in case of remixes)
original_designer: # Name of the previous designer(s) (in case of remixes)
realisation_place: # Location where the object was created
required_hardware: # List of tools necessary for construction ex: [Drill, Screw Driver, Saw]
materials: # List of materials
license: # Name of the license
client: # Name(s) of the client
---
Write freely about the object. Be descriptive about your intentions and choices. You might want to answer questions like: Why was it created? For what purpose? How is it best used or done? In case of derivatives, what is different from the previous versions? etc.

Write here using the [Markdown](https://en.wikipedia.org/wiki/Markdown) syntax, make links and lists.

Leave a blank line to begin a new paragraph.
```
