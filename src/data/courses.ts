export interface Course {
  id: string
  name: string
  description: string
  price: number
  duration: string
  category: 'devops' | 'cloud' | 'ai' | 'web'
  level: 'beginner' | 'intermediate' | 'advanced'
  modules?: {
    title: string
    duration: string
    topics: string[]
    activities: string[]
  }[]
  prerequisites?: string[]
  tools?: string[]
  finalProject?: {
    objective: string
    requirements: string[]
    evaluationCriteria: string[]
  }
}

export const courses: Course[] = [
  // DevOps Courses
  {
    id: 'devops-master-course',
    name: 'DevOps Master Course',
    description: 'Comprehensive training covering all aspects of DevOps practices and tools, from foundational concepts to advanced implementation. Learn to build, deploy, and maintain modern software systems using industry-standard tools and practices.',
    price: 49999,
    duration: '12 weeks',
    category: 'devops',
    level: 'advanced',
    modules: [
      {
        title: 'Introduction to DevOps',
        duration: '1 week',
        topics: [
          'What is DevOps? History and evolution',
          'DevOps vs. traditional IT: Key differences',
          'DevOps culture: Collaboration, automation, measurement, and sharing (CAMS model)',
          'Benefits of DevOps: Faster delivery, improved quality, and scalability',
          'Key DevOps practices: Continuous integration, continuous delivery, and infrastructure as code',
          'Overview of the DevOps toolchain'
        ],
        activities: [
          'Set up a local development environment (install Git, VS Code, etc.)',
          'Explore a sample DevOps workflow using a simple application',
          'Quiz on DevOps principles and terminology'
        ]
      },
      {
        title: 'Version Control with Git',
        duration: '1 week',
        topics: [
          'Introduction to version control systems (VCS)',
          'Git basics: Repositories, commits, branches, and merges',
          'Git workflows: Feature branching, Gitflow, and trunk-based development',
          'Collaboration with Git: Pull requests, code reviews, and conflict resolution',
          'Using Git hosting platforms (GitHub, GitLab, Bitbucket)',
          'Advanced Git: Rebasing, cherry-picking, and stashing'
        ],
        activities: [
          'Create a Git repository and perform basic operations',
          'Collaborate on a sample project using GitHub/GitLab pull requests',
          'Resolve merge conflicts in a team-based scenario'
        ]
      },
      {
        title: 'Continuous Integration (CI)',
        duration: '1 week',
        topics: [
          'What is continuous integration? Principles and benefits',
          'Setting up CI pipelines',
          'Popular CI tools: Jenkins, GitHub Actions, GitLab CI/CD, CircleCI',
          'Writing CI configuration files',
          'Automated testing in CI: Unit, integration, and end-to-end tests',
          'Best practices for CI: Fast feedback, isolated builds, and artifact management'
        ],
        activities: [
          'Set up a CI pipeline using GitHub Actions for a sample application',
          'Write automated tests and integrate them into the pipeline',
          'Trigger builds on code commits and review build logs'
        ]
      },
      {
        title: 'Continuous Deployment (CD)',
        duration: '1 week',
        topics: [
          'Continuous delivery vs. continuous deployment',
          'Building CD pipelines: Stages, approvals, and rollbacks',
          'Deployment strategies: Blue-green, canary, and rolling deployments',
          'CD tools: Jenkins, ArgoCD, Spinnaker',
          'Managing deployment artifacts',
          'Handling failed deployments and rollback mechanisms'
        ],
        activities: [
          'Create a CD pipeline to deploy a sample application to staging',
          'Implement a canary deployment strategy',
          'Simulate a failed deployment and perform a rollback'
        ]
      },
      {
        title: 'Infrastructure as Code (IaC)',
        duration: '1 week',
        topics: [
          'Introduction to IaC: Benefits and challenges',
          'IaC tools: Terraform, AWS CloudFormation, Pulumi',
          'Writing infrastructure code: Resources, modules, and variables',
          'Managing state in IaC',
          'Best practices: Idempotency, modularity, and version control',
          'Integrating IaC with CI/CD pipelines'
        ],
        activities: [
          'Provision a simple cloud infrastructure using Terraform',
          'Update infrastructure using IaC and observe changes',
          'Integrate Terraform with a CI/CD pipeline'
        ]
      },
      {
        title: 'Configuration Management',
        duration: '1 week',
        topics: [
          'Introduction to configuration management',
          'Tools: Ansible, Puppet, Chef',
          'Writing playbooks/scripts for configuration management',
          'Managing server configurations: Packages, services, and files',
          'Idempotency and declarative configuration',
          'Integrating configuration management with IaC'
        ],
        activities: [
          'Write an Ansible playbook to configure a web server',
          'Apply configuration changes to multiple servers',
          'Combine Ansible with Terraform for end-to-end setup'
        ]
      },
      {
        title: 'Containerization with Docker',
        duration: '1 week',
        topics: [
          'Introduction to containers: Containers vs. VMs',
          'Docker architecture: Images, containers, and registries',
          'Writing Dockerfiles and building custom images',
          'Docker Compose for multi-container applications',
          'Managing containers: Networking, volumes, and resource limits',
          'Docker best practices: Image optimization, security, and versioning'
        ],
        activities: [
          'Create a Dockerfile for a sample application',
          'Build and run a Docker container locally',
          'Use Docker Compose to deploy a multi-container application'
        ]
      },
      {
        title: 'Container Orchestration with Kubernetes',
        duration: '1 week',
        topics: [
          'Introduction to Kubernetes: Architecture and components',
          'Kubernetes objects: Deployments, Services, ConfigMaps, and Secrets',
          'Managing Kubernetes clusters',
          'Scaling and auto-scaling applications',
          'Kubernetes networking: Ingress, LoadBalancer, and DNS',
          'Best practices: Resource management, high availability, and security'
        ],
        activities: [
          'Set up a local Kubernetes cluster using Minikube',
          'Deploy a sample application to Kubernetes',
          'Configure auto-scaling and test application scaling'
        ]
      },
      {
        title: 'Cloud Platforms and DevOps',
        duration: '1 week',
        topics: [
          'Overview of cloud providers: AWS, Azure, GCP',
          'Cloud services for DevOps: Compute, storage, and networking',
          'Managed DevOps services',
          'Serverless computing and DevOps',
          'Cost optimization and cloud resource management',
          'Security in the cloud: IAM, encryption, and compliance'
        ],
        activities: [
          'Deploy a sample application to AWS using Elastic Beanstalk or ECS',
          'Set up a CI/CD pipeline using a cloud-native tool',
          'Explore serverless deployment with AWS Lambda'
        ]
      },
      {
        title: 'Monitoring, Logging, and Observability',
        duration: '1 week',
        topics: [
          'Introduction to observability: Metrics, logs, and traces',
          'Monitoring tools: Prometheus, Grafana, ELK Stack, Datadog',
          'Setting up monitoring dashboards and alerts',
          'Log management: Centralized logging with ELK or Fluentd',
          'Distributed tracing with Jaeger or Zipkin',
          'Best practices: Proactive monitoring, alerting, and incident response'
        ],
        activities: [
          'Set up Prometheus and Grafana to monitor a sample application',
          'Configure centralized logging with ELK Stack',
          'Simulate an incident and analyze logs/metrics'
        ]
      },
      {
        title: 'DevSecOps: Security in DevOps',
        duration: '1 week',
        topics: [
          'Introduction to DevSecOps: Shifting security left',
          'Security tools: Snyk, OWASP ZAP, HashiCorp Vault',
          'Securing CI/CD pipelines: Secret management, code scanning',
          'Container security: Image scanning, runtime security',
          'Secure infrastructure: Hardening servers, network security',
          'Incident response and security audits'
        ],
        activities: [
          'Scan a Docker image for vulnerabilities using Snyk',
          'Set up secret management with HashiCorp Vault',
          'Implement security checks in a CI/CD pipeline'
        ]
      },
      {
        title: 'Capstone Project and Review',
        duration: '1 week',
        topics: [
          'Review of key DevOps concepts and tools',
          'Designing a full DevOps pipeline: From code to production',
          'Best practices for collaboration and documentation',
          'Preparing for DevOps certifications',
          'Project presentation and demonstration',
          'Course review and next steps'
        ],
        activities: [
          'Build a complete DevOps pipeline for a sample application',
          'Present the project and demonstrate the pipeline',
          'Final project evaluation and feedback'
        ]
      }
    ],
    prerequisites: [
      'Basic understanding of software development and IT operations',
      'Familiarity with Linux/Unix commands and basic programming (Python, Bash)',
      'Knowledge of cloud computing basics is helpful but not mandatory'
    ],
    tools: [
      'Git, GitHub, GitLab',
      'Jenkins, GitHub Actions, GitLab CI/CD',
      'Terraform, AWS CloudFormation',
      'Ansible, Puppet',
      'Docker, Docker Compose',
      'Kubernetes, Minikube',
      'AWS, Azure, GCP',
      'Prometheus, Grafana, ELK Stack',
      'Snyk, HashiCorp Vault, OWASP ZAP'
    ],
    finalProject: {
      objective: 'Build and deploy a complete DevOps pipeline for a sample application',
      requirements: [
        'Use Git for version control',
        'Set up a CI/CD pipeline using GitHub Actions or Jenkins',
        'Provision infrastructure with Terraform',
        'Configure servers with Ansible',
        'Deploy the application using Docker and Kubernetes',
        'Set up monitoring with Prometheus and Grafana',
        'Integrate security checks with Snyk or similar tools'
      ],
      evaluationCriteria: [
        'Pipeline functionality and automation',
        'Infrastructure as Code implementation',
        'Containerization and orchestration',
        'Monitoring and observability setup',
        'Security implementation',
        'Documentation quality',
        'Project presentation'
      ]
    }
  },
  {
    id: 'jenkins-ci',
    name: 'Jenkins CI',
    description: 'Master continuous integration and deployment with Jenkins. Learn to create, manage, and optimize CI/CD pipelines for modern software development.',
    price: 24999,
    duration: '4 weeks',
    category: 'devops',
    level: 'intermediate',
    modules: [
      {
        title: 'Introduction to Jenkins and CI/CD',
        duration: '3 hours',
        topics: [
          'What is Continuous Integration (CI) and Continuous Deployment (CD)?',
          'Role of Jenkins in CI/CD pipelines',
          'Jenkins architecture and components',
          'Benefits and use cases of Jenkins',
          'Jenkins vs. other CI/CD tools',
          'Overview of Jenkins UI and terminology'
        ],
        activities: [
          'Lecture: Introduction to CI/CD and Jenkins',
          'Demo: Navigating the Jenkins UI',
          'Lab: Explore a pre-installed Jenkins instance'
        ]
      },
      {
        title: 'Setting Up Jenkins',
        duration: '4 hours',
        topics: [
          'System requirements for Jenkins',
          'Installing Jenkins on different platforms',
          'Initial setup and configuration',
          'Managing Jenkins plugins',
          'Configuring global settings',
          'Setting up users and basic security'
        ],
        activities: [
          'Lecture: Jenkins installation and setup process',
          'Demo: Installing Jenkins using Docker',
          'Lab: Install and configure Jenkins'
        ]
      },
      {
        title: 'Creating and Managing Jenkins Jobs',
        duration: '4 hours',
        topics: [
          'Types of Jenkins jobs',
          'Creating a Freestyle project',
          'Configuring build triggers',
          'Adding build steps',
          'Post-build actions',
          'Introduction to Jenkinsfile'
        ],
        activities: [
          'Lecture: Freestyle vs. Pipeline jobs',
          'Demo: Create a Freestyle job',
          'Lab: Create a Freestyle job with Git'
        ]
      },
      {
        title: 'Jenkins Pipelines',
        duration: '5 hours',
        topics: [
          'What is a Jenkins pipeline?',
          'Declarative Pipeline syntax',
          'Scripted Pipeline syntax',
          'Writing a Jenkinsfile',
          'Pipeline directives',
          'Handling parameters and credentials'
        ],
        activities: [
          'Lecture: Pipeline concepts and syntax',
          'Demo: Create a Declarative Pipeline',
          'Lab: Write a Jenkinsfile'
        ]
      },
      {
        title: 'Integrating Jenkins with Tools',
        duration: '5 hours',
        topics: [
          'Integrating with Git and GitHub',
          'Configuring build tools',
          'Running automated tests',
          'Integrating with artifact repositories',
          'Deploying to servers',
          'Notifications and integrations'
        ],
        activities: [
          'Lecture: Tool integrations in CI/CD',
          'Demo: Set up a pipeline with GitHub and Maven',
          'Lab: Create a complete pipeline with notifications'
        ]
      },
      {
        title: 'Jenkins Security and Administration',
        duration: '4 hours',
        topics: [
          'Jenkins security overview',
          'Configuring authentication',
          'Role-based access control',
          'Securing Jenkins with SSL/TLS',
          'Managing credentials',
          'Backup and restore strategies'
        ],
        activities: [
          'Lecture: Security best practices',
          'Demo: Configure RBAC and users',
          'Lab: Set up LDAP authentication'
        ]
      },
      {
        title: 'Scaling Jenkins with Distributed Builds',
        duration: '4 hours',
        topics: [
          'Jenkins master-agent architecture',
          'Setting up Jenkins agents',
          'Configuring cloud-based agents',
          'Managing agent workloads',
          'High availability and load balancing',
          'Optimizing build performance'
        ],
        activities: [
          'Lecture: Distributed builds and scaling',
          'Demo: Configure a Docker-based agent',
          'Lab: Set up a Jenkins agent'
        ]
      },
      {
        title: 'Advanced Topics and Troubleshooting',
        duration: '4 hours',
        topics: [
          'Blue Ocean UI for pipeline visualization',
          'Shared libraries for reusable code',
          'Pipeline as Code with Jenkinsfile',
          'Monitoring Jenkins',
          'Troubleshooting common issues',
          'Best practices for optimization'
        ],
        activities: [
          'Lecture: Advanced Jenkins features',
          'Demo: Use Blue Ocean UI',
          'Lab: Create a shared library'
        ]
      }
    ],
    prerequisites: [
      'Basic understanding of software development',
      'Version control systems (e.g., Git)',
      'Linux/Unix commands',
      'Basic networking concepts'
    ],
    tools: [
      'Jenkins (latest stable version)',
      'Docker',
      'Git and GitHub',
      'Java, Maven, or Gradle',
      'Cloud provider account (AWS/Azure)'
    ],
    finalProject: {
      objective: 'Apply all learned concepts to create a full CI/CD pipeline',
      requirements: [
        'Set up a Jenkins instance',
        'Create a pipeline that clones, builds, tests, and deploys an application',
        'Secure the Jenkins instance with RBAC and SSL',
        'Document the pipeline setup and configuration'
      ],
      evaluationCriteria: [
        'Correct pipeline setup and execution',
        'Proper use of Jenkinsfile',
        'Integration with external tools',
        'Security implementation',
        'Documentation quality'
      ]
    }
  },
  {
    id: 'gitlab-ci',
    name: 'GitLab CI/CD Mastery',
    description: 'Master continuous integration, delivery, and deployment using GitLab CI/CD. Learn to build, test, and deploy applications with hands-on labs and real-world projects.',
    price: 24999,
    duration: '8 weeks',
    category: 'devops',
    level: 'intermediate',
    modules: [
      {
        title: 'Introduction to GitLab and CI/CD',
        duration: '4 hours',
        topics: [
          'Overview of GitLab as a DevOps platform',
          'Introduction to CI/CD concepts',
          'GitLab CI/CD architecture',
          'Key components: Pipelines, Stages, Jobs, Artifacts, Runners',
          'Benefits of GitLab CI/CD in software development'
        ],
        activities: [
          'Create a GitLab account and set up a repository',
          'Clone a repository and perform basic Git operations',
          'Explore the GitLab interface'
        ]
      },
      {
        title: 'Getting Started with GitLab CI/CD',
        duration: '5 hours',
        topics: [
          'Understanding the .gitlab-ci.yml file',
          'Anatomy of a GitLab CI/CD pipeline',
          'Configuring GitLab runners',
          'Setting up runners on local machine or GitLab.com',
          'Basic job keywords and pipeline configuration'
        ],
        activities: [
          'Create a simple .gitlab-ci.yml file',
          'Configure a GitLab runner using Docker executor',
          'Run and analyze pipeline results'
        ]
      },
      {
        title: 'Building and Testing Applications',
        duration: '6 hours',
        topics: [
          'Defining multiple stages',
          'Using Docker images in pipelines',
          'Writing jobs for building applications',
          'Running automated tests',
          'Managing job dependencies and artifacts'
        ],
        activities: [
          'Create a pipeline with build and test stages',
          'Use Docker images to run tests',
          'Store and manage test results'
        ]
      },
      {
        title: 'Continuous Delivery and Deployment',
        duration: '6 hours',
        topics: [
          'Continuous Delivery vs. Continuous Deployment',
          'Configuring deployment jobs',
          'Using environments to track deployments',
          'Deploying to cloud platforms',
          'Rollback strategies and manual approvals'
        ],
        activities: [
          'Deploy to Heroku using GitLab CI/CD',
          'Set up staging and production environments',
          'Configure manual approval jobs'
        ]
      },
      {
        title: 'Advanced GitLab CI/CD Concepts',
        duration: '6 hours',
        topics: [
          'Using variables at different levels',
          'Caching dependencies',
          'Triggers and scheduled pipelines',
          'Parallel job execution',
          'Managing pipeline dependencies'
        ],
        activities: [
          'Implement caching for faster pipelines',
          'Set up scheduled pipelines',
          'Configure parallel job execution'
        ]
      },
      {
        title: 'DevSecOps with GitLab',
        duration: '5 hours',
        topics: [
          'Introduction to DevSecOps',
          'Dependency scanning',
          'Static and Dynamic Application Security Testing',
          'Secret detection',
          'Compliance scanning'
        ],
        activities: [
          'Add dependency scanning to pipelines',
          'Configure SAST and DAST',
          'Review security reports'
        ]
      },
      {
        title: 'GitOps and Kubernetes Deployments',
        duration: '6 hours',
        topics: [
          'Introduction to GitOps',
          'Setting up GitLab with Kubernetes',
          'Deploying to Kubernetes',
          'Using Helm charts',
          'Infrastructure as code'
        ],
        activities: [
          'Connect Kubernetes cluster to GitLab',
          'Deploy using Helm charts',
          'Monitor deployments'
        ]
      },
      {
        title: 'Optimizing and Troubleshooting Pipelines',
        duration: '4 hours',
        topics: [
          'Best practices for pipeline efficiency',
          'Reducing execution time',
          'Handling pipeline failures',
          'Monitoring performance',
          'Scaling runners'
        ],
        activities: [
          'Optimize pipeline performance',
          'Debug failing pipelines',
          'Set up monitoring and notifications'
        ]
      }
    ],
    prerequisites: [
      'Basic understanding of Git (commit, push, merge, branch)',
      'Familiarity with Linux commands and terminal usage',
      'Access to a GitLab account (GitLab.com or self-hosted instance)',
      'Docker Desktop installed for hands-on labs'
    ],
    tools: [
      'GitLab',
      'Docker',
      'Kubernetes',
      'Helm',
      'AWS/Heroku',
      'Python/Node.js',
      'Git'
    ],
    finalProject: {
      objective: 'Create a production-ready CI/CD pipeline for a Python web application',
      requirements: [
        'Set up a GitLab repository with a .gitlab-ci.yml file',
        'Include stages for build, test, security scanning, and deployment',
        'Deploy the application to Heroku or AWS',
        'Implement caching and parallel jobs for optimization',
        'Add security scanning (SAST and dependency scanning)',
        'Document the pipeline setup and deployment process'
      ],
      evaluationCriteria: [
        'Pipeline configuration and structure',
        'Successful build and test stages',
        'Security scanning implementation',
        'Deployment automation',
        'Documentation quality',
        'Code quality and best practices'
      ]
    }
  },
  {
    id: 'github-actions',
    name: 'GitHub Actions Mastery',
    description: 'Master GitHub Actions to automate your software development workflows. Learn to build, test, and deploy applications using GitHub\'s powerful CI/CD platform.',
    price: 24999,
    duration: '6 weeks',
    category: 'devops',
    level: 'intermediate',
    modules: [
      {
        title: 'Introduction to GitHub Actions',
        duration: '4 hours',
        topics: [
          'Understanding GitHub Actions and workflows',
          'GitHub Actions architecture and components',
          'Workflow files and YAML syntax',
          'Events and triggers',
          'Runners and environments'
        ],
        activities: [
          'Create a GitHub repository',
          'Set up your first workflow file',
          'Explore GitHub Actions marketplace'
        ]
      },
      {
        title: 'Building Basic Workflows',
        duration: '5 hours',
        topics: [
          'Creating workflow files',
          'Understanding jobs and steps',
          'Using actions from the marketplace',
          'Working with environment variables',
          'Managing workflow permissions'
        ],
        activities: [
          'Create a basic build workflow',
          'Add test steps to your workflow',
          'Configure environment variables'
        ]
      },
      {
        title: 'Advanced Workflow Features',
        duration: '6 hours',
        topics: [
          'Matrix builds and parallel jobs',
          'Dependencies between jobs',
          'Caching and artifacts',
          'Conditional execution',
          'Reusable workflows'
        ],
        activities: [
          'Set up matrix builds for multiple environments',
          'Configure job dependencies',
          'Implement caching for faster builds'
        ]
      },
      {
        title: 'Testing and Quality Assurance',
        duration: '5 hours',
        topics: [
          'Running unit tests',
          'Integration testing',
          'Code coverage reporting',
          'Static code analysis',
          'Security scanning'
        ],
        activities: [
          'Configure test runners',
          'Set up code coverage reporting',
          'Implement security scanning'
        ]
      },
      {
        title: 'Deployment and Release Management',
        duration: '6 hours',
        topics: [
          'Deployment strategies',
          'Environment protection rules',
          'Manual approvals',
          'Release automation',
          'Version management'
        ],
        activities: [
          'Create deployment workflows',
          'Set up environment protection',
          'Automate release creation'
        ]
      },
      {
        title: 'Custom Actions and Advanced Topics',
        duration: '5 hours',
        topics: [
          'Creating custom actions',
          'Composite actions',
          'JavaScript and Docker actions',
          'Action versioning',
          'Best practices and patterns'
        ],
        activities: [
          'Develop a custom action',
          'Create a composite action',
          'Publish actions to marketplace'
        ]
      }
    ],
    prerequisites: [
      'Basic understanding of Git and GitHub',
      'Familiarity with YAML syntax',
      'Basic knowledge of CI/CD concepts',
      'Understanding of software development workflows'
    ],
    tools: [
      'GitHub',
      'Docker',
      'Node.js/Python',
      'Git',
      'VS Code',
      'GitHub CLI'
    ],
    finalProject: {
      objective: 'Create a complete CI/CD pipeline using GitHub Actions for a web application',
      requirements: [
        'Set up a GitHub repository with Actions workflows',
        'Implement build, test, and deployment stages',
        'Configure environment protection and approvals',
        'Add security scanning and code quality checks',
        'Create custom actions for specific tasks',
        'Document the workflow setup and configuration'
      ],
      evaluationCriteria: [
        'Workflow configuration and structure',
        'Successful build and test stages',
        'Security and quality checks implementation',
        'Deployment automation',
        'Custom actions development',
        'Documentation quality'
      ]
    }
  },
  {
    id: 'terraform-mastery',
    name: 'Terraform Mastery',
    description: 'Master Infrastructure as Code (IaC) with Terraform. Learn to automate and manage infrastructure across cloud providers like AWS, Azure, and GCP. This comprehensive course covers everything from basic concepts to advanced techniques, with hands-on labs and real-world scenarios.',
    price: 29999,
    duration: '4 weeks',
    category: 'devops',
    level: 'intermediate',
    modules: [
      {
        title: 'Introduction to Terraform and IaC',
        duration: '2 hours',
        topics: [
          'What is Infrastructure as Code (IaC)?',
          'Overview of Terraform: Features, benefits, and use cases',
          'Terraform vs. other IaC tools (Ansible, CloudFormation, Pulumi)',
          'Terraform architecture and workflow (CLI, providers, state)',
          'Setting up Terraform: Installation and configuration',
          'Introduction to HashiCorp Configuration Language (HCL)'
        ],
        activities: [
          'Install Terraform and configure the CLI',
          'Write and apply a simple Terraform configuration to create a resource',
          'Explore the Terraform CLI commands (init, plan, apply, destroy)',
          'Quiz on IaC concepts and Terraform basics'
        ]
      },
      {
        title: 'Terraform Configuration Basics',
        duration: '3 hours',
        topics: [
          'HCL syntax: Resources, providers, variables, and outputs',
          'Terraform providers: AWS, Azure, GCP, and others',
          'Managing Terraform state: Local vs. remote state',
          'Basic Terraform commands and workflow',
          'Variables: Input variables, variable types, and default values',
          'Outputs: Capturing and displaying resource attributes'
        ],
        activities: [
          'Create an AWS EC2 instance using Terraform',
          'Define input variables and outputs for a configuration',
          'Experiment with terraform plan and terraform apply',
          'Write a Terraform configuration to deploy a simple resource'
        ]
      },
      {
        title: 'Managing Infrastructure with Terraform',
        duration: '3 hours',
        topics: [
          'Working with multiple resources and dependencies',
          'Resource attributes and references',
          'Dynamic blocks and conditionals in HCL',
          'Managing resource updates and lifecycle',
          'Importing existing infrastructure into Terraform',
          'Handling resource dependencies and updates'
        ],
        activities: [
          'Deploy a VPC with subnets and an EC2 instance on AWS',
          'Use dynamic blocks to configure security group rules',
          'Import an existing cloud resource into Terraform',
          'Update an existing configuration without downtime'
        ]
      },
      {
        title: 'Terraform State Management',
        duration: '2 hours',
        topics: [
          'Deep dive into Terraform state: Purpose, structure, and storage',
          'Remote state backends: S3, Terraform Cloud, Consul',
          'State locking and concurrent operations',
          'Best practices for state security and access control',
          'Troubleshooting state-related issues',
          'State file backup and recovery'
        ],
        activities: [
          'Configure a remote state backend (S3 with DynamoDB for locking)',
          'Simulate state conflicts and resolve them',
          'Backup and restore a Terraform state file',
          'Configure a secure remote state backend'
        ]
      },
      {
        title: 'Modularizing Terraform Configurations',
        duration: '3 hours',
        topics: [
          'What are Terraform modules? Structure and use cases',
          'Creating and using local and remote modules',
          'Module inputs, outputs, and versioning',
          'Best practices for module design and organization',
          'Using public module registries',
          'Module testing and validation'
        ],
        activities: [
          'Create a reusable module for a VPC setup',
          'Publish a module to a local or remote repository',
          'Use a public module from the Terraform Registry',
          'Develop a modular Terraform configuration'
        ]
      },
      {
        title: 'Advanced Terraform Features',
        duration: '3 hours',
        topics: [
          'Workspaces: Managing multiple environments',
          'For_each, count, and loops in Terraform',
          'Data sources: Querying existing infrastructure',
          'Provisioners: Local-exec and remote-exec',
          'Terraform functions and expressions',
          'Managing secrets with Terraform'
        ],
        activities: [
          'Create a multi-environment setup using workspaces',
          'Use for_each to deploy multiple resources dynamically',
          'Integrate Terraform with an external secrets manager',
          'Deploy a multi-region setup using data sources'
        ]
      },
      {
        title: 'Terraform in CI/CD Pipelines',
        duration: '2 hours',
        topics: [
          'Automating Terraform with CI/CD tools',
          'Terraform workflow in a team: Plan, apply, and review',
          'Using Terraform Cloud/Enterprise for collaboration',
          'Testing Terraform configurations',
          'Managing drift and drift detection',
          'Security scanning and compliance'
        ],
        activities: [
          'Set up a GitHub Actions pipeline to run terraform plan and apply',
          'Write a basic Terratest script to validate infrastructure',
          'Detect and fix infrastructure drift',
          'Configure a CI/CD pipeline for a Terraform project'
        ]
      },
      {
        title: 'Best Practices and Real-World Scenarios',
        duration: '2 hours',
        topics: [
          'Terraform project structure and naming conventions',
          'Security best practices: IAM roles and least privilege',
          'Cost optimization with Terraform',
          'Disaster recovery and backup strategies',
          'Case studies: Multi-tier applications and Kubernetes',
          'Production deployment considerations'
        ],
        activities: [
          'Deploy a complete multi-tier application',
          'Implement security best practices in a Terraform configuration',
          'Simulate a disaster recovery scenario',
          'Capstone project: Design and deploy production infrastructure'
        ]
      }
    ],
    prerequisites: [
      'Basic understanding of cloud computing (AWS, Azure, or GCP)',
      'Familiarity with command-line interfaces (CLI) and YAML/JSON',
      'Basic knowledge of infrastructure concepts (VMs, networking)'
    ],
    tools: [
      'Terraform (latest stable version)',
      'AWS/Azure/GCP accounts',
      'GitHub Actions/GitLab CI',
      'Terratest, Checkov',
      'VS Code with Terraform extension',
      'HashiCorp Vault'
    ],
    finalProject: {
      objective: 'Deploy a production-ready, multi-tier application using Terraform',
      requirements: [
        'Use modules for reusability and maintainability',
        'Implement remote state with locking mechanism',
        'Integrate with a CI/CD pipeline for automation',
        'Follow security and cost-optimization best practices',
        'Document the configuration and deployment process',
        'Implement disaster recovery and backup strategies'
      ],
      evaluationCriteria: [
        'Code organization and modularity',
        'Security implementation and best practices',
        'CI/CD pipeline integration',
        'Documentation quality',
        'Infrastructure reliability and scalability',
        'Cost optimization and resource management'
      ]
    }
  },
  {
    id: 'docker-kubernetes-mastery',
    name: 'Docker & Kubernetes Mastery',
    description: 'Master containerization and orchestration with Docker and Kubernetes. Learn to build, deploy, and scale containerized applications in production environments. This comprehensive course covers everything from Docker basics to advanced Kubernetes concepts, with hands-on labs and real-world scenarios.',
    price: 39999,
    duration: '8 weeks',
    category: 'devops',
    level: 'intermediate',
    modules: [
      {
        title: 'Introduction to Containers and Docker',
        duration: '2 hours',
        topics: [
          'Introduction to Containers: What are containers? Difference between containers and VMs',
          'Benefits of containerization: portability, efficiency, isolation',
          'Docker Overview: History, evolution, and architecture',
          'Docker Engine, Docker CLI, and Docker Hub',
          'Installing Docker on Linux, Windows, and macOS',
          'Docker Basics: Running containers and basic commands'
        ],
        activities: [
          'Install Docker and run a simple container (nginx)',
          'Explore Docker CLI commands: run, ps, stop, rm',
          'Pull and manage Docker images',
          'Quiz on container concepts and Docker basics'
        ]
      },
      {
        title: 'Docker Images and Containers',
        duration: '2 hours',
        topics: [
          'Understanding Docker images and layers',
          'Pulling images from Docker Hub',
          'Building custom images with Dockerfile',
          'Dockerfile instructions: FROM, RUN, COPY, CMD, ENTRYPOINT',
          'Container lifecycle management',
          'Managing container resources and volumes'
        ],
        activities: [
          'Write a Dockerfile for a simple web application',
          'Build and run a custom image',
          'Create and manage volumes for data persistence',
          'Practice container lifecycle management'
        ]
      },
      {
        title: 'Docker Networking and Best Practices',
        duration: '2 hours',
        topics: [
          'Docker networking: bridge, host, none networks',
          'Creating custom bridge networks',
          'Container-to-container communication',
          'Docker Compose for multi-container applications',
          'Writing docker-compose.yml files',
          'Security and optimization best practices'
        ],
        activities: [
          'Set up a multi-container application with Docker Compose',
          'Configure custom networks for container communication',
          'Optimize a Dockerfile for size and security',
          'Implement logging and monitoring'
        ]
      },
      {
        title: 'Introduction to Kubernetes',
        duration: '2 hours',
        topics: [
          'Kubernetes Overview: What is Kubernetes? Why use it?',
          'Kubernetes vs. Docker Swarm',
          'Kubernetes Architecture: Master and Worker nodes',
          'Core Concepts: Pods, Deployments, Services, Namespaces',
          'Setting up Kubernetes: Minikube, kind, or cloud clusters',
          'Basic kubectl commands and operations'
        ],
        activities: [
          'Set up Minikube and deploy a simple pod',
          'Explore kubectl commands: get, describe, logs',
          'Create and manage namespaces',
          'Quiz on Kubernetes architecture and concepts'
        ]
      },
      {
        title: 'Deploying Applications in Kubernetes',
        duration: '2 hours',
        topics: [
          'Creating and managing pods',
          'Scaling applications with Deployments',
          'Rolling updates and rollbacks',
          'Service types: ClusterIP, NodePort, LoadBalancer',
          'Ingress for HTTP/HTTPS routing',
          'ConfigMaps and Secrets management'
        ],
        activities: [
          'Deploy a stateless application using a Deployment',
          'Expose the application with a Service and Ingress',
          'Use ConfigMaps and Secrets for configuration',
          'Practice rolling updates and rollbacks'
        ]
      },
      {
        title: 'Storage and Stateful Applications',
        duration: '2 hours',
        topics: [
          'Persistent Volumes (PV) and Persistent Volume Claims (PVC)',
          'Storage Classes and dynamic provisioning',
          'StatefulSets for stateful applications',
          'Headless Services and their use cases',
          'Data persistence across pod restarts',
          'Storage best practices'
        ],
        activities: [
          'Deploy a stateful application using StatefulSet',
          'Configure Persistent Volumes and Storage Classes',
          'Test data persistence across pod restarts',
          'Implement storage best practices'
        ]
      },
      {
        title: 'Scaling and Monitoring',
        duration: '2 hours',
        topics: [
          'Manual scaling with kubectl scale',
          'Horizontal Pod Autoscaler (HPA)',
          'Cluster Autoscaler',
          'Monitoring with Prometheus and Grafana',
          'Centralized logging with Fluentd or Loki',
          'Resource management and QoS classes'
        ],
        activities: [
          'Configure HPA for an application',
          'Set up Prometheus and Grafana for monitoring',
          'Analyze logs using a logging tool',
          'Implement resource requests and limits'
        ]
      },
      {
        title: 'Advanced Topics and Capstone Project',
        duration: '2 hours',
        topics: [
          'Role-Based Access Control (RBAC)',
          'Custom Resource Definitions (CRDs)',
          'Operators for managing complex applications',
          'CI/CD with Kubernetes',
          'Helm for package management',
          'Security best practices and network policies'
        ],
        activities: [
          'Configure RBAC for a cluster',
          'Deploy an application using Helm',
          'Implement network policies',
          'Complete the capstone project'
        ]
      }
    ],
    prerequisites: [
      'Basic understanding of Linux and command-line interfaces',
      'Familiarity with software development concepts',
      'Basic knowledge of networking and system administration'
    ],
    tools: [
      'Docker Desktop',
      'Minikube',
      'kubectl',
      'Helm',
      'Prometheus',
      'Grafana',
      'Docker Hub',
      'VS Code with Docker and Kubernetes extensions'
    ],
    finalProject: {
      objective: 'Deploy a full-stack application on Kubernetes with proper scaling, monitoring, and CI/CD',
      requirements: [
        'Containerize a full-stack application using Docker',
        'Deploy the application on Kubernetes with proper configurations',
        'Implement scaling and monitoring solutions',
        'Set up CI/CD pipeline for automated deployment',
        'Apply security best practices and network policies',
        'Document the deployment process and architecture'
      ],
      evaluationCriteria: [
        'Application containerization and deployment',
        'Kubernetes resource configuration',
        'Scaling and monitoring implementation',
        'CI/CD pipeline setup',
        'Security and networking configuration',
        'Documentation quality'
      ]
    }
  },
  // Cloud Computing Courses
  {
    id: 'aws-developer-course',
    name: 'AWS Developer with Python',
    description: 'Master AWS development using Python. Learn to build scalable, secure, and cost-effective applications on Amazon Web Services using Python SDK (Boto3). This comprehensive course covers AWS fundamentals, serverless architectures, containerization, and CI/CD pipelines, with hands-on labs and real-world projects.',
    price: 39999,
    duration: '10 weeks',
    category: 'cloud',
    level: 'intermediate',
    modules: [
      {
        title: 'Introduction to AWS and Cloud Computing',
        duration: '1 week',
        topics: [
          'Overview of cloud computing (IaaS, PaaS, SaaS)',
          'Introduction to AWS: Global infrastructure, regions, and availability zones',
          'Setting up an AWS account and navigating the AWS Management Console',
          'Introduction to AWS CLI and configuring credentials',
          'Overview of AWS services relevant to developers',
          'Introduction to Boto3: Installing and configuring the Python SDK'
        ],
        activities: [
          'Set up an AWS account and configure AWS CLI',
          'Install Boto3 and run a simple Python script to list AWS regions',
          'Explore the AWS Management Console',
          'Quiz on cloud computing concepts and AWS basics'
        ]
      },
      {
        title: 'Python Programming for AWS',
        duration: '1 week',
        topics: [
          'Boto3 architecture: Clients, resources, and sessions',
          'Authenticating with AWS using IAM roles and credentials',
          'Writing Python scripts to interact with AWS services',
          'Error handling and retry mechanisms in Boto3',
          'Best practices for managing AWS credentials securely',
          'Working with AWS SDK documentation'
        ],
        activities: [
          'Create an IAM user and configure Boto3 with access keys',
          'Write a Python script to list all S3 buckets using Boto3',
          'Implement error handling for a Boto3 script',
          'Practice with AWS SDK documentation'
        ]
      },
      {
        title: 'AWS Storage Services with Python',
        duration: '1 week',
        topics: [
          'Amazon S3: Buckets, objects, and permissions',
          'Using Boto3 to upload, download, and manage S3 objects',
          'S3 storage classes and lifecycle policies',
          'Amazon EBS: Block storage for EC2 instances',
          'Amazon EFS: File storage for scalable applications',
          'Securing storage with IAM policies and bucket policies'
        ],
        activities: [
          'Create an S3 bucket and upload files using Boto3',
          'Configure a lifecycle policy for an S3 bucket',
          'Write a Python script to back up files to S3',
          'Implement secure storage practices'
        ]
      },
      {
        title: 'Compute Services and EC2 with Python',
        duration: '1 week',
        topics: [
          'Amazon EC2: Instances, AMIs, and instance types',
          'Launching and managing EC2 instances using Boto3',
          'Security groups and key pairs for secure access',
          'Auto Scaling and Elastic Load Balancing (ELB)',
          'Monitoring EC2 instances with Amazon CloudWatch',
          'EC2 instance management best practices'
        ],
        activities: [
          'Launch an EC2 instance using Boto3',
          'Write a Python script to start/stop EC2 instances',
          'Configure a security group and attach it to an EC2 instance',
          'Set up CloudWatch monitoring'
        ]
      },
      {
        title: 'Serverless Computing with AWS Lambda',
        duration: '1.5 weeks',
        topics: [
          'Introduction to serverless computing and AWS Lambda',
          'Creating and deploying Lambda functions with Python',
          'Triggering Lambda functions (S3, API Gateway, CloudWatch Events)',
          'Managing Lambda permissions with IAM roles',
          'Environment variables and logging in Lambda',
          'Best practices for serverless application design'
        ],
        activities: [
          'Create a Lambda function to process S3 uploads',
          'Deploy a REST API with API Gateway and Lambda',
          'Set up a scheduled Lambda function using CloudWatch Events',
          'Implement serverless best practices'
        ]
      },
      {
        title: 'Databases on AWS with Python',
        duration: '1.5 weeks',
        topics: [
          'Amazon RDS: Relational databases (MySQL, PostgreSQL)',
          'Amazon DynamoDB: NoSQL database for high scalability',
          'Using Boto3 to interact with RDS and DynamoDB',
          'Amazon Redshift: Data warehousing basics',
          'Securing database access with IAM and VPC',
          'Querying databases using Python libraries'
        ],
        activities: [
          'Create a DynamoDB table and perform CRUD operations',
          'Set up an RDS instance and connect to it using Python',
          'Write a Python script to query a DynamoDB table',
          'Implement database security best practices'
        ]
      },
      {
        title: 'Networking and Security in AWS',
        duration: '1 week',
        topics: [
          'Amazon VPC: Subnets, route tables, and gateways',
          'Configuring security groups and network ACLs',
          'IAM roles, policies, and best practices for security',
          'AWS Secrets Manager and Parameter Store',
          'Implementing encryption for data at rest and in transit',
          'Security best practices and compliance'
        ],
        activities: [
          'Create a VPC and launch an EC2 instance in a private subnet',
          'Store and retrieve a secret using AWS Secrets Manager',
          'Configure an IAM role for a Lambda function',
          'Implement security best practices'
        ]
      },
      {
        title: 'Infrastructure as Code with AWS CloudFormation',
        duration: '1 week',
        topics: [
          'Introduction to Infrastructure as Code (IaC)',
          'Writing CloudFormation templates (YAML/JSON)',
          'Deploying resources using Boto3 and CloudFormation',
          'Managing stacks and stack updates',
          'Best practices for modular CloudFormation templates',
          'IaC security and compliance'
        ],
        activities: [
          'Write a CloudFormation template to deploy an S3 bucket and EC2 instance',
          'Use Boto3 to create and manage a CloudFormation stack',
          'Update a CloudFormation stack with a new resource',
          'Implement IaC best practices'
        ]
      },
      {
        title: 'DevOps and CI/CD with AWS',
        duration: '1 week',
        topics: [
          'Introduction to DevOps and CI/CD concepts',
          'AWS CodeCommit, CodeBuild, and CodePipeline',
          'Deploying Python applications with AWS CodeDeploy',
          'Monitoring CI/CD pipelines with CloudWatch',
          'Integrating Git with AWS services',
          'CI/CD best practices and automation'
        ],
        activities: [
          'Set up a CodePipeline for a Python application',
          'Deploy a Python web app using CodeDeploy',
          'Monitor a CI/CD pipeline with CloudWatch alarms',
          'Implement CI/CD best practices'
        ]
      },
      {
        title: 'Capstone Project',
        duration: '1 week',
        topics: [
          'Designing a full-stack Python application on AWS',
          'Integrating multiple AWS services',
          'Implementing serverless architecture',
          'Security and compliance considerations',
          'Performance optimization and cost management',
          'Documentation and deployment strategies'
        ],
        activities: [
          'Build a serverless e-commerce backend',
          'Create a photo gallery application',
          'Develop an automated data processing pipeline',
          'Present and demonstrate the final project'
        ]
      }
    ],
    prerequisites: [
      'Basic understanding of Python programming',
      'Familiarity with cloud computing concepts (optional)',
      'An AWS account (free tier recommended)'
    ],
    tools: [
      'AWS Free Tier',
      'Python 3.x',
      'Boto3',
      'AWS CLI',
      'Git',
      'VS Code',
      'AWS Management Console'
    ],
    finalProject: {
      objective: 'Build a full-stack Python application on AWS integrating multiple services',
      requirements: [
        'Choose one of the following projects:',
        'Serverless e-commerce backend with Lambda, API Gateway, and DynamoDB',
        'Photo gallery application with S3, Lambda, and CloudFront',
        'Automated data processing pipeline using S3, Lambda, and RDS',
        'Implement proper security measures and IAM roles',
        'Use CloudFormation for infrastructure deployment',
        'Set up CI/CD pipeline for automated deployment',
        'Write comprehensive documentation',
        'Include monitoring and logging'
      ],
      evaluationCriteria: [
        'Application functionality and completeness',
        'AWS service integration and architecture',
        'Security implementation',
        'Code quality and organization',
        'Documentation quality',
        'Deployment automation',
        'Cost optimization',
        'Best practices implementation'
      ]
    }
  },
  {
    id: 'aws-master-course',
    name: 'AWS Master Course',
    description: 'Advanced AWS concepts and architecture design.',
    price: 59999,
    duration: '12 weeks',
    category: 'cloud',
    level: 'advanced'
  },
  {
    id: 'azure-developer-course',
    name: 'Azure Developer Course',
    description: 'Microsoft Azure development and deployment.',
    price: 39999,
    duration: '8 weeks',
    category: 'cloud',
    level: 'intermediate'
  },
  {
    id: 'azure-master-course',
    name: 'Azure Master Course',
    description: 'Advanced Azure concepts and solutions architecture.',
    price: 59999,
    duration: '12 weeks',
    category: 'cloud',
    level: 'advanced'
  },
  {
    id: 'gcp-developer-course',
    name: 'GCP Developer Course',
    description: 'Google Cloud Platform development fundamentals.',
    price: 39999,
    duration: '8 weeks',
    category: 'cloud',
    level: 'intermediate'
  },
  {
    id: 'gcp-master-course',
    name: 'GCP Master Course',
    description: 'Advanced GCP concepts and architecture.',
    price: 59999,
    duration: '12 weeks',
    category: 'cloud',
    level: 'advanced'
  },
  {
    id: 'azure-devops',
    name: 'Azure DevOps',
    description: 'DevOps practices and tools in Azure environment.',
    price: 34999,
    duration: '6 weeks',
    category: 'cloud',
    level: 'intermediate'
  },
  {
    id: 'aws-devops',
    name: 'AWS DevOps',
    description: 'DevOps implementation on AWS platform.',
    price: 34999,
    duration: '6 weeks',
    category: 'cloud',
    level: 'intermediate'
  },
  {
    id: 'gcp-devops',
    name: 'GCP DevOps',
    description: 'DevOps practices using Google Cloud Platform.',
    price: 34999,
    duration: '6 weeks',
    category: 'cloud',
    level: 'intermediate'
  },
  {
    id: 'python-scripting-mastery',
    name: 'Python Scripting Mastery',
    description: 'Master Python programming for scripting, automation, and application development. This comprehensive course covers everything from basic syntax to advanced topics like web scraping, API integration, and GUI development. Perfect for beginners to intermediate learners looking to build practical Python skills.',
    price: 29999,
    duration: '8 weeks',
    category: 'devops',
    level: 'beginner',
    modules: [
      {
        title: 'Introduction to Python and Setup',
        duration: '2 hours',
        topics: [
          'What is Python? History and use cases',
          'Setting up Python environment (Python 3.x, IDEs)',
          'Writing and running first Python script',
          'Understanding Python interpreters and virtual environments',
          'Basic syntax: print(), variables, input()',
          'Basic data types: int, float, str, bool'
        ],
        activities: [
          'Install Python and set up a virtual environment',
          'Write a script to print "Hello, World!" and take user input',
          'Create a simple calculator for basic arithmetic operations',
          'Quiz on Python basics and environment setup'
        ]
      },
      {
        title: 'Control Structures and Data Structures',
        duration: '2 hours',
        topics: [
          'Conditional statements (if, elif, else)',
          'Loops (for, while, break, continue)',
          'Lists, tuples, sets, and dictionaries',
          'List comprehensions and dictionary comprehensions',
          'Common methods and operations for data structures',
          'Working with collections'
        ],
        activities: [
          'Write a script to grade student scores using conditionals',
          'Create a list of numbers and filter even numbers',
          'Build a to-do list manager using a list or dictionary',
          'Practice with list and dictionary comprehensions'
        ]
      },
      {
        title: 'Functions and Modules',
        duration: '2 hours',
        topics: [
          'Defining and calling functions',
          'Function arguments (positional, keyword, default)',
          'Lambda functions and anonymous functions',
          'Importing and using standard Python modules',
          'Creating custom modules and packages',
          'Scope of variables (local vs. global)'
        ],
        activities: [
          'Write a function to calculate factorial',
          'Create a module with utility functions',
          'Build a script using custom modules',
          'Practice with lambda functions'
        ]
      },
      {
        title: 'File Handling and Error Handling',
        duration: '2 hours',
        topics: [
          'Reading and writing text files',
          'Working with CSV and JSON files',
          'Exception handling (try, except, else, finally)',
          'File path management using os and pathlib',
          'Context managers and the with statement',
          'Error handling best practices'
        ],
        activities: [
          'Write a script to read a text file and count word frequency',
          'Create and read CSV files from dictionaries',
          'Build a log file parser with error handling',
          'Practice file system operations'
        ]
      },
      {
        title: 'Object-Oriented Programming (OOP)',
        duration: '2 hours',
        topics: [
          'Classes, objects, and methods',
          'Inheritance, polymorphism, and encapsulation',
          'Special methods (__init__, __str__)',
          'Properties and decorators',
          'Working with multiple classes',
          'OOP design patterns'
        ],
        activities: [
          'Create a Car class with attributes and methods',
          'Build a subclass that inherits from a parent class',
          'Develop a simple banking system with classes',
          'Practice OOP concepts with real-world examples'
        ]
      },
      {
        title: 'Libraries and APIs',
        duration: '2 hours',
        topics: [
          'Introduction to popular Python libraries',
          'Making HTTP requests and handling API responses',
          'Parsing JSON data from APIs',
          'Basic data analysis with pandas',
          'Virtual environments for library management',
          'API authentication and security'
        ],
        activities: [
          'Fetch data from a public API (e.g., weather API)',
          'Create and manipulate pandas DataFrames',
          'Build a weather data display script',
          'Practice API integration'
        ]
      },
      {
        title: 'Automation and Scripting',
        duration: '2 hours',
        topics: [
          'Automating tasks with Python scripts',
          'File and directory operations with os and shutil',
          'Scheduling scripts with schedule or cron',
          'Web scraping with BeautifulSoup and requests',
          'Email automation',
          'System administration tasks'
        ],
        activities: [
          'Write a script to rename multiple files',
          'Scrape a simple webpage for data',
          'Create a file organization script',
          'Practice automation techniques'
        ]
      },
      {
        title: 'Advanced Topics and Capstone Project',
        duration: '2 hours',
        topics: [
          'Regular expressions for pattern matching',
          'Multithreading and multiprocessing basics',
          'Testing with unittest',
          'Best practices: PEP 8, documentation',
          'Code organization and project structure',
          'Performance optimization'
        ],
        activities: [
          'Write a regex-based email validator',
          'Create a multithreaded data processor',
          'Write unit tests for functions',
          'Complete the capstone project'
        ]
      }
    ],
    prerequisites: [
      'Basic computer literacy',
      'No prior programming experience required',
      'Familiarity with any programming language is a plus'
    ],
    tools: [
      'Python 3.x',
      'VS Code/PyCharm/Jupyter Notebook',
      'NumPy',
      'pandas',
      'requests',
      'BeautifulSoup',
      'schedule',
      'unittest',
      'virtualenv/venv'
    ],
    finalProject: {
      objective: 'Build a real-world Python application integrating multiple concepts learned throughout the course',
      requirements: [
        'Choose one of the following projects:',
        'Personal finance tracker',
        'Web scraper for product prices',
        'Automated email sender',
        'Simple GUI app using tkinter',
        'Implement proper error handling and logging',
        'Write comprehensive documentation',
        'Include unit tests',
        'Follow PEP 8 guidelines'
      ],
      evaluationCriteria: [
        'Functionality and completeness',
        'Code quality and organization',
        'Error handling and robustness',
        'Documentation quality',
        'Testing coverage',
        'Best practices implementation'
      ]
    }
  },
  {
    id: 'linux-scripting-mastery',
    name: 'Linux Scripting Mastery',
    description: 'Master Linux scripting and automation with this comprehensive course. Learn to write efficient Bash scripts, automate system tasks, and manage Linux environments effectively. Perfect for system administrators, DevOps engineers, and developers looking to enhance their Linux automation skills.',
    price: 29999,
    duration: '8 weeks',
    category: 'devops',
    level: 'intermediate',
    modules: [
      {
        title: 'Introduction to Linux and Scripting',
        duration: '1 week',
        topics: [
          'Overview of Linux operating system and distributions',
          'Introduction to Linux command line and shell (Bash, Zsh)',
          'What is scripting? Why use scripts in Linux?',
          'Setting up a Linux environment',
          'Basic commands: ls, cd, pwd, man, echo, cat',
          'Understanding file permissions and users'
        ],
        activities: [
          'Set up a Linux environment and explore basic commands',
          'Write a simple command sequence to navigate and list files',
          'Practice file permission management',
          'Quiz on Linux basics and command-line navigation'
        ]
      },
      {
        title: 'Bash Shell Fundamentals',
        duration: '1 week',
        topics: [
          'Anatomy of a Bash script: shebang, comments, execution',
          'Variables: declaration, assignment, and scope',
          'Command-line arguments and user input',
          'Basic output commands: echo, printf',
          'Exit codes and status',
          'Running scripts: permissions, paths, execution methods'
        ],
        activities: [
          'Create a simple Bash script to print user input',
          'Experiment with variables and command-line arguments',
          'Write a script to collect and display system information',
          'Practice script execution and permissions'
        ]
      },
      {
        title: 'Control Structures in Bash',
        duration: '1 week',
        topics: [
          'Conditional statements: if, else, elif, and test',
          'Comparison operators: numeric, string, and file tests',
          'Loops: for, while, until',
          'Case statements for pattern matching',
          'Logical operators',
          'Control flow best practices'
        ],
        activities: [
          'Write a script to check file existence and permissions',
          'Create a loop to process a list of files',
          'Implement case statements for menu-driven scripts',
          'Practice control structure combinations'
        ]
      },
      {
        title: 'Text Processing and Manipulation',
        duration: '1 week',
        topics: [
          'Common text processing tools: grep, sed, awk',
          'Regular expressions basics',
          'Piping and redirection',
          'Working with files: reading, writing, appending',
          'Processing log files and extracting data',
          'Text manipulation best practices'
        ],
        activities: [
          'Use grep and sed to filter and modify text',
          'Write a script to parse a log file',
          'Practice with awk for data extraction',
          'Combine tools for complex text processing'
        ]
      },
      {
        title: 'Functions and Modular Scripting',
        duration: '1 week',
        topics: [
          'Defining and calling functions in Bash',
          'Passing arguments to functions',
          'Return values and variable scope',
          'Creating script libraries',
          'Sourcing scripts',
          'Modular scripting best practices'
        ],
        activities: [
          'Write a script with reusable functions',
          'Create a library of utility functions',
          'Implement modular system checks',
          'Practice function organization and reuse'
        ]
      },
      {
        title: 'Error Handling and Debugging',
        duration: '1 week',
        topics: [
          'Error handling: trap, exit codes',
          'Debugging techniques: set -x, set -e, set -u',
          'Logging errors to files or syslog',
          'Validating inputs and handling edge cases',
          'Testing scripts for reliability',
          'Debugging best practices'
        ],
        activities: [
          'Write a script with error handling',
          'Debug a provided faulty script',
          'Implement logging and error reporting',
          'Practice input validation and testing'
        ]
      },
      {
        title: 'Automation and Scheduling',
        duration: '1 week',
        topics: [
          'Introduction to cron and anacron',
          'Writing cron jobs: syntax and scheduling',
          'Automating system tasks: backups, updates',
          'Using at for one-time tasks',
          'Security considerations',
          'Automation best practices'
        ],
        activities: [
          'Set up a cron job for backups',
          'Automate system monitoring tasks',
          'Create a log cleanup automation',
          'Practice scheduling and security'
        ]
      },
      {
        title: 'Advanced Scripting and Real-World Projects',
        duration: '1 week',
        topics: [
          'Combining tools for complex tasks',
          'System monitoring scripts',
          'User management automation',
          'Introduction to Python and Perl in Linux',
          'Capstone project development',
          'Advanced scripting techniques'
        ],
        activities: [
          'Write a system monitoring script',
          'Develop a user management solution',
          'Create a log analyzer',
          'Complete the capstone project'
        ]
      }
    ],
    prerequisites: [
      'Basic understanding of Linux commands',
      'Familiarity with a text editor (Vim, Nano)',
      'Access to a Linux environment (Ubuntu, CentOS)'
    ],
    tools: [
      'Linux distribution (Ubuntu recommended)',
      'Text editor (Vim, Nano)',
      'Bash shell',
      'Common Linux utilities',
      'Cron and scheduling tools',
      'System monitoring tools'
    ],
    finalProject: {
      objective: 'Build a complete automation solution for system administration tasks',
      requirements: [
        'Choose one of the following projects:',
        'Log analyzer and monitoring system',
        'Automated backup and restore solution',
        'User management and permission system',
        'System resource monitoring and alerting',
        'Implement proper error handling and logging',
        'Write comprehensive documentation',
        'Include testing and validation',
        'Follow scripting best practices'
      ],
      evaluationCriteria: [
        'Functionality and completeness',
        'Code quality and organization',
        'Error handling and robustness',
        'Documentation quality',
        'Testing coverage',
        'Best practices implementation'
      ]
    }
  }
]

export const getCoursesByCategory = (category: Course['category']) => {
  return courses.filter(course => course.category === category)
}

export const getCourseById = (id: string) => {
  return courses.find(course => course.id === id)
} 