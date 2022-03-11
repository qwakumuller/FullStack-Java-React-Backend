pipeline {
  agent any
  stages {
    stage('Welcome') {
      steps {
        sh 'echo "Welcome"'
      }
    }
    stage('Test') {
          steps {
            sh 'echo "Test Branches"'
            withMaven() {
              sh 'mvn test'
            }
          }
        }
  }
}