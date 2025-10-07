import { GitHubIcon, LinkedInIcon, TelegramIcon } from '@/components/icons'

export const RESUME_DATA = {
	name: 'Sanjay Mewada',
	initials: '',
	location: 'Indore, India',
	locationLink: 'https://www.google.com/maps/place/Indore,+Madhya+Pradesh/',
	about: 
	    'DevOps & Cloud Engineer passionate about automation, scalability, and building reliable infrastructure that empowers development teams.',
    summary: `I specialize in DevOps, Cloud Computing, and Infrastructure Automation, with hands-on expertise in tools like Kubernetes, Terraform, Docker, and CI/CD pipelines. I design and implement cloud-native architectures that are scalable, secure, and resilient with a strong focus on efficiency and reliability.
    As an open-source contributor, I'm driven by a mission to bridge development and operations through automation, helping teams ship faster, safer, and smarter in the cloud.`,
	avatar: '/assets/3726913.png',
	personalWebsiteUrl: {
		name: 'Portfolio',
		url: ''
	},
	contact: {
		link: {
			name: 'Other Links',
			url: ''
		},
		email: {
			name: 'Email',
			at: 'sanjaymewada786@gmail.com'
		},
		tel: {
			name: 'Phone',
			phoneNumber: '+9179962143'
		},
		social: [
			{
				name: 'GitHub',
				url: 'https://github.com/sanjaymewada',
				icon: GitHubIcon
			},
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/sanjaymewada-',
				icon: LinkedInIcon
			},
			{
				name: 'Telegram',
				url: '',
				icon: TelegramIcon
			}
		]
	},
	education: [
		{
		  school: 'RGPV',
		  degree: "Bachelor of Engineering, Computer Science Engineering",
		  start: 'Jul, 2012',
		  end: 'Jun, 2016',
		description: [
  			'Built a strong foundation in programming, networking, virtualization, and system design.',
  			'Gained hands-on experience in server setup network setup, and troubleshooting.',
  			'Worked on academic projects involving system design, network simulations, and resource management.',
  			'Participated in workshops and tech events, developing problem-solving and collaboration skills.',
  			'This journey laid the groundwork for a career in server administration, DevOps, and cloud computing.'
]
		}
	],
	work: [
		{
		  company: 'ICS industrial Automation Pvt Ltd',
		  link: 'https://www.ics-india.co.in',
		  badges: ['In-Office'],
		  jobs: [
			{
			  title: 'IT-Executive',
			  start: 'Mar, 2023',
			  end: 'Present',
			  description:[
          'Progressed from Server/Network support to full Cloud DevOps responsibilities, mastering automation, containerization, and monitoring.',
		  'Worked as a Server Administrator and IT Support, managing Linux/Windows servers, IIS, and troubleshooting issues to ensure high system uptime.',
          'Skilled in server management (ADDS, DNS,IIS), virtualization (VMware, Hyper-V), and cloud technologies (AWS).',
          'Automated cloud infrastructure provisioning using Terraform and Ansible across AWS environments, reducing manual efforts',
          'Implemented CI/CD pipelines for both on-premises and cloud environments using Jenkins and AWS DevOps, accelerating software delivery.',
          'Managed Kubernetes clusters and containerized applications with Docker and Helm charts.',
          'Monitored and optimized system performance with Prometheus, Grafana.',
          'Collaborated with cross-functional teams to enhance deployment workflows, incident response, and IT operations.',
          'Ensured cloud resources are secure, compliant, and cost-efficient, integrating IAM, VPC, and Auto Scaling best practices.'
        ]
			}
		  ]
		},
		{
		  company: 'Ecom-Express',
    link: 'https://www.ecomexpress.in',
    badges: ['In-Office'],
    jobs: [
      {
        title: 'Desktop Support Engineer',
        start: 'Aug, 2022',
        end: 'Nov, 2022',
        description: [
          'Delivered L1/L2 support for desktops, laptops, printers, and networking devices.',
          'Managed OS deployment, software installation, patching, and Active Directory user management.',
          'Resolved hardware and software issues promptly, improving end-user productivity.',
          'Maintained IT asset inventory and supported CCTV and biometric access systems.',
          'Implemented IT policies and ensured compliance with security standards.'
        ]
      }
    ]
  },
  {
    company: 'Indian Institute of Management (IIM) – Indore',
    link: 'https://www.iimidr.ac.in',
    badges: ['In-Office'],
    jobs: [
      {
        title: 'Network Support Engineer',
        start: 'Feb, 2020',
        end: 'Oct, 2021',
        description: [
          'Monitored and managed LAN/WAN, VLANs, VPNs, and firewalls, ensuring secure and reliable connectivity.',
          'Configured and troubleshot Cisco routers and switches, improving network performance.',
          'Supported wireless networks to enhance academic and administrative uptime.',
          'Documented incidents, performed Root Cause Analysis, and implemented preventive measures to strengthen network reliability.',
          'Collaborated with IT teams to optimize network operations and maintain compliance.'
        ]
      }
    ]
  },
	],	  
	skills: [
		'AWS',
		'EC2',
		'S3',
		'EKS',
		'IAM',
		'DevOps',
		'Kubernetes',
		'Docker',
		'Terraform',
		'Ansible',
		'Linux',
		'Ubuntu',
		'CentOS',
		'CI/CD',
		'Jenkins',
		'GitHub Actions',
		'Prometheus',
		'Grafana',
		'ELK Stack',
		'Git',
		'Shell Scripting',
		'Bash',
		'GitLab',
		'Python',
		'YAML',
		'Monitoring',
		'Logging',
		'CloudFormation',
		'Helm',
		'NGINX',
		'Networking',
		'GitHub',
		'GitOps',
		'Collaboration',
		'Problem Solving',
		'Communication',
		'Teamwork',
		'Adaptability',
		'Open Source',
		'Community Engagement',
		'Continuous Learning',
		'Infrastructure as Code',
		'Configuration Management',
		'Secrets Management',
		'Incident Management',
		'Disaster Recovery',
		'Load Balancing',
		'High Availability',
		'Performance Tuning',
		'Security Best Practices',
		'HashiCorp Vault',
		'Agile',
		'DevOps Practices',
		'VS Code'
	],	  
	projects: [
		{
		  title: 'Sample Flask App Full Pipeline',
		  techStack: ['Python','k8s','GitHub (Code)','Docker (Containerization)','Jenkins (CI)','SonarQube (Quality)','Trivy (Filesystem Scan)',
'ArgoCD (CD)','Redis (Caching)','Helm (Monitoring using grafana and prometheus)'],
		  description: 'deploy python flask project on kubeadm using  jenkin Ci  pipeline  and Argocd CD.',
		  link: {
			label: 'Full jenkin Pipeline',
			href: 'https://github.com/sanjaymewada/fullpipeline'
		  }
		},

		{
		  title: 'Prescripto - Doctor Appointment Web App',
		  techStack: ['React.js','Node.js','Express.js','MongoDB'],
		  description: 'Create docker file and docker compose and run in docker desktop.',
		  link: {
			label: 'Prescripto',
			href: 'https://github.com/sanjaymewada/prescripto_full-stack_doctor_appointment_app.git'
		  }
		},

		{
		  title: 'Expenses-Tracker-WebApp',
		  techStack: ['Java','Spring boot','Spring MVC','Spring Security','Spring Data (JPA)','MySQL','Thymeleaf','Bootstrap'],
		  description: 'fork the project and run in local docker desktop environment.',
		  link: {
			label: 'Expenses-Tracker',
			href: 'https://github.com/sanjaymewada/Expenses-Tracker-WebApp.git'
		  }
		},

		{
		  title: 'Two-tier-flask-app',
		  techStack: ['Python + Flask','mysql'],
		  description: 'deploy python flask project on Docker, Docker Compose.',
		  link: {
			label: 'two-tier-flask-app',
			href: 'https://github.com/sanjaymewada/two-tier-flask-app.git'
		  }
		},
		
		
		

		
	]			
}





