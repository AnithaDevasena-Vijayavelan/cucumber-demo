Feature: Free CRM login Feature

@Regression @Smoke @End2End
Scenario: Free CRM Portal's login page Test with valid credentials
Given User enters valid credentials

@NegativeTCs @Smoke
Scenario: Free CRM Portal's login page Test with valid username and invalid password
Given User enters valid username and invalid password

@NegativeTCs
Scenario: Free CRM Portal's login page Test with invalid username and valid password
Given User enters invalid username and valid password

@Regression @Smoke @End2End
Scenario: Free CRM Portal's Creation of contact details
Given User enters contact details

@Regression @Smoke @End2End
Scenario: Free CRM Portal's Creation of deal details
Given User enters deal details

@Regression @End2End
Scenario: Free CRM Portal's Creation of new Task
Given User enters Task details

@Regression @End2End
Scenario: Free CRM Portal's Creation of new Company
Given User enters Company details

@Regression @End2End
Scenario: Free CRM Portal's Creation of new cases
Given User enters cases details

@Regression
Scenario: Free CRM Portal's Creation of new forms
Given User enters forms details

@Regression
Scenario: Free CRM Portal's Creation of new Calls
Given User enters Calls details

@Regression
Scenario: Free CRM Portal's Creation of new Reports
Given User enters Reports details






