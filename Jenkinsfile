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
            dir("004-3-JPA-interact"){
                withMaven(maven: 'mvn') {
                    sh 'mvn test'
                }
            }
          }
       }
  }
}