FROM centos:centos6

#install extra 
RUN	yum install -y epel-release
#enable centos for node.js
RUN	yum install -y nodejs npm

#app
COPY package.json /src/package.json
#install app dependencies
RUN cd /src; npm install
COPY . /src
EXPOSE 8080
CMD ["node", "/src/index.js"]
