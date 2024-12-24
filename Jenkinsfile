pipeline {
    agent any

    stages {
        stage('SCM Checkout') {
            steps {
		git branch: 'main', credentialsId: 'Github-access-token', url: 'https://github.com/hieutt192/jenkin-cicd.git'
            }
        }
    }
}
