The application will listen to port 8080

To be done tasks - Target completion date 19th February. Once completed will be upload to the same GIT repository.

Parsing the received JSON response to get all the workflow that has completed status.

1. 
We will be needing a FOR loop to parse all the received JSON objects, 
    then search for the key workflow. 
    For key 'work flow' check its value, if value === completed,
    Check for the key address
        Get all values from the nested address JSON object,concatenate it to form a complete address
    Add to reponse list.
  
Time complexity will be linear as it will need to parse through all JSON objects.
Space complexity will depend on the list size that has all work in completed status.
  
2.
Error handling