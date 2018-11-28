#!/bin/bash

# Disable sleep

xset s noblank
xset s off
xset -dpms

# Hides mouse (probably not needed as it has no mouse)

unclutter -idle 0.5 -root &

# Prevent Chromium banners from showing when it exited unexpectedly

sed -i 's/"exited_cleanly":false/"exited_cleanly":true/' /home/pi/.config/chromium/Default/Preferences
sed -i 's/"exit_type":"Crashed"/"exit_type":"Normal"/' /home/pi/.config/chromium/Default/Preferences

# Start Chromium in kiosk mode and load app

/usr/bin/chromium-browser --noerrdialogs --disable-infobars --kiosk http://192.168.0.7:8080 &
