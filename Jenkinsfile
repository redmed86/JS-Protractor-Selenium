#!/usr/bin/env groovy

node('master'){
  def branch = "${env.BRANCH_NAME}"

  stage('Checkout') {
    checkout scm
  }

  stage('Build') {
    sh 'npm install'
  }

  stage('Test') {
    sh 'npm test'
  }
}
