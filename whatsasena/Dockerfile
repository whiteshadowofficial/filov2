FROM fusuf/whatsasena:latest

RUN git clone https://github.com/nexusNw/filov2 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN git clone https://github.com/nexusNw/media
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
