FROM node:18-alpine

# Create app directory

WORKDIR /linkedin-clone 

ENV PATH="./node_modules/.bin:$PATH"

COPY . .
RUN npm i react-scripts
RUN npm run build

CMD [ "npm", "start" ]
