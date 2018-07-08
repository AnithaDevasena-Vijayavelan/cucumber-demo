Feature: Free CRM Portal Deals Creation using Map and hooks

@First
Scenario: Creation of new Deals in Free CRM Portal with Credential AnithaDevasena
Given User in Login Page then Enter Username and Password
|	Username		 |	Password		|
| AnithaDevasena | Anitha005	    |
Then click the button login And User is on the Homepage
Then Select New Deal in Deal menu
Then user enters contact details Title and Company and Probability and Commission
|	Title		|Company		|Probability	   |Commission |
|	PowerPlant	|BBStar		|	100		   |  10		   |
|	Computer		|BBpos		|100			   |   10	   |
|	Computer		|Event		|100			   |   10	   |

@Second
Scenario: Creation of new Deals in Free CRM Portal with Credential VijayVelan
Given User in Login Page then Enter Username and Password
|	Username		 |	Password		|
| VijayVelan		 | Vijay005	    |
Then click the button login And User is on the Homepage
Then Select New Deal in Deal menu
Then user enters contact details Title and Company and Probability and Commission
|	Title		|Company		|Probability	   |Commission |
|	ThaiRice		|BBStar		|	100		   |  10		   |
|	Computer		|tofu		|100			   |   10	   |
|	Computer		|Wesoft		|100			   |   10	   |