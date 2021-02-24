# Edge 
1. Run the below commands to run the react code on client client side 

# Technology Used 
React, Redux, JS, npm library

npm i 
npm start

# Search Functionality
1. The search functionality is not 100 percent correct, it does not use the end point. It should use the query string submitted by the user to search.
2. It will make unnecessary requests to the server for every keyword of user, which will download all the responses so that needs to be optimized.

# Caching
1. Caching in JS can be used by localstorage.setItem("item-provided-by-user)
2. For using that item, it can be used from localstorage.getItem("name-of-the-key")

The base url for server can be added in .env file to work in different environment like dev, uat, prod.

