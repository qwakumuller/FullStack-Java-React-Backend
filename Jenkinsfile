pipeline {
  agent {
             docker { image 'maven:3.3.3' }
        }
  stages {
    stage('Welcome') {
      steps {
        sh 'echo "Welcome"'
        sh 'mvn --version'
      }
    }
    stage('Test') {
          steps {
            sh 'echo "Test Branches"'
            dir("004-3-JPA-interact"){
                    sh 'mvn test'
            }
          }
       }
  }
}