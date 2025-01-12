# Phantom

this is simple web app and API to let users to upload a file anonymusly to an e-mail.
you do not need any credential like singup/loging and other time killer stuff.
just select your file and put the reciver e-mail address.

why this can be helpfull?
sometime you want to send some data to a special person/place who you prefer to not tell your
identifications, then this app make you a phantom 👻


### how to use it?

there is two way

1. use the web app. open up the [web app](phantom.wiregeek.ir) with your browser.
> sorry but there is not any webapp writen, not have time to create it!. use terminal instead <3

2. use curl! `curl -L -F file='@path/2/file' phantom.wiregeek.ir/?mail=someOneMail@mail.com`

2.1. if you are teminal lover :) then you can use it like this to send a bunch of files `tar -cf - /path/2/files | curl -L -F file='@-' phantom.wiregeek.ir`

### how to self host?

well you need to compile it with tsc and then run it on your server or just use the docker version

> this section will be complited.


### TODO

1. readme.
2. recive multiple files
3. validate e-mail
4. create docker

