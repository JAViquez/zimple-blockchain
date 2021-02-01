FROM node:12.20.1

WORKDIR /usr/app/

# Only copy the package.json file to work directory
COPY package.json .
# Install all Packages
RUN npm install

# Copy all other source code to work directory
ADD ./src /usr/app/src
ADD nodemon.json /usr/app/
ADD tsconfig.json /usr/app/

# Compile TypeScript
RUN npm run build

# Start
CMD [ "npm", "run", "start" ]
EXPOSE 8080