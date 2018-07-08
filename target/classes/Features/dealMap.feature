Feature: Free CRM Portal Deals Creation using Map

Scenario: Creation of new Deals in Free CRM Portal

Given User is already in the login page
When Title of the login page is Free CRM
Then Enter the Username and Password
|	Username		 |	Password		|
| AnithaDevasena | Anitha005	    |
Then click the button login
And User is on the Homepage
Then Select New Deal in Deal menu
Then user enters contact details Title and Company and Probability and Commission
|	Title		|Company		|Probability	   |Commission |
|	ThaiRice		|LT			|	100		   |  10		   |
|	Computer		|Wibro		|100			   |   10	   |
|	Computer		|Polaris		|100			   |   10	   |
Then Close the browser
