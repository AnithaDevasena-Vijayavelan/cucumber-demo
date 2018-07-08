Feature: Free CRM Portal

Scenario: Creation of new Deals in Free CRM Portal

Given User is already in the login page
When Title of the login page is Free CRM
Then Enter the Username and Password
| AnithaDevasena | Anitha005 |
Then click the button login
And User is on the Homepage
Then Select New Deal in Deal menu
Then user enters contact details Title and Company and Probability and Commission
|	Garments		|BBStar		|	100		   |  10		   |
