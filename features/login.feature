Feature:Login Functionality
Scenario: User should be able to login with valid credentials
Given User is on the login page
When User enters valid username and password
And User clicks on the login button
Then User should be redirected to the home page

Scenario: User should notbe able to login with invalid credentials
Given User is on the login page
When User enters invalid username "invalid_user" and password "invalid_password"
And User clicks on the login button
Then User should not be redirected to the home page,error message will display in login page