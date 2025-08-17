Feature: Login
  Scenario: Successful login
    Given I am on the login page
    When I fill in the username and password
    Then I should see the dashboard
