#!/bin/sh

apk --update add curl  
export KUBECTL_VERSION=v1.19.0
export HELM_VERSION=v3.2.1
export HELM_FILENAME=helm-${HELM_VERSION}-linux-amd64.tar.gz
curl -L -o /usr/bin/kubectl https://storage.googleapis.com/kubernetes-release/release/${KUBECTL_VERSION}/bin/linux/amd64/kubectl
chmod +x /usr/bin/kubectl 
kubectl version --client 
curl -L https://get.helm.sh/${HELM_FILENAME} | tar xz && mv linux-amd64/helm /bin/helm && rm -rf linux-amd64
chmod +x /bin/helm
helm version