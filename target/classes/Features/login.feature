Feature: Free CRM login Feature

#Scenario: Free CRM Portal's login page Test

#Given User is already in the login page
#When Title of the login page is Free CRM
#Then Enter the username and password
#Then click the button login
#And User is on the Homepage

#Data Passing through scenario
#Scenario: Free CRM Portal's login page Test
#
#Given User is already in the login page
#When Title of the login page is Free CRM
#Then Enter the "AnithaDevasena" and "Anitha005"
#Then click the button login
#And User is on the Homepage

#DataDriven Testing using Scenario Outline with Examples
#Scenario Outline: Free CRM Portal's login page Test
#
#Given User is already in the login page
#When Title of the login page is Free CRM
#Then Enter the "<Username>" and "<Password>"
#Then click the button login
#And User is on the Homepage
#
#Examples:
#	| 	Username	     | Password  |
#	| AnithaDevasena | Anitha005 |
#	|	VijayVelan 	 | Vijay005  |

#DataDriven Testing for the creation of Contact details with Examples
Scenario Outline: Free CRM Portal's login page Test

Given User is already in the login page
When Title of the login page is Free CRM
Then Enter the "<Username>" and "<Password>"
Then click the button login
And User is on the Homepage
Then Select New contact in contact menu
Then user enters contact details "<firstname>" and "<lastname>" and "<company>" and "<Homeno>" and "<Mobile>"




Examples:
	| 	Username	     | Password  |	firstname	|	lastname		| company	| Homeno		|	Mobile |
	| AnithaDevasena | Anitha005 |	Hana			|	Vijay		| FICO1		| 9989898	|   387483 |
	|	VijayVelan 	 | Vijay005  |	Vijay		|	velan		|  BBstar	| 87878799	|	238273|



