#!/bin/sh

if [ "$CI_ENVIRONMENT_SLUG" = "production" ]; then
    sed -i  "s/CI_ENVIRONMENT_SLUG/${CI_ENVIRONMENT_SLUG}/g" "manifests/config-prod.yaml"
    sed -i "s/PROD_REACT_APP_EXAM_API_PASSWORD/${PROD_REACT_APP_EXAM_API_PASSWORD}/g" "manifests/config-prod.yaml"
    sed -i "s/PROD_REACT_APP_ELASTIC_PASSWORD/${PROD_REACT_APP_ELASTIC_PASSWORD}/g" "manifests/config-prod.yaml"
    cat manifests/config-prod.yaml > .env.production
    sed -i "s/: /=/g" ".env.production"
elif [ "$CI_ENVIRONMENT_SLUG" = "development" ]; then
    sed -i  "s/CI_ENVIRONMENT_SLUG/${CI_ENVIRONMENT_SLUG}/g" "manifests/config-dev.yaml"
    sed -i "s/DEV_REACT_APP_EXAM_API_PASSWORD/${DEV_REACT_APP_EXAM_API_PASSWORD}/g" "manifests/config-dev.yaml"
    sed -i "s/DEV_REACT_APP_ELASTIC_PASSWORD/${DEV_REACT_APP_ELASTIC_PASSWORD}/g" "manifests/config-dev.yaml"
    cat manifests/config-dev.yaml > .env.devserver
    sed -i "s/: /=/g" ".env.devserver"
else
    sed -i  "s/CI_ENVIRONMENT_SLUG/${CI_ENVIRONMENT_SLUG}/g" "manifests/config-stage.yaml"
    sed -i "s/STAGE_REACT_APP_EXAM_API_PASSWORD/${STAGE_REACT_APP_EXAM_API_PASSWORD}/g" "manifests/config-stage.yaml"
    sed -i "s/STAGE_REACT_APP_ELASTIC_PASSWORD/${STAGE_REACT_APP_ELASTIC_PASSWORD}/g" "manifests/config-stage.yaml"
    cat manifests/config-stage.yaml > .env.staging
    sed -i "s/: /=/g" ".env.staging"
fi
