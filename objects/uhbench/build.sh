#!/bin/bash

# Build script for the uHbench
# ============================
#
# This script is a helper tool to get the rendered files built in one go.
# There is a pretty good chance this will not work on your system, but you can try ;)
#
# First, have all the right tools installed:
# 	- BLender with Freestyle and Freestyle-SVG-exporter activated in your user.prefs 
#	- Inkscape
#	- ImageMagick
#	- XMLStarlet
#
# Then run it with: sh build.sh 
# And watch the console for errors. 
# Complaints, suggestions or bitcoins, send them to julien [at] xuv.be 


# SETTINGS
# --------
FILENAME=uhbench
# This corresponds to the names used for the scenes in the .blend file. Oviously, don't use space in your names.
STEPS=(step0 step1 step2 step3 step4 step5 step6 step7 step8)
BUILD_DIR=build


# BLENDER rendering
# -----------------
for s in ${STEPS[@]}
do
	# Launch Blender render for selected scene
	blender -b ${FILENAME}.blend  -S ${s} --render-output //${BUILD_DIR}/${s}_ -f 1
	
	# Remove extra "fills" in the SVG
	# This line should be removed once Freestyle-SVG-exporter handles toggling "Contour Fills" per lineset
	xmlstarlet ed -L -N svg="http://www.w3.org/2000/svg" -d "//svg:g[@id='RenderLayer_InLine']/svg:g[@id='fills']" ${BUILD_DIR}/${s}_0001.svg 
done

# Clean up remove unused files
echo "Cleaning up..."
rm ${BUILD_DIR}/*.png

# IMAGE rendering
# ---------------

# Generate a gif ;)
echo "Creating animated GIF..."
convert -delay 100 -loop 0 ${BUILD_DIR}/step*.svg ${FILENAME}.gif

# Rendering the png, jpg and pdf
echo "Rendering to PNG"
inkscape -f ${FILENAME}.svg -e ${FILENAME}.png
echo "Rendering to JPG"
inkscape -f ${FILENAME}.svg --export-dpi 300 -e ${FILENAME}.jpg
echo "Rendering to PDF"
inkscape -f ${FILENAME}.svg --export-text-to-path -A ${FILENAME}.pdf 

echo "Done."