FROM node:12-alpine
WORKDIR /home/user/app
COPY myapp /home/user/app/
RUN npm install
CMD ["node", "index.js"]