pipeline {
  agent any
  stages {
    stage('Test') {
      steps {
      dir("004-3-JPA-interact")
        sh 'echo "Test Branches"'
        withMaven() {
          sh 'mvn test'
        }
      }
    }
  }
}