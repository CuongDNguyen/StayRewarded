pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Client Build') {
            steps {
                sh 'cd client'
                sh 'npm install'
            }
        }
        stage('Node Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}