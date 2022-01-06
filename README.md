# ComplianceGenie-MobileApp

## Create iOS/Android Build Instructions

### For Development

- Run "ionic cap sync"

### For Staging

- Run "ionic cap sync -c=staging"

### For Production

- Run "ionic cap sync --prod"

## Form Preview WebApp Deploy Instructions

### For Development

- Set "isWebApp:true" inside file src/environments/environment.ts
- Run "ionic build"

### For Staging

- Set "isWebApp:true" inside file src/environments/environment.staging.ts
- Run "ionic build -c=staging"

### For Production

- Set "isWebApp:true" inside file src/environments/environment.prod.ts
- Run "ionic build --prod"

### When run npm install after clone

## Fix unique device id plugin issue by replacing it from git repository in nodemodules/cordova-plugin-uniquedeviceid folder
