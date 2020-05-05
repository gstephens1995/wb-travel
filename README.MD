# WB-TRAVEL

DESCRIPTION GOES HERE.

  

WB-Travel is a class group project of the web-based programming class - COSC484

  

## API Endpoints

  

    GET api/v1/attractions/:lat/:lng/:miles

The endpoint provides closest attractions from the miles of radius.

    GET api/v1/attractions

The endpoint provides all attractions.

    GET api/v1/attractions/:reviews

The endpoint provides attractions based on the number of ratings received.

    POST api/v1/attractions

The endpoint creates attractions from the POST body array.