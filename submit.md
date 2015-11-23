---
title: Submit an object
layout: default
---
You can submit your design to the Libre Objet’s team by [email](mailto:hello@libreobjet.org).
Advanced users can fork the [project on GitHub](https://github.com/libreobjet/libreobjet.org), add an object and ask a pull request. To be published on the website, be sure it matches the following requirements:

- Include 3D (SKP, IGES, STL, STEP, DAE, OBJ) and 2D (DXF, SVG, EPS) sources files of the plans
- A project.yml file that describes the project. An example can be found in the [Bouctje’s dowload archive](http://libreobjet.org/objects/bouctje/).
- The PDF Guide: Documentation describing how to build the object and the plan. An example can be found in the [Bouctje’s dowload archive](http://libreobjet.org/objects/bouctje/).
- A txt file containing the license. If you need help to choose a license, refer to the [dedicated page](http://libreobjet.org/licenses/)
- One or many decent image(s) of the object

## Directory architecture

- name-of-the-project/ *The name of your project, no spaces, capital, neither special characters*
  - sources/
    - 3d/ *3D source files*
    - 2d/ *2D source files*
    - guide/ *Source files of the pdf guide*
    - license.txt *Contains the chosen license text*
  - images/ *Photographs and drawings*
    - thumb.png *One of your images must be named “thumb”, it will become the featured image of your project*
  - project.yml *The only .yml file, see “Content of the .yml file”*
  - guide-fr.pdf *Language must be defined ex. guide-en.pdf*

## Content of the .yml file

The .yml file describes the object in details in a YAML format.
You can see an example of this file above:

    object_name: BoBouctje
    designer: Miguel Van Steenbrugge
    builder: [Miguel Van Steenbrugge, Mr Builder, Another Builder]
    category: Side Table & Bookstand
    tags: wood
    overall_size: 830 x 400 x 410 mm
    creation_date: 09-2013
    contributors: none
    derived_from: Bouctje
    original_designer: Mathieu Gabiot
    realisation_place: RealizeBxl
    required_hardware: [Drill, Screw Driver, Saw]
    materials: OSB panel
    license: Free Art Licence
    client: Workshop Libre Objet
    improvement: Addition of a side table to the bookstand but conceived as one single entity
    advantage: Increase of functionality
    disadvantage: Less portable
    terms_of_use: Socializing

    content: >
      Free description of your project. You can write here using the [Markdown](https://en.wikipedia.org/wiki/Markdown) syntax, make links and lists.
      
      Leave a blank line to begin a new paragraph.