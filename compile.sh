#!/usr/bin/env bash

pdflatex -interaction=nonstopmode -output-directory=build thesis.tex
cp thesis.bib build/
cd build
bibtex8 thesis.aux
cd ..
pdflatex -interaction=nonstopmode -output-directory=build thesis.tex
pdflatex -interaction=nonstopmode -output-directory=build thesis.tex
evince build/thesis.pdf&
