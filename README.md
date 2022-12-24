# read_csv_to_api_rest
This script reads a .csv file and, based on its lines and tables, transforms it into an API with JSON format.

I'm using 4 libraries: 'express', 'csv-parser', "fs", 'decompress'

We use express to create an API. 
The CSV Library parser to read the CSV and we can manipulate it. 
The FS to be able to read the CSV.
And decompress to decompress a .zip if our .zip is inside it.

Version Node: v18.12.1

To install these libraries we use:

npm install decompress
npm install express
npm install csv-parser
npm install fs

In the code there are comments explaining what each line can do.

To run the application, we can use the command: node index.js

Don't forget to have the .csv file in your folder.
