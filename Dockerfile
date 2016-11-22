#
# Dockerfile
#
#

# Use node.js argon LTS base image
FROM node:6

MAINTAINER Eki Baskoro

# Install pre-requisites
RUN npm install --global gulp-cli

# Create app directory
ENV APP_DIR /usr/src/app
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

# Copy necessary files for running the application
ADD package.json package.json
ADD node_modules node_modules
ADD .babelrc .babelrc
ADD gulpfile.babel.js gulpfile.babel.js
ADD build build

EXPOSE 9999

CMD [ "npm", "start" ]
