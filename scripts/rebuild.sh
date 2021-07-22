#!/bin/bash

yarn build

ps aux | grep node | grep -v grep | awk '{ print "kill -9", $2 }' | sh

forever start -c 'yarn start' ./

exit 0
