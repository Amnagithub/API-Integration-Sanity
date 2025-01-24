# Day 3 Task - CMS Sanity Data and API Integration Report

On Day 3, focus was on integrating APIs in my Hakathon project# 0 and populating Sanity CMS with sourced in Sanity and also from a local API provided. This report documents is for the CMS Sanity Data and the local API integration process, schema adjustments, migration steps,Fecting data and displayed in UI.The tools are used.The related Screenshots and code snippets are included to provide a comprehensive understanding of the implementation.

## Creat CMS Sanity Data

CMS Sanity Data Integration Steps:
1.Install Sanity.IO
2.Create a new project in Sanity Studio
3.Create a new schema in Sanity Studio
4.Input Data in Sanity.
5.Data fetching from Sanity CMS
6.Display Data in UI

1.Input Product Data in Sanity,
![Sanity Studio](/public/Screenshot%201.png)

2.Data fetching from Sanity CMS
![schema ](/public/Screenshot3.png)
![schema ](/public/sc2.png)
![Data fetching](/public/Screenshot2.png)

Responsive UI Design
![Data Displayed](/public/Screenshot4.png)
![Single Product Details ](/public/Screenshot5.png)

## Schema Adjustments and Migration Steps

1. Tools Used
*Sanity Client: For uploading data to Sanity CMS.
*Axios: For API calls to fetch product data.
*UX/UI: readymadeui/tailwindCss/
*.env: For managing environment variables.

## API Integration / Migration Process

1.Create a new project in Sanity Studio
2.Verrify API in browser/ postman
2.Create and Adjustments schema in Sanity Studio
3.Generate Secret Token
4.Update .env file with Sanity Studio Project ID,DataSet and Secret Token
5.Populate the schema with data of Local API
6.Write Script for Data Migration
7.Run the script to migrate data from Local API to Sanity CMS
8.Test the Sanity CMS API to ensure data is correctly migrated
9.Data fetching from Sanity CMS
10.Display Data in UI

3.Data fetching from Local API
![Local API](/public/Screenshot%208.png)

Responsive UI Design
![Data Displayed](/public/Screenshot6.png)

End Points: localhost:3000/shop
