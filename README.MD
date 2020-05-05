# WB-TRAVEL (Vacation Advisor)

WB-Travel is a class group project of the Towson COSC484 Web-Based Programming class.

## Project Description

Vacation Advisor is a web site providing information to tourists regarding popular cities in the United States and provides the information about exciting things to do in these tourists areas.

### Tools & Technologies
#### Front-end Languages:
* HTML
* CSS
* JavaScript
* Jquery

#### Front end frameworks (used to make website responsive):
* Bootstrap

#### Tools used in code development:
* Visual studio code
* Google Chrome Browser

### Features/Pages:
Website consists of the following pages/features :
* Home Page
  * It is main landing page of website which provides navigation to other pages and a brief introduction of website
* About Us
  * An introductory page which provides information about company (website)
* Things to do
  * An interactive list of exciting things to do in multiple places
* Cities
  * List of popular cities in USA
* Contact Us
  * This page provides the contact information
* Sign In
  * This page provides forms to sign in or register new users
* Detail page
  * This page gives complete detail of a single location along with user’s feedback list . It also facilitate user to post their feedback



## Getting Started/Installation




## API Endpoints

    GET api/v1/attractions/:lat/:lng/:miles

The endpoint provides closest attractions from the miles of radius.

    GET api/v1/attractions

The endpoint provides all attractions.

    GET api/v1/attractions/:reviews

The endpoint provides attractions based on the number of ratings received.

    POST api/v1/attractions

The endpoint creates attractions from the POST body array.


## Authors:

* Aidan Houlihan
* Carlton Etchison
* Charles Lejtman
* Greg Stephens
* Kaleem
* Prince John Okodua-Oboh
* Thiri Hsu Myat Aung

