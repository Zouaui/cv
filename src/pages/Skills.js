import React from 'react';
import Navigation from '../components/Navigation';
import {Tooltip } from '@material-ui/core';

const Skills = () => {
    return (
        <div className="skills">
            <Navigation/>
            <div className="skillsContent">
                <div className="content">
                    <h1>SKILLS</h1>
                    <div className="os">
                        <h3>OPERATING SYSTEM :</h3>
                            <Tooltip title="Vesions: 5 - 6 - 7" >
                                <img src="./media/redhat.svg" alt="profil-pic"/>   
                            </Tooltip>    
                            <Tooltip title="Vesions: 5 - 6 - 7" >                                                     
                                <img src="./media/centos.svg" alt="profil-pic"/>
                            </Tooltip>
                            <img src="./media/windows.svg" alt="profil-pic"/>
                    </div>
                    <h3>CLOUD :</h3>
                        <Tooltip title="VPC, EC2, S3, IAM, LAMBDA, ROUTE53, RDS, AURORA, DYNAMODB, EKS, FATGATE, E-BEANSTALK, E-SEARCH Service, SNS, SQS, RESHIFT ...">
                            <img src="./media/aws.svg" alt="profil-pic"/>
                        </Tooltip>    
                        <Tooltip title="App Engine, Compute Engine, Kubernetes Engine, Storage, BigQrery, Cloud Function, Cloud RUN ">
                            <img src="./media/google-cloud-icon.svg" alt="profil-pic"/>
                        </Tooltip> 
                    <h3>CONTAINERS & ORCHESTRATOR :</h3>
                        <Tooltip title="Docker">
                            <img src="./media/docker.svg" alt="profil-pic"/>
                        </Tooltip> 
                        <Tooltip title="Vesions: 1.4 => Current">
                            <img src="./media/kubernetes.svg" alt="profil-pic"/>
                        </Tooltip>    
                        <Tooltip title="Vesions: 3.x - 4.x">
                            <img src="./media/openshift.svg" alt="profil-pic"/>
                        </Tooltip> 
                    <h3>AUTOMATION :</h3>    
                        <Tooltip title="Automation tools">
                            <img src="./media/ansible.svg" alt="profil-pic"/>
                        </Tooltip>
                        <Tooltip title="Infrastructure As Code">
                            <img src="./media/terraform.svg" alt="profil-pic"/>
                        </Tooltip>
                    <h3>PROGRAMMING LANGUAGES :</h3>   
                        <Tooltip title="Python 2.7 - 3.6 - 3.7 - 3.9">
                            <img src="./media/python.svg" alt="profil-pic"/>
                        </Tooltip>
                        <Tooltip title="Beginner">
                            <img src="./media/nodejs.svg" alt="profil-pic"/>
                        </Tooltip>
                    <h3>FRAMEWORK :</h3>
                        <Tooltip title="This pages are proof :)">
                            <img src="./media/react.svg" alt="profil-pic"/>
                        </Tooltip>  
                        <Tooltip title="Beginner">
                            <img src="./media/flask.svg" alt="profil-pic"/>
                        </Tooltip>      
                    <h3>CI/CD :</h3>
                        <Tooltip title="Jenkins x, jenkins 2.x.x">
                            <img src="./media/the-jenkins-project-icon.svg" alt="profil-pic"/>
                        </Tooltip>
                        <Tooltip title="Circle-CI">
                            <img src="./media/circleci.svg" alt="profil-pic"/>
                        </Tooltip>
                        <Tooltip title="ArgoCD: GitOps methodology">
                            <img src="./media/argo-icon.svg" alt="profil-pic"/>
                        </Tooltip>
                        <Tooltip title="Gitlab-CI">
                            <img src="./media/gitlab.svg" alt="profil-pic"/>
                        </Tooltip>
                    <h3>WEB SERVER :</h3>    
                        <Tooltip title="Nginx"> 
                            <img src="./media/nginx.svg" alt="profil-pic"/>
                        </Tooltip>
                        <Tooltip title="Apache"> 
                            <img src="./media/apache.svg" alt="profil-pic"/>
                        </Tooltip>
                    <h3>MONITORING & LOGGING :</h3>
                        <Tooltip title="Prometheus"> 
                            <img src="./media/prometheus.svg" alt="profil-pic"/>
                        </Tooltip>
                        <Tooltip title="Grafana">
                            <img src="./media/grafana.svg" alt="profil-pic"/>
                        </Tooltip>
                        <Tooltip title="Elastic">
                            <img src="./media/elastic.svg" alt="profil-pic"/>
                        </Tooltip>
                        <Tooltip title="Logstash">
                            <img src="./media/logstash.svg" alt="profil-pic"/>
                        </Tooltip>
                        <Tooltip title="Fluentd">
                            <img src="./media/fluentd.svg" alt="profil-pic"/>
                        </Tooltip>
                        <Tooltip title="Dynatrace">
                            <img src="./media/dynatrace.svg" alt="profil-pic"/>
                        </Tooltip>
                    <h3>OTHER:</h3>
                        <Tooltip title="Traefik: Ingress For Kubernetes Cluster; Versions: 1.X - 2.2">
                            <img src="./media/traefik-icon.png" alt="profil-pic"/>
                        </Tooltip> 
                        <Tooltip title="Let's encypt: Create and Manage certificates ">
                            <img src="./media/letsencrypt.svg" alt="profil-pic"/>
                        </Tooltip>    
                            
                </div>
            </div>
        </div>
    );
};

export default Skills;