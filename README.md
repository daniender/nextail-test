# Simple Angular app for technical interview

## Components:

- stock-app: Angular 13 app generated with AngularCli that shows some data reports
- stock-server: simple NodeJs (with Typescript) app, acting as an API to serve data to stock-app

---

## Run

Run each app sepparately. Instructions are provided inside each project.

If running with docker, NodeJs container should be launch for Angular app to work. Create both images, launch them on 4200 (angular) and 5000 (node) ports.

---
##  Working with app:

JSON data is loaded on init. Completed reports are removed from in-memory array in Node server.

Reload page to refresh list and load again initial data.