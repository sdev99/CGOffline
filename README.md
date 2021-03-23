# ComplianceGenie-MobileApp

## Create iOS/Android Build Instructions

### For Development

-   Run "ionic build"

### For Staging

-   Run "ionic build -c=staging"

### For Production

-   Run "ionic build --prod"

## Form Preview WebApp Deploy Instructions

### For Development

-   Set "isWebApp:true" inside file src/environments/environment.ts
-   Run "ionic build"

### For Staging

-   Set "isWebApp:true" inside file src/environments/environment.staging.ts
-   Run "ionic build -c=staging"

### For Production

-   Set "isWebApp:true" inside file src/environments/environment.prod.ts
-   Run "ionic build --prod"
