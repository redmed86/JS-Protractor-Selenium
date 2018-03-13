#!/usr/bin/env groovy

node('master'){
  def branch = "${env.BRANCH_NAME}"
  withCredentials([usernamePassword(credentialsId: 'derek_sauce_key', passwordVariable: 'sauce_access_key', usernameVariable: 'sauce_username')]) {
    env.SAUCE_USERNAME = sauce_username
    env.SAUCE_ACCESS_KEY = sauce_access_key
  }

  echo branch

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
