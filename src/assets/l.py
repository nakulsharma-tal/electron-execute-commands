#!/usr/bin/python
# -*- coding: utf-8 -*-
import RPi.GPIO as GPIO
import time
import sys
import select
import os
import argparse

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
toggle = False
GPIO.setup(18, GPIO.OUT)
parser = argparse.ArgumentParser()
parser.add_argument('-o', '--On', help='Led On')
parser.add_argument('-i', '--Off', help='Led Off')
args = parser.parse_args()

if args.On:
    print 'LED on'
    GPIO.output(18, GPIO.HIGH)

if args.Off:
    print 'LED off'
    GPIO.output(18, GPIO.LOW)
