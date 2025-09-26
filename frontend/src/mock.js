// Mock data for the Precogs landing page

export const mockFeatures = {
  iac: {
    title: "Secure Infrastructure as Code (IaC) Configs",
    subtitle: "Infrastructure as Code is the blueprint of your cloud environment. Precogs ensures these blueprints are secure from the start, shifting security left to catch issues before they are deployed.",
    features: [
      {
        title: "Shift-Left Security Scanning",
        description: "Identify misconfigurations and vulnerabilities directly in your IDE or within your pull requests. Precogs scans your Terraform, Kubernetes, and CloudFormation templates against hundreds of built-in policies for common standards (CIS, SOC 2, HIPAA) and custom rules.",
        icon: "search"
      },
      {
        title: "Secrets Detection",
        description: "Prevent hardcoded secrets like API keys and passwords from ever being committed to your codebase. Precogs scans your IaC scripts to detect and alert on exposed credentials, integrating with secrets management tools for secure handling.",
        icon: "key"
      },
      {
        title: "Policy as Code Enforcement",
        description: "Automate compliance with enforceable guardrails. Define security policies as code to automatically prevent the deployment of non-compliant resources, such as publicly accessible S3 buckets or over-privileged IAM roles.",
        icon: "shield-check"
      },
      {
        title: "Drift Detection and Continuous Validation",
        description: "Maintain control after deployment. Precogs continuously monitors your running infrastructure, detecting and alerting you to any drift where the live environment deviates from the code-defined state.",
        icon: "activity"
      }
    ]
  },
  containers: {
    title: "Containers & Multi-Cloud Environment Security",
    subtitle: "Managing containerized applications across a multi-cloud strategy offers great flexibility but introduces challenges in consistent security, networking, and management.",
    features: [
      {
        title: "Container Image Scanning",
        description: "Integrate vulnerability scanning directly into your CI/CD pipeline. Precogs analyzes your container images for known vulnerabilities in OS packages and libraries before they are deployed, providing a clear Software Bill of Materials (SBOM).",
        icon: "package"
      },
      {
        title: "Unified Multi-Cloud Visibility",
        description: "Gain a single, centralized view of your security posture across all your cloud providers. Precogs abstracts away the complexity of different cloud-native tools, providing consistent security monitoring and policy enforcement.",
        icon: "cloud"
      },
      {
        title: "Runtime Threat Detection for Kubernetes",
        description: "Protect your running applications. Precogs employs runtime threat detection tools like Falco to monitor container behavior for anomalies, alerting you to potential attacks in real-time.",
        icon: "radar"
      },
      {
        title: "Orchestrated Security Policies",
        description: "Ensure consistent security and compliance across every cluster and cloud. With Precogs, you can define security policies once and have them applied universally, simplifying identity and access management (IAM) and network security.",
        icon: "settings"
      }
    ]
  }
};

export const mockComparison = {
  title: "The Precogs Advantage: An Integrated Security Nervous System",
  subtitle: "Unlike point solutions that only address one stage of the lifecycle, Precogs provides an integrated platform that connects security from code to cloud to runtime.",
  categories: [
    {
      feature: "Issue Detection",
      basic: "Scans code in isolation, often post-commit.",
      precogs: "Real-time feedback in the IDE; scans integrated across the SDLC."
    },
    {
      feature: "Multi-Cloud Management",
      basic: "Requires managing different consoles and security models.",
      precogs: "Unified control plane for consistent policy enforcement and visibility across clouds."
    },
    {
      feature: "Compliance",
      basic: "Manual checks or limited automated scans.",
      precogs: "Automated Policy as Code enforces standards and generates audit trails continuously."
    },
    {
      feature: "Remediation",
      basic: "Alerts often lack context, leaving prioritization to the team.",
      precogs: "Prioritized alerts with guided remediation steps, tracing runtime risks back to the source code."
    }
  ]
};

export const mockProcessSteps = [
  {
    step: "01",
    title: "Start with Visibility",
    description: "Connect Precogs to your code repositories and cloud accounts to instantly discover your IaC and container assets.",
    icon: "eye"
  },
  {
    step: "02",
    title: "Define Policies",
    description: "Establish your security baseline using our built-in policies or by customizing them for your organization's needs.",
    icon: "file-text"
  },
  {
    step: "03",
    title: "Automate Enforcement",
    description: "Integrate Precogs into your CI/CD pipelines to automatically block non-compliant deployments.",
    icon: "zap"
  },
  {
    step: "04",
    title: "Monitor and Optimize",
    description: "Use our centralized dashboard to monitor for drift, detect runtime threats, and continuously improve your security posture.",
    icon: "trending-up"
  }
];

export const mockStats = [
  { value: "500+", label: "Engineering Teams" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "85%", label: "Faster Detection" },
  { value: "10x", label: "ROI Improvement" }
];