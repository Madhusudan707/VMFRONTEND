#!/bin/bash

export CI_APPLICATION_REPOSITORY=${CI_APPLICATION_REPOSITORY:-$CI_REGISTRY_IMAGE}
export CI_APPLICATION_TAG=${CI_APPLICATION_TAG:-$CI_COMMIT_SHORT_SHA}
echo ${CI_APPLICATION_REPOSITORY}:${CI_APPLICATION_TAG}

if [ "$CI_ENVIRONMENT_SLUG" = "production" ]; then
  echo "Populating $CI_ENVIRONMENT_SLUG values"
  sed -i  "s/CI_ENVIRONMENT_SLUG/${CI_ENVIRONMENT_SLUG}/g" "manifests/config-prod.yaml"
  sed -i  "s/CI_ENVIRONMENT_SLUG/${CI_ENVIRONMENT_SLUG}/g" "manifests/values-prod.yaml"
  sed -i  "s/CI_PROJECT_PATH_SLUG/${CI_PROJECT_PATH_SLUG}/g" "manifests/values-prod.yaml"
  sed -i  "s/CI_APPLICATION_REPOSITORY/${CI_APPLICATION_REPOSITORY//\//\\/}/g" "manifests/values-prod.yaml"
  sed -i  "s/CI_APPLICATION_TAG/${CI_APPLICATION_TAG}/g" "manifests/values-prod.yaml"
elif [ "$CI_ENVIRONMENT_SLUG" = "development" ]; then
  echo "Populating $CI_ENVIRONMENT_SLUG values"
  sed -i  "s/CI_ENVIRONMENT_SLUG/${CI_ENVIRONMENT_SLUG}/g" "manifests/config-dev.yaml"
  sed -i  "s/CI_ENVIRONMENT_SLUG/${CI_ENVIRONMENT_SLUG}/g" "manifests/values-dev.yaml"
  sed -i  "s/CI_PROJECT_PATH_SLUG/${CI_PROJECT_PATH_SLUG}/g" "manifests/values-dev.yaml"
  sed -i  "s/CI_APPLICATION_REPOSITORY/${CI_APPLICATION_REPOSITORY//\//\\/}/g" "manifests/values-dev.yaml"
  sed -i  "s/CI_APPLICATION_TAG/${CI_APPLICATION_TAG}/g" "manifests/values-dev.yaml"
else
  echo "Populating $CI_ENVIRONMENT_SLUG values"
  sed -i  "s/CI_ENVIRONMENT_SLUG/${CI_ENVIRONMENT_SLUG}/g" "manifests/config-stage.yaml"
  sed -i  "s/CI_ENVIRONMENT_SLUG/${CI_ENVIRONMENT_SLUG}/g" "manifests/values-stage.yaml"
  sed -i  "s/CI_PROJECT_PATH_SLUG/${CI_PROJECT_PATH_SLUG}/g" "manifests/values-stage.yaml"
  sed -i  "s/CI_APPLICATION_REPOSITORY/${CI_APPLICATION_REPOSITORY//\//\\/}/g" "manifests/values-stage.yaml"
  sed -i  "s/CI_APPLICATION_TAG/${CI_APPLICATION_TAG}/g" "manifests/values-stage.yaml"
fi
