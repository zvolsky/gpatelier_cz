#!/usr/bin/env python
# -*- coding: utf-8 -*-

# render_pages.py - generuje vzájemně podobné html stránky
#   python 2.7

# spoustet z (root)/sablony - viz i níže
# pro dodělávání nových staveb mám dočasně přejmenováno na popis2.txt - jen ty se generují - pak přejmenuji na popis.txt 

import sys
sys.path.append('c:\python27\Lib\site-packages\web2py')   # web2py

import os
from gluon.template import render   # web2py
from gluon.html import XML
import vfp                          # .filetostr(), .strtofile()
from bs4 import BeautifulSoup       # jen pro extrakci <h3>

# prac.adresář musí být (root)/sablony
basefolder = '..'  # sablony/render_pages.py umístěno v (root), chci projít (root)
sablona = 'strana_projektu.html'

def render_all(basefolder):
    '''projde všechny složky v basefolder a renderuje, kde je popis.txt'''
    popis_filename = 'popis2.txt'  # změň např. na popis2.txt, jestliže chceš generovat jen některé/aktualizované
    for folder, dirs, files in os.walk(basefolder):
        for filename in files:
            if filename.lower()==popis_filename:
                print folder,
                thumbs = get_thumbs(files)
                render_one(folder, thumbs, popis_filename)
                print " - hotovo"
                break    

def get_thumbs(files):
    '''ze seznamu souborů vytvoří seznam náhledů, pojmenovaných *_t.jpg'''
    thumbs = []
    for filename in files:
        if filename[-6:].lower()=="_t.jpg":
            thumbs.append(filename)
    return thumbs

def render_one(folder, thumbs, popis_filename):
    '''renderuj podle šablony 'sablona',
    ve složce folder musí být soubor popis_filename,
    do složky folder se zapíše výsledný html soubor - stejnojmenný se složkou
    thumbs je seznam *_t.jpg náhledů (k nimž musí existovat *.jpg velký obrázek)
    '''
    vfp.strtofile(
            render(
              filename=sablona,
              context=dict(XML=XML, vfp=vfp, Bs=BeautifulSoup,
                popisfile=os.path.join(folder, popis_filename),
                thumbs=thumbs,
                sep=os.sep)
              ),
            os.path.join(folder, '%s.html' % os.path.basename(folder)))

if __name__=='__main__':
    render_all(basefolder)