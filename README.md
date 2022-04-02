# ComplianceGenie-MobileApp

## Create iOS/Android Build Instructions

### For Development

-   Run "ionic cap sync"

### For Staging

-   Run "ionic cap sync -c=staging"

### For Production

-   Run "ionic cap sync --prod"

## Form Preview WebApp Deploy Instructions - Switch to branch "pwa*.*" then run below command for appropriate environment. After finished upload /www directory content to the server

### For Development

-   Set "isFormPreview:true" inside file src/environments/environment.ts
-   Run "ionic build"

### For Staging

-   Set "isFormPreview:true" inside file src/environments/environment.staging.ts
-   Run "ionic build -c=staging"

### For Production

-   Set "isFormPreview:true" inside file src/environments/environment.prod.ts
-   Run "ionic build --prod"

## App2Web app Deploy Instructions - Switch to branch "WebApp" then run below command for appropriate environment. After finished upload /www directory content to the server

### For Development

-   Run "ionic build"

### For Staging

-   Run "ionic build -c=staging"

### For Production

-   Run "ionic build --prod"

## When run npm install after clone

## Fix unique device id plugin issue by replacing it from git repository in nodemodules/cordova-plugin-uniquedeviceid folder
