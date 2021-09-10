#!/bin/sh

if [ -d "/project/app/.theia" ]; then
  if [ ! -d "/project/.theia" ]; then
    cp -R /project/app/.theia /project/.theia
  fi
fi

yarn install && yarn start
