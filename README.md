Hello!

How to run the Credit Card System is below

## Run development version
To run the development version locally -
1. `npm install`
2. `cd client npm install`
3. `cd ..`
4. `npm run dev`
5. This will open up the app on [http://localhost:3000](http://localhost:3000)

## Run all tests
To run the tests for this app, just run -
1. `cd client`
2. `npm run test`

## Breakdown
- The stack is built using MongoDB, ExpressJS and React. No need to install MongoDB.
- I have gone for an atomic design folder structure, with each component contained within a folder with their .js, .test.js and .scss files. I like this approach as I tend to work on the same thing for a while, having all the files in the same directory seems to make things a little more organised.
- Validation is added on each input as follows
  - Name - only letters
  - Card number - Luhn validation
  - Limit - numbers
  - on submitting the form, I also added an additional field for balance (£100).
- On submitting the form will POST to the db. If there is an error message , one will show. If its a success then one will show also. The credit card and user will automatically be added to the list.
- I have added test coverage but would have needed more time for complete coverage of the functionality.
- Regarding security, for the benifit of this submission I have left the .env key in the root of this folder and committed it. I am encrypting and decrypting the credit cards on the client side.
Best practice would be I store the encryption key on the server in a filesystem where I can lock down access privileges to it ensuring that only the server process and a root account can access it. I have not managed to complete this so for now the encryption key is exposed.

## If I had more time
- Offline first approaches are very benifical for users. I would have implemented an IndexedDB which when there is no connection, will allow the user to still render the page and view the stored data.