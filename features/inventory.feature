Feature: Inventory Page
Scenario: Verify inventory item count for different user
Given User is on application login page
When User logs in with username "<username>" and password "<password>"
Then User should see "<result>"
And Inventory item count should be "<count>"

Examples:
    |username        |password     |result         |count |
    |standard_user   |secret_sauce |Inventory Page |6     |
    |problem_user    |secret_sauce |Inventory Page |6     |
    |locked_out_user |secret_sauce |Error Message  |0     |